import isPlainObject from 'lodash/isPlainObject'
class Stack{
  constructor(item){
    this.init(item)
  }
  init(item){
    this.undoList = [item || {
      value: null
    }]
    this.redoList = []
  }
  push(item) {
    const last = this.last()
    if (!isPlainObject(last) || !isPlainObject(item) || (last.value == item.value))
      return false
    this.undoList.push(item)
  }
  last(){
    return this.undoList[this.undoList.length - 1]
  }
  undo(){
    if (this.undoList.length > 1) {
      let item = this.undoList.pop()
      if (!isPlainObject(item) || !item.value)
        return false
      this.redoList.push(item)
    }
    return this.last()
  }
  redo(){
    let item = this.redoList.pop()
    if (!isPlainObject(item) || !item.value)
      return false
    this.undoList.push(item)
    return item
  }
}

export default Stack