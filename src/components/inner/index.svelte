<svelte:options accessors={true} />
<div class="md-inner md-scroll" on:scroll={scrollInner}>
  <div class="md-section">{@html htmlText}</div>
  {#if !value.trim()}
    <div class="md-alert"><span class="md-alert-text">预览区域</span></div>
  {/if}
</div>
<script>

  import { getContext } from 'svelte'
  import { syncScroll } from '../../utils/editor'
  import marked from '../../utils/marked'

  export let scroll
  export let value
  export let xss
  export let EditorBox

  let htmlText = ''

  const getHtml = _ => {
    const { html } = marked(value,{xssOptions:xss})
    htmlText = html
  }

  $:value , getHtml()

  // methods
  const scrollInner = event => scroll && syncScroll(EditorBox,'inner')
</script>
<style lang="scss">
  .md-inner{
    height:100%;
    float:left;
    position:relative;
  }
  .md-alert{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:20;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .md-alert-text{
    height:100%;
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#ddd;
    font-size:20px;
    font-weight:400;
  }
  .md-section{
    max-width:900px;
    margin:0 auto;
    padding:10px 10px 20px 10px;
    /*padding:10px;*/
    width:100%;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    color: #24292e;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
    text-size-adjust:100%;
  }
</style>
