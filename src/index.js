import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TodoList from './TodoList';
// 使用缓存 防止断网后，无法打开浏览的网页
import * as serviceWorker from './serviceWorker';
// jsx语法 可使用自己定义的组件
// 注意：组件的开头必须大写字母
ReactDOM.render(<TodoList/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();












// 这是整个项目的入口文件