import { writable } from 'svelte/store'
import { ToolLeft,ToolRight } from '../utils/editor'

export const MdToolLeft = writable([])
export const MdToolRight = writable(ToolRight)

export const MdText = writable('')
export const MdHtml = writable('')
export const MdHeight = writable(500)
export const MdBox = writable(null)
export const MdFull = writable(false)
export const MdSplit = writable(true)
export const MdPreview = writable(false)
export const MdXssFilter = writable(false)
export const MdUndoList = writable([])
export const MdRedoList = writable([])
export const MdLockInput = writable(false)
export const MdTimer = writable(null)
