import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../Hello';

export default class Test extends React.Component{
  handleGetDom = () => {
    let title = document.querySelector('#title');
    ReactDOM.findDOMNode(title).style.background = 'green'
  }

  render() {
      return (
          <>
              <h1 id="title">测试节点</h1>
              <button onClick={this.handleGetDom}>点击操作Dom</button>
              <Hello test={"nihao"}/>
          </>
      )
  }
}
