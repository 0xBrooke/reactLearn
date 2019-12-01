import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionType'
export const getInputChangeAciton = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value:value
})

export const getAddItemAciton = () => ({
  type: ADD_TODO_ITEM,
})
export const getDelItemAciton = (index) => ({
  type: DEL_TODO_ITEM,
  index
})