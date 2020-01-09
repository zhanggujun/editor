<svelte:options accessors={true} />
<div class="md-body md-clear">
  <MdEditorText
    placeholder={placeholder}
    value={value}
    EditorBox={EditorBox}
    preview={preview}
    on:changed={changed}
    on:mountKeyBoard={mountKeyBoard}
    on:destroyKeyBoard={destroyKeyBoard}
  />
  <MdEditorInner
    scroll={scroll}
    value={value}
    xss={xss}
    EditorBox={EditorBox}
  />
</div>
<script>
  import MdEditorText from '../text/index.svelte'
  import MdEditorInner from '../inner/index.svelte'
  import { onMount,createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  // props
  export let scroll
  export let placeholder
  export let value
  export let xss
  export let preview
  export let EditorBox

  const changed = ({ detail }) => dispatch('changed',detail)
  const mountKeyBoard = _ => dispatch('mountKeyBoard')
  const destroyKeyBoard = _ => dispatch('destroyKeyBoard')
</script>
<style lang="scss">
  .md-body{
    flex:1;
    overflow:hidden;
  }
</style>

