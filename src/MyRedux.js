import React, { Component } from 'react';
import 'antd/dist/antd.css';
import MyReduxUI from './MyReduxUI'
import store from './store'
import {
  getInputChangeAciton,
  getAddItemAction,
  delAddItemAction,
  getListThunk,
} from './store/actionCreators'

class MyRedux extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInput = this.changeInput.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleBtnDel = this.handleBtnDel.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <MyReduxUI
        inputValue={this.state.inputValue}
        changeInput={this.changeInput}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleBtnDel = {this.handleBtnDel}
      ></MyReduxUI>
    )
  }
  // 生命周期
  componentDidMount() {
    const action = getListThunk();
    store.dispatch(action)
  }
  changeInput(e) {
    const action = getInputChangeAciton(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleBtnDel(index) {
    const action = delAddItemAction(index)
    store.dispatch(action)
  }
}


export default MyRedux