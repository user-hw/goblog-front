import React from 'react'
import ReactDOM from 'react-dom';
import HeaderAdmin from '../Header-admin'
import Hello from '../Hello'
import PersonBox1 from '../Person-box1'
import PostList from '../Post-list'
import PostElment from '../PostElement'

import request from 'superagent';
import debounce from 'lodash.debounce';

import { useHistory,useLocation } from 'react-router-dom';

import axios from 'axios'


export default class Index extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			post_list: [
      ],
      pageNum:1,
      postNum:5,
      // pageAllNum:2,
      // isBottom:false,
		};



    window.onscroll = debounce(() => {
      const {
        load
      } = this;
      // this.isBottom()
  
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && this.isBottom()===false ) {
        this.state.pageNum +=1
        this.load();
        
        console.log("this.state.pageNum ===",this.state.pageNum)
      }
    }, 100);
	}

  componentDidMount(){
    this.load()
  }

  isBottom(){
    if (this.state.pageNum<=4){
      return false
    }else{
      return true
    }
  }
  

  load(){
    console.log("调用了load")
    // let a =this.state.post_list
    const url = "http://139.186.213.52:8082/post"
    axios({
      method: 'get',
      url: url,
      params:{
        pageNum:this.state.pageNum,
        postNum:this.state.postNum,
      }
    })
    .then(res =>res.data)
    .then((data) => {
      console.log(data.data);
      this.setState({
        post_list: this.state.post_list.concat(data.data),
      })
    })
    .catch((error) => {
      console.log(error)
    })
    setTimeout(() => {
            console.log(this.state.post_list);
      }, 1000); 


    // fetch(url,{
    //   method:'GET',
    // })
    // .then(res =>res.json())
    // .then((data) => {
    //   // console.log("data.data === ",data.data)  
    // //  this.setState({
    // //       post:data.data.post,
    // //       userInfo:data.data.userInfo,
    // //       test:"1"
    // //  })
    // })
} 
    // for (let index = 0; index < 5; index++) {
    //   a.push({post:1})
    // }
    // console.log(a)

    // this.setState({
    //   post_list: a,
    // })
    // console.log("this.state.post_list ==== ",this.state)
    
    // const postElement = document.createElement('PostElment');
    // console.log(postElement)
    // title.innerText='Hello React (method 1)';
    // title.className='main';
    // document.getElementById('Index').appendChild(postElement);
    // ReactDOM.render(postElement, document.getElementById('Index'));
  // }
  


 
  render(){
  return (
    <div>
      <div>
        <HeaderAdmin/>
      </div>
      <br />
      <div id='MainPage' className='MainPage'>

      {this.state.post_list.map((item, index) => {
						return (
                <PostElment data={item}/>
						)})}
      {/* <h1>啊哦，已经到底了</h1> */}

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