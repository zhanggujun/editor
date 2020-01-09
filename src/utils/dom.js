import isElement from 'lodash/isElement'
const jq = {
  $ (selector,context=document,isAll=false){
    context = jq._$(context)
    return isAll?context.querySelectorAll(selector):context.querySelector(selector)
  },
  _$(context){
    let _content = document
    if(isElement(context)){
      _content = context
    }else if(typeof context==='string'){
      _content = document.querySelector(context)
    }else{
      _content = document
    }
    return _content
  },
  on (element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (let i = 0; i < events.length; i++) {
      element.addEventListener(events[i],handler,false)
    }
  },
  off (element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (let i = 0; i < events.length; i++) {
      element.removeEventListener(events[i],handler,false)
    }
  },
  hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
  },
  addClass(el, className) {
    if(jq.hasClass(el, className)) {
      return
    }
    let newClass = el.className.split(' ')
    newClass.push(className);
    el.className = newClass.join(' ')
  },
  removeClass(el,className){
    if (jq.hasClass(el,className)) {
      let newClass = ' ' + el.className.replace(/[\t\r\n]/g, '') + ' '
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
        newClass = newClass.replace(' ' + className + ' ', ' ')
      }
      el.className = newClass.replace(/^\s+|\s+$/g, '')
    }
  }
}
export default jq
