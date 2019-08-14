import React, { Component } from 'react'

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this)
    }
    render() {
        const { content } = this.props;
        return (
            // 接受父组件传递的数据
            <div onClick={this.handleDel}>{content}</div>
        )
    }
    // 子组件调用父组件
    handleDel() {
        const { deleteItem, index } = this.props;
        deleteItem(index)

    }
}

export default TodoItem