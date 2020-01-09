import shortcut from 'shortcut-key'

import isElement from 'lodash/isElement'

import jq from './dom'

class Keyboard{
  isTarget(event,oBox){
    const element = jq.$('.md-text',oBox)
    return event.target == element
  }
  bind(key,fn,isDefault,el){
    shortcut.filter = _ => true
    shortcut(key,(event,handler) => {
      const target = isElement(el) ? this.isTarget(event,el) : document
      if(!target)
        return false
      if(isDefault)
        event.preventDefault(),event.cancelBubble = true
      typeof fn === 'function' && fn(event,handler)
    })
  }
  unbind(key){
    shortcut.unbind(key)
  }
  isPressed(key){
    return shortcut.isPressed(key)
  }
}

export default new Keyboard()
