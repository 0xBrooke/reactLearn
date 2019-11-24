import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
class MyRedux extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    console.log(store.getState())
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input type="text" placeholder='dd' value={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }} />
          <Button type='primary'>提交</Button>
        </div>
        <div>
          <List style={{ marginTop: '10px' }}
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>


    )
  }
}


export default MyRedux