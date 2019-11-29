import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM } from './actionTypes'
export const getInputChangeAciton = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
});
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});
export const delAddItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index:index
})