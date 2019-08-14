import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'
class TodoList extends Component {
    // 是最优先于其他函数执行的函数
    constructor(props) {
        super(props);
        // 组件的状态 存储组件中的数据
        this.state = {
            inputValue: '',
            list: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleBtndel = this.handleBtndel.bind(this)
    }

    render() {
        return (
            <Fragment>
                {/* Fragment  占位符 */}
                <div>
                    <label htmlFor="inputArea">输入的内容</label>
                    <input type="text"
                        className='input'
                        id='inputArea'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button type='button' onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    // 为了代码的优化
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleBtndel}
                >
                </TodoItem>
            )
        })
    }
    handleInputChange(e) {
        // console.log(this)
        // 更改state的数据的方法 setState
        // this.setState({
        //     inputValue: e.target.value
        // })
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    };
    // 新增
    handleBtnClick(e) {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, this.state.inputValue],
            inputValue: ''
        }))
    }
    // 删除
    handleBtndel(index) {
        // 当我们想要操作state中的数据的时候，不要直接操作，要拷贝一份，在做操作，后期优化有用
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        })
    }

};
export default TodoList