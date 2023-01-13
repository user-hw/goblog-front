import React from 'react'
import ReactDOM from 'react-dom';
import HeaderAdmin from '../Header-admin'
import Hello from '../Hello'
import PersonBox1 from '../Person-box1'
import PostList from '../Post-list'
import PostElment from '../PostElement'



export default class Index extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			post_list: []
		}
	}
  render(){
  return (
    <div>
      <div>
        <HeaderAdmin/>
      </div>
      <br />
      <div id='indexPageList' className='IndexPageList'>

      </div>
        
        {/* <PostList/> */}
    </div>
  )
  }
}

// let counter = 1;

// const quantity = 5;

// document.addEventListener("DOMContentLoaded",load)

// function load(){
//   console.log("调用了load")
//   const start = counter
//   const end = start+quantity-1;
//   counter = end+1 
//   for (let index = 0; index < counter; index++) {
//     add_post()
    
//   }
// }

// function add_post(){
//   console.log("调用了addpost")
//   const postElement = document.createElement('PostElment');
//   console.log(postElement)
//   // title.innerText='Hello React (method 1)';
//   // title.className='main';
//   // document.getElementById('Index').appendChild(postElement);
//   ReactDOM.render(postElement, document.getElementById('Index'));
// }