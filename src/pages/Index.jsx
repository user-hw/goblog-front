import React from 'react'
import ReactDOM from 'react-dom';
import HeaderAdmin from '../Header-admin'
import Hello from '../Hello'
import PersonBox1 from '../Person-box1'
import PostList from '../Post-list'
import PostElment from '../PostElement'

import request from 'superagent';
import debounce from 'lodash.debounce';



export default class Index extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      counter : 1,
      quantity : 5,
			post_list: [
      ],
		};

    window.onscroll = debounce(() => {
      const {
        load
      } = this;
  
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        this.load();
      }
    }, 100);
	}

  componentDidMount(){
    this.load()
  }

  load(){
    console.log("调用了load")
    let a =this.state.post_list
    for (let index = 0; index < 5; index++) {
      a.push({post:1})
    }
    console.log(a)

    this.setState({
      post_list: a,
    })
    // console.log("this.state.post_list ==== ",this.state)
    
    // const postElement = document.createElement('PostElment');
    // console.log(postElement)
    // title.innerText='Hello React (method 1)';
    // title.className='main';
    // document.getElementById('Index').appendChild(postElement);
    // ReactDOM.render(postElement, document.getElementById('Index'));
  }
  


 
  render(){
  return (
    <div>
      <div>
        <HeaderAdmin/>
      </div>
      <br />
      <div id='indexPageList' className='IndexPageList'>

      {/* <React.Fragment>
              <p>{this.state.post_list}</p>
          </React.Fragment> */}
      {this.state.post_list.map((item, index) => {
						return (
                <PostElment />
						)})}

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