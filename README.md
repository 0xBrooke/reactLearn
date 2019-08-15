<!--自己定义内容 -->
react 的开发调试工具


<!-- react生命周期 -->
    // 组件被挂载到页面之前执行
    componentWillMount() {
        console.log("componentWillMount")
    }
    render(){
        console.log("render")
    }
    // 组件被挂载到页面之后执行
    componentDidMount() {
        console.log("componentDidMount")
    }
    // 组件在更新之前
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true  //检查组件是否被更新
    }
    // 组件被更新之前 在shouldComponentUpdate之后执行 但取决于shouldComponentUpdate返回值，返回true才执行
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }
    // 组件更新完成之后执行
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }




