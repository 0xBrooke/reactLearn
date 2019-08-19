import React, { Fragment } from 'react';
// 动画组件
import { CSSTransition } from 'react-transition-group';
import './style.css'
// 自带的
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           welcome to 
//         </p>

//       </header>
//     </div>
//   );
// }

//my render()中的内容部分也是jsx的语法 所以要首先引入react
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleTaggole = this.handleTaggole.bind(this)
  }
  render() {
    return (
      <Fragment>
        <CSSTransition in={this.state.show} timeout={1000}>
          <div>我发顺丰似睡非睡</div>
        </CSSTransition>

        <button onClick={this.handleTaggole}>taggole</button>
      </Fragment>

    )
  }

  handleTaggole() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}
export default App;
