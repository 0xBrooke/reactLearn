import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'
// 配置redux-devtools 和 redux-thunk的 固定的写法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
); 
const store = createStore(reducer,enhancer);

export default store;
