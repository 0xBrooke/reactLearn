import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import { getInputChangeAciton,getAddItemAction,delAddItemAction } from './store/actionCreators'
class MyRedux extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInput = this.changeInput.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input type="text"
            placeholder='dd'
            value={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInput}
          />
          <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
        </div>
        <div>
          <List style={{ marginTop: '10px' }}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleBtnDel.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
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