import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux'
import { getInputChangeAciton, getAddItemAciton, getDelItemAciton } from './store/actionCreator'
 
const todolList = (props) => {
  const { inputValue, changeInput, submitItme,list ,delTodoItem} = props;
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          style={{ width: '250px', marginRight: '10px' }}
          type="text"
          value={inputValue}
          onChange={changeInput}
          placeholder='请输入...'></Input>
        <Button type='primary' onClick={submitItme}>提交</Button>
      </div>
      <div >
        <List style={{ marginTop: '10px' }}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {delTodoItem(index) }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
// 由于组件中只有一个render函数，所以是无状态组件，且只负责页面的渲染
// class todolList extends Component {
//   render() {
//     const { inputValue, changeInput, submitItme } = this.props;
//     return (
//       <div style={{ margin: '10px' }}>
//         <div>
//           <Input
//             style={{ width: '250px', marginRight: '10px' }}
//             type="text"
//             value={inputValue}
//             onChange={changeInput}
//             placeholder='请输入...'></Input>
//           <Button type='primary' onClick={submitItme}>提交</Button>
//         </div>
//         <div >
//           <List style={{ marginTop: '10px' }}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item onClick={() => { this.props.delTodoItem(index) }}>
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// 获取state 中的数据 以props的形式映射到组件上；
const mapStateToProps = (state) => {
  // state就是store中的数据
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}
// 
const mapDispatchToProps = (dispatch) => {
  return {
    changeInput(e) {
      const action = getInputChangeAciton(e.target.value)
      dispatch(action)
    },
    submitItme() {
      const action = getAddItemAciton()
      dispatch(action)
    },
    delTodoItem(index) {
      const action = getDelItemAciton(index);
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(todolList);