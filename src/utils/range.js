import jq from './dom'

export const getTextEl = oBox => {
  const oEle = jq.$('.md-text',oBox)
  return oEle || null
}
export const getSelection = oBox => {
  let box = getTextEl(oBox)
  return {
    start:box.selectionStart,
    end:box.selectionEnd
  }
}

export const setSelection = (oBox,start,end) => {
  let box = getTextEl(oBox)
  box.setSelectionRange(start,end)
  // box.selectionStart = start
  // box.selectionEnd = end
}

export const getSelectText = (oBox,start,end) => {
  let box = getTextEl(oBox)
  return box.value.substring(start,end)
}

export const insertAfterText = (oBox,value,fn) => {
  let box = getTextEl(oBox)
  setRangeText(oBox,value)
  let _value = box.value
  typeof fn === 'function' && fn(_value)
  box.focus()
}

export const setRangeText = (oBox,text) =>{
  let box = getTextEl(oBox)
  box.setRangeText(text)
}

export const insertBeforeText = (oBox,value,revise = 0,fn,bool) => {
  let box = getTextEl(oBox)
  let range = getSelection(oBox)
  setRangeText(oBox,value)
  let _value = box.value
  typeof fn === 'function' && fn(_value)
  if(!bool)
    setSelection(oBox,range.start+value.length,range.end+value.length+revise)
  let scrollTop = box.scrollTop
  box.scrollTop = scrollTop
  box.focus()
}
