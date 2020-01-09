<svelte:options accessors={true} />
<div class="md-tool">
  <div class="md-icon-box md-tool-l {preview && 'md-tool-hide'}">
    {#each toollist as item}
      <i
        data-name={item.name || item.icon || ''}
        class="md-icon iconfont {item.icon || item.name}"
        title={`${item.title || ''} ${item.key || ''}`}
        on:click="{() => HanderTool(item)}"></i>
    {/each}
  </div>
  <div class="md-icon-box md-tool-r">
    <i class="md-line"></i>
    {#each ToolRight as item}
      <i
        class="md-icon iconfont {item.icon || item.name}"
        title={`${item.title} ${item.key || ''}`}
        class:md-active={
          (item.name=='splitscreen' && splitscreen) ||
          (item.name=='preview' && preview) ||
          (item.name=='fullscreen' && fullscreen)
        }
        on:click="{() => HanderControl(item)}"></i>
    {/each}
  </div>
</div>
<script>
  import { onMount,createEventDispatcher } from 'svelte'
  import { ToolRight } from '../../utils/editor'
  import keyboard from '../../utils/keyboard'

  // props
  export let fullscreen
  export let splitscreen
  export let preview
  export let toollist

  const dispatch = createEventDispatcher()
  const HanderTool = item => dispatch('insertHandler',{ item })
  const HanderControl = item => dispatch('controlHandler',{ item })
  const toolLeftKeyBoard = _ => dispatch('toolLeftKeyBoard')
  const toolRightKeyBoard = _ => dispatch('toolRightKeyBoard')

  onMount(() => {
    toolLeftKeyBoard()
    toolRightKeyBoard()
  })

</script>
<style lang="scss">
  .md-tool{
    padding:6px 3px;
    border-bottom: 1px solid #ccc;
    background: #f1f1f1;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
    background-color: #f3f3f3;
    background-image: linear-gradient(top, #f5f5f5, #efefef);
    background-repeat: repeat-x;
    user-select:none;
    -webkit-touch-callout: none;
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    flex-shrink:0;
    justify-content:flex-end;
    .md-tool-hide{
      display:none;
    }
  }
  .md-icon-box{
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    &.md-tool-l{
      flex:1;
      flex-wrap:wrap;
      padding-right:5px;
      position:relative;
      &::after{
        display:block;
        content:"";
        position:absolute;
        right:0;
        top:5px;
        bottom:5px;
        width:1px;
        background:#ccc;
      }
    }
    &.md-tool-r{
      flex-shrink:0;
      padding-left:5px;
    }
  }
  .md-icon{
    width:25px;
    height:25px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    color:#888;
    border:1px solid transparent;
    margin:1px;
    transition: all .2s;
    border-radius:2px;
    overflow:hidden;
    font-weight:bold;
    cursor:pointer;
  }
  .md-icon:hover{
    border:1px solid #ddd;
    color:#444;
    transition: all .2s;
  }
  .md-icon.md-active{
    border:1px solid #ddd;
    background-color: #ebebeb;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1) inset;
    transition: all .2s;
  }
</style>
