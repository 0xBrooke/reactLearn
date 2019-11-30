import React from 'react';
import { Input, Button, List } from 'antd';
// 无状态组件
const MyReduxUI = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input type="text"
          placeholder='dd'
          value={props.inputValue}
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInput}
        />
        <Button type='primary' onClick={props.handleBtnClick}>提交</Button>
      </div>
      <div>
        <List style={{ marginTop: '10px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => { props.handleBtnDel(index) }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}
export default MyReduxUI