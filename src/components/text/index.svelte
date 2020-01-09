<svelte:options accessors={true} />
<div class="md-input">
  <textarea
    class="md-text md-scroll"
    placeholder={placeholder}
    bind:this={element}
    readonly={preview}
    on:input={changeInput}
    on:scroll={scrollText}
    on:compositionstart={onCompositionStart}
    on:compositionend={compositionEnd}
  >{ value }</textarea>
</div>
<script>
  import { onMount,onDestroy } from 'svelte'
  import debounce from 'lodash/debounce'
  import { createEventDispatcher } from 'svelte'
  import { syncScroll } from '../../utils/editor'
  import isElement from 'lodash/isElement'

  // vars
  let MdLockInput = false
  let element

  export let placeholder
  export let value
  export let preview
  export let EditorBox

  // $:preview , setInput()

  const dispatch = createEventDispatcher()
  const scrollText = event => syncScroll(EditorBox,'text')
  const onCompositionStart = event => MdLockInput = true
  const compositionEnd = event => MdLockInput = false
  const changeInput = event => debounce(() => {
    if(MdLockInput)
      return false
    dispatch('changed',event.target.value)
  },50)()

  onMount(() => {
    dispatch('mountKeyBoard')
  })

  onDestroy(() => {
    dispatch('destroyKeyBoard')
  })

</script>
<style lang="scss">
  .md-input{
    float:left;
    height:100%;
    overflow:hidden;
    position:relative;
  }
  .md-text{
    display:block;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:20;
    outline:0 none;
    border:0 none;
    resize:none;
    padding:10px;
    -webkit-font-smoothing: antialiased;
    font-family:RobotoMono,PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,\\\5FAE\8F6F\96C5\9ED1,STHeitiSC-Light,simsun,\\\5B8B\4F53,WenQuanYi Zen Hei,WenQuanYi Micro Hei,sans-serif;
   /*font-family:"Helvetica Neue", "Xin Gothic", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;;*/
    font-size:16px;
    line-height:1.5;
    color:#24292e;
    white-space: pre-wrap;
    word-wrap: break-word;
    letter-spacing:1px;
  }
</style>
