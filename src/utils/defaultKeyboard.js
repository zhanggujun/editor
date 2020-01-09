import { ToolLeft } from './editor'

const defaultKeyboard = ToolLeft.map(item => {
  return {
    name:item.name ? item.name : '',
    code:item.code ? item.code : '',
    range:item.range ? item.range : 0,
    key: item.key
  }
})

export default defaultKeyboard
