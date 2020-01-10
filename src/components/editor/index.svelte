<svelte:options accessors={true} />
<div
  class="md-editor md-border-box {splitscreen ? 'md-split' : ''} {preview ? 'md-preview' : ''} {fullscreen ? 'md-full-screen' : ''}"
  bind:this={EditorBox}
  style={height ? `height:${height}px` : '500px'}
  zgj-mdeditor
>
  <MdTool
    toollist={toollist}
    fullscreen={fullscreen}
    splitscreen={splitscreen}
    preview={preview}
    on:insertHandler={insertHandler}
    on:controlHandler={controlHandler}
    on:toolRightKeyBoard={toolRightKeyBoard}
  />
  <MdBody
    scroll={scroll}
    value={value}
    xss={xss}
    EditorBox={EditorBox}
    placeholder={placeholder}
    preview={preview}
    on:changed={changed}
    on:mountKeyBoard={mountKeyBoard}
    on:destroyKeyBoard={destroyKeyBoard}
  />
</div>
<script>
  // import
  import { onMount,onDestroy,createEventDispatcher } from 'svelte'
  import keyboard from '../../utils/keyboard'
  import MdTool from '../tool/index.svelte'
  import MdBody from '../body/index.svelte'
  import { insertBeforeText,insertAfterText,getSelection,setSelection,getSelectText,getTextEl } from '../../utils/range'
  import marked from '../../utils/marked'
  import defaultKeyboard from '../../utils/defaultKeyboard'
  import { ToolLeft,ToolRight,EOL,INDENT } from '../../utils/editor'
  import jq from '../../utils/dom'
  import Stack from '../../utils/stack'
  import isArray from 'lodash/isArray'
  import throttle from 'lodash/throttle'
  import uniqBy from 'lodash/uniqBy'
  import uniq from 'lodash/uniq'
  import cloneDeep from 'lodash/cloneDeep'

  // vars
  const dispatch = createEventDispatcher()
  let hasRecordInsert = false
  let hasRecordTimer = null
  let hasRecordRangeTimer = null
  let stack = new Stack({ value,range:null })
  let oldStatus = true

  // props
  export let height
  export let value
  export let placeholder
  export let xss
  export let scroll
  export let fullscreen
  export let splitscreen
  export let preview
  export let EditorBox
  export let toolbar
  export let toollist = []

  const setToolBar = _ => {
    const array = (toolbar && isArray(toolbar) && toolbar.length) ? [ ...toolbar ] : null
    const tools = cloneDeep(ToolLeft)
    toollist = []
    if(array){
      for(let i=0,l=tools.length;i<l;i++){
        let all = tools[i]
        for(let j=0,t=array.length;j<t;j++){
          let tool = array[j]
          if(all.name == tool){
            toollist.push(all)
          }
        }
      }
    }else{
      toollist = [...tools]
    }
  }

  // watch
  $:toolbar , setToolBar()
  $:value , setRecord()
  $:toollist , (() => {
    destroyKeyLeft()
    toolLeftKeyBoard()
  })()


  // methods
  const setRecord = _ => {
    if(hasRecordInsert)
      return false
    let range = null
    try{
      range = getSelection(EditorBox)
    }catch(ex){}
    stack.push({ value,range,scroll })
  }

  const clearTimerEvent = _ => {
    if(hasRecordRangeTimer)
      clearTimeout(hasRecordRangeTimer)
    if(hasRecordTimer)
      clearTimeout(hasRecordTimer)
  }

  // function
  const controlCmd = item => {
    clearTimerEvent()
    const box = getTextEl(EditorBox)
    let { value:historyValue,range = {} } = item || {}
    if(historyValue){
      value = historyValue
      hasRecordRangeTimer = setTimeout(() => {
        if(box)
          box.focus()
        range = range || { start:historyValue.length,end:historyValue.length }
        setSelection(EditorBox,range.start,range.end)
      },0)
    }
    hasRecordTimer = setTimeout(() => hasRecordInsert = false,500)
  }
  const markedUndo = _ => { // 撤销
    hasRecordInsert = true
    const item = stack.undo()
    controlCmd(item)
  }
  const markedRedo = _ => {  // 重做
    hasRecordInsert = true
    const item = stack.redo()
    controlCmd(item)
  }
  const findRecentIndex = (array,value) => {
    let arr = array.concat([])
    arr.push(value)
    arr.sort((a, b) => a - b)
    let index = arr.indexOf(value)
    if (index === 0) {
      return arr[index + 1]
    } else if (index === array.length - 1) {
      return arr[index - 1]
    }
    let resultIndex =
      arr[index] - arr[index - 1] > arr[index + 1] - arr[index]
        ? index + 1
        : index - 1
    return arr[resultIndex]
  }
  const addIndent = event => {
    let range = getSelection(EditorBox)
    let checkedVal = getSelectText(EditorBox,range.start,range.end)
    if(checkedVal == ''){
      insertBeforeText(EditorBox,INDENT,0,fnValue => value = fnValue)
    }else{
      let val = checkedVal.split(EOL)
      val = val.map(item => item == '' ? item : INDENT+item).join(EOL)
      insertAfterText(EditorBox,val,fnValue => value = fnValue)
    }
    event.preventDefault()
  }
  const removeIndent = event => {
    const range = getSelection(EditorBox)
    let checkedVal = getSelectText(EditorBox,range.start,range.end)
    if(checkedVal == ''){ // 如果被选中的内容为空
      const isIndent = getSelectText(EditorBox,range.start-INDENT.length,range.end) == INDENT // 被选中的内容前面的字符是设置的两个空字符串(空格)
      if(isIndent){
        // 把内容根据换行符分割，然后把每个换行符的位置记录下来。找到离光标最近的一个换行符位置。把这个位置设置为光标终点，然后获取光标起点到终点之间的字符串替换
        let index = value.indexOf(EOL)
        let number = 0
        let array = []
        while(index !== -1){
          array.push(index)
          number ++
          index = value.indexOf(EOL,index+1)
        }
        // 过滤掉比光标终点位置小的换行符。
        array = array.filter(item => item > range.end)
        if(isArray(array) && array.length){
          // 找到离光标最近的换行符的位置
          const endIndex = findRecentIndex(array,range.end)
          let _checkedVal = getSelectText(EditorBox,range.start-INDENT.length,endIndex)
          // 把光标起点和终点设置在被选中的文字上，重新插入内容的时候会把这段被选中的文字替换掉
          _checkedVal = _checkedVal.replace(INDENT,'')
          if(_checkedVal){
            setSelection(EditorBox,range.start-INDENT.length,endIndex)
            insertAfterText(EditorBox,_checkedVal,fnValue => value == fnValue)
            setSelection(EditorBox,range.start-INDENT.length,range.end-INDENT.length)
          }
        }
      }
    }else{
      const indentReg = new RegExp('^' + INDENT)
      let val = checkedVal.split(EOL)
      val = val.map(item => indentReg.test(item) ? item.replace(INDENT,'') : item).join(EOL)
      insertBeforeText(EditorBox,val,0,fnValue => {
        value = fnValue
        const newRange = getSelection(EditorBox)
        setSelection(EditorBox,range.start,newRange.end)
      },true)
    }
    event.preventDefault()
  }
  const getBeforeTextInLine = (revise = 1) => {  // 找到离光标最近的字符串
    const range = getSelection(EditorBox)
    let text = getSelectText(EditorBox,0,range.end)
    let array = text.split(EOL)
    return (isArray(array) && array.length) ? array[array.length - revise] : ''
  }
  const autoComplete = event => {   // 添加折行(有序，无序列表，引用，保持和上一行一致，其他的自动折行)
    const text = getBeforeTextInLine()
    if(text){
      let prefix = text.substr(0, 2)
      let reg = /^\d+\./
      let range,replaceInsertText
      if(prefix == '* ' || prefix == '+ ' || prefix == '- ' || prefix == '> '){
        if(prefix.length < text.length){
          insertBeforeText(EditorBox,EOL+prefix,0,fnValue => value = fnValue)
        }else{
          range = getSelection(EditorBox)
          replaceInsertText = getSelectText(EditorBox,range.start-prefix.length,range.end)
          replaceInsertText = replaceInsertText.replace(replaceInsertText,'')
          setSelection(EditorBox,range.start-prefix.length,range.end)
          insertBeforeText(EditorBox,EOL+replaceInsertText,-prefix.length,fnValue => value = fnValue)
        }
      }else if(reg.test(text.trim())){
        let textTrim = text.trim()
        let num = textTrim.split('.')[0]
        if(textTrim.length > num.length + 1){
          let autoNum = parseInt(num) + 1
          let insertText = EOL + autoNum + '. '
          insertBeforeText(EditorBox,insertText,0,fnValue => value = fnValue)
        }else{
          range = getSelection(EditorBox)
          replaceInsertText = getSelectText(EditorBox,range.start-text.length,range.end)
          replaceInsertText = replaceInsertText.replace(replaceInsertText,'')
          setSelection(EditorBox,range.start-text.length,range.end)
          insertBeforeText(EditorBox,EOL+replaceInsertText,-text.length,fnValue => value = fnValue)
        }
      }else{
        insertBeforeText(EditorBox,EOL,0,fnValue => value = fnValue)
      }
    }else{
      insertBeforeText(EditorBox,EOL,0,fnValue => value = fnValue)
    }
    event.preventDefault()
  }
  const keepIndent = event => {
    let text = getBeforeTextInLine(2)
    if(text){
      let indent = text.split(INDENT)
      if (indent.length >= 2){
        let count = 0
        let buffer = []
        while (indent[count] == '' && count < (indent.length - 1)){
          count ++
          buffer.push(INDENT)
        }
        insertBeforeText(EditorBox,buffer.join(''),0,fnValue => value = fnValue)
      }
    }
    event.preventDefault()
  }
  const getInfo = (type = 'left') => {
    const toolLeft = [...toollist,...defaultKeyboard]
    const toolRight = cloneDeep(ToolRight)
    const bool = type == 'left'
    let tools = []
    if(bool){
      tools = (uniqBy(toolLeft,'key') || [])
    }else{
      tools = toolRight
    }
    const keys = tools.map(item => item.key).filter(item => item).join(',')
    return {
      keys,
      tools
    }
  }
  const getItem = (tool=[],key='') => tool.find(item => item.key == key)

  const hasMultiple = _ => {
    const oMultipleBox = jq.$('.md-editor[zgj-mdeditor]',document,true)
    return oMultipleBox.length > 1
  }

  const toolKeyBoard = type => {
    const { keys,tools } = getInfo(type) || {}
    const bool = type == 'left'
    if(!keys)
      return false
    keyboard.bind(keys,(event,handler) => {
      const multiple = hasMultiple()
      if(multiple)
        return false
      const { key } = handler
      if(key){
        const item = getItem(tools,key)
        if(item){
          if(bool){
            insertHandler({ detail:{ item } })
          }else{
            controlHandler({ detail: { item } })
          }
        }
      }
    },true,EditorBox)
  }

  // emit
  const changed = ({ detail }) => value = detail
  const controlHandler = ({ detail = {} }) => {
    const { item } = detail
    if(item.name == 'splitscreen'){
      splitscreen = !splitscreen
      if(splitscreen){
        preview = false
      }
    }else if(item.name == 'preview'){
      preview = !preview
      if(preview){
        oldStatus = splitscreen
        splitscreen = false
      }else{
        splitscreen = oldStatus
      }
    }else if(item.name == 'fullscreen'){
      fullscreen = !fullscreen
    }
  }
  const insertHandler = ({ detail = {} }) => {
    if(preview)
      return false
    const { item = {} } = detail
    if(item && typeof item.handler === 'function'){
      item.handler()
    }else{
      item.handler = _ => {
        let { code = '',range = 0,name } = item
        if(name == 'undo'){ // 撤销
          markedUndo()
        }else if(name == 'redo'){ // 重做
          markedRedo()
        }else{ // 添加代码
          if(!code)
            return false
          insertBeforeText(EditorBox,code,range,val => value = val)
        }
      }
      item.handler()
    }
  }
  const toolLeftKeyBoard = _ => toolKeyBoard('left')
  const toolRightKeyBoard = _ => toolKeyBoard('right')
  const mountKeyBoard = _ => {
    keyboard.bind('tab',event => {
      throttle(() => {
        addIndent(event)
      },100)()
    },false,EditorBox)
    keyboard.bind('shift+tab',event => {
      throttle(() => {
        removeIndent(event)
      },100)()
    },false,EditorBox)
    keyboard.bind('enter',event => {
      throttle(() => {
        autoComplete(event)
        keepIndent(event)
      },100)()
    },true,EditorBox)
  }
  const destroyKeyBoard = _ => {
    keyboard.unbind('enter,tab,shift+tab')
    destroyToolKeyBoard()
  }
  const destroyKeyLeft = _ => {
    const { keys } = getInfo('left')
    if(!keys)
      return false
    keyboard.unbind(keys)
  }
  const destroyKeyRight = _ => {
    const { keys } = getInfo('right')
    if(!keys)
      return false
    keyboard.unbind(keys)
  }
  const destroyToolKeyBoard = _ => {
    destroyKeyLeft()
    destroyKeyRight()
  }

  // mount
  onMount(() => {

  })

  onDestroy(() => {
    clearTimerEvent()
    destroyKeyBoard()
  })

</script>
<style lang="scss">
  .md-editor{
    border:1px solid #ccc;
    overflow:hidden;
    border-radius:3px;
    display:flex;
    flex-direction:column;
    transition:all .3s;
    background-color:#fff;
    &.md-full-screen{
      position:fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:19901224;
      height:auto!important;
      transition:all .3s;
      background-color:#fff;
    }
  }
</style>
