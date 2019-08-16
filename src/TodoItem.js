import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this)
    }
    // 检查是否允许被更新
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("nextProps",nextProps.content)
        // console.log("Props",this.props.content)
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
       
    }
     // 当组件中的state或者props发生改变的时候或者父组件的render的重新执行的时候，render函数都会重新的执行
    render() {
        console.log("react")
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

// 检测父组件传过来的参数类型
TodoItem.propTypes = {
    content: PropTypes.string.isRequired, // isRequired父组件必须传改参数
    deleteItem: PropTypes.func,
    index:PropTypes.number,
}
// 父组件没有传过来值，则规定默认值
TodoItem.defaultProps = {
    content:"默认值"
}
export default TodoItem