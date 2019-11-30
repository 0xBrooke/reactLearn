import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'
export const getInputChangeAciton = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
});
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});
export const delAddItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index: index
})
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// redux-thunk
export const getListThunk = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/list').then(res => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action)
    })
  }
}

