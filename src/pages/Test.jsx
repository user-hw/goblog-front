import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../Hello';

export default class Test extends React.Component{
  handleGetDom = () => {
    let title = document.querySelector('#title');
    ReactDOM.findDOMNode(title).style.background = 'green'
  }

  constructor(props){
    super(props)
    this.state={
        props1:1,
        props2:2,
        props3:3,
    }
  }

  render() {
      return (
          <>
              <h1 id="title">测试节点</h1>
              <button onClick={this.handleGetDom}>点击操作Dom</button>
              <Hello test = {this.state}/>
          </>
      )
  }
}


// export default class Test extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           testArr: ["a",'b','b']
//       };
//   }

//   componentDidMount(){
//     let a=this.state.testArr
//     for (let index = 0; index < 5; index++) {
//       a = [...a,'a']
//     // this.state.testArr = ['c','d']
//     console.log('------------')
//     }  

//     this.setState({
//       testArr:a
//     })
//     setTimeout(() => {
//       console.log(this.state.testArr);
//     }, 1000); 
//     console.log(this.state.testArr)
//   }
//   render(){
//     // let {elem} =this.state.testArr
//       return (
//         <div>
//         {/* <h1>{elem}</h1> */}
//           <React.Fragment>
//               <p>{this.state.testArr}</p>
//           </React.Fragment>
//           </div>
//       )
//   }
// }
