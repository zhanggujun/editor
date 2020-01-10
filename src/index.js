import App from './components/editor/index.svelte'

import './style/reset.css'
import './icon/iconfont.css'
// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/atom-one-dark-reasonable.css'
// import 'highlight.js/styles/github-gist.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'

import pkg from '../package.json'

import jq from './utils/dom'

import { insertAfterText,insertBeforeText } from './utils/range'
import marked from './utils/marked'

import isElement from 'lodash/isElement'
import isPlainObject from 'lodash/isPlainObject'

class ToolBar{
  constructor(editor){
    this.editor = editor
  }
  has(name){
    if(!name)
      return false
    const item = this.get(name)
    return item ? true : false
  }
  _add(item){
    const { toollist } = this.editor
    const tools = [...toollist,item]
    return tools
  }
  add(item){
    if(!isPlainObject(item) || !item.icon || !item.name)
      return false
    const has = this.has(item.name)
    if(has)
      return false
    const tools = this._add(item)
    this.editor.toollist = tools
  }
  _del(name){
    const { toollist } = this.editor
    const findIndex = toollist.findIndex(item => item.name == name)
    if(findIndex != -1){
      toollist.splice(findIndex,1)
    }
    return toollist
  }
  del(name){
    if(!name)
      return false
    const has = this.has(name)
    if(!has)
      return false
    const tools = this._del(name)
    this.editor.toollist = tools
  }
  _replace(name,item){
    const { toollist } = this.editor
    const findIndex = toollist.findIndex(val => val.name == name)
    if(findIndex == -1)
      return false
    toollist.splice(findIndex,1,item)
    return toollist
  }
  replace(name,item){
    if(!isPlainObject(item) || !item.icon || !item.name)
      return false
    if(!name)
      return false
    const tools = this._replace(name,item)
    this.editor.toollist = tools
  }
  set(item){
    if(!isPlainObject(item) || !item.icon || !item.name)
      return false
    let { toollist } = this.editor
    const findIndex = toollist.findIndex(val => val.name == item.name)
    if(findIndex == -1){
      toollist = this._add(item)
    }else{
      toollist = this._replace(item.name,item)
    }
    this.editor.toollist = toollist
  }
  get(name){
    if(!name)
      return false
    const { toollist } = this.editor
    return toollist.find(val => val.name == name)
  }
}
const getToolBar = _ => {
  return [
    'undo',
    'redo',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'quote',
    'code',
    'orderedlist',
    'unorderedlist',
    'link',
    'table',
    'line',
    'image'
  ]
}

const defaultOptions = _ => {
  return {
    height:400,
    value:'',
    xss:{},
    scroll:true,
    fullscreen:false,
    splitscreen:true,
    preview:false,
    placeholder:'输入内容 ...',
    toolbar:getToolBar()
  }
}

class Editor{
  constructor(el,options = {}){
    const element = isElement(el) ? el : jq.$(el)
    if(!isElement(element))
      throw new Error(`target is not HTMLElement`)
    const oTextarea = jq.$('textarea',element)
    if(isElement(oTextarea))
      oTextarea.style.display = 'none'
    const _defaultOptions = defaultOptions()
    const _options = { ..._defaultOptions,...options }
    this.editor = new App({
      target:element,
      props:{
        ..._options
      }
    })
    this.editor.set = this.editor.$set
    this.editor.on = this.editor.$on
    this.editor.destroy = this.editor.$destroy
    this.toolbar = new ToolBar(this.editor)
    this.version = pkg.version
  }
  insertAfterText(text){
    insertAfterText(this.editor.EditorBox,text,value => {
      this.editor.value = value
    })
  }
  insertBeforeText(text){
    insertBeforeText(this.editor.EditorBox,text,0,value => {
      this.editor.value = value
    })
  }
  setText(value){
    this.editor.value = value
  }
  getText(){
    return this.editor.value
  }
}

class _MdEditor{
  constructor(){
    this.MdCreate = Editor
    this.MdMarked = marked
  }
}

const MdEditor = new _MdEditor()

export default MdEditor
