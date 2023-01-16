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





export default class Index extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      counter : 1,
      quantity : 5,
			post_list: [
      ],
      page:1,
		};



    window.onscroll = debounce(() => {
      const {
        load
      } = this;
  
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        this.load();
        this.state.page +=1
        console.log(this.state.page)
      }
    }, 100);
	}

  componentDidMount(){
    this.load()

    // const history = useHistory();
    // const item = {id:1,name:"zora"}
    // 路由跳转
    // history.push(`/user/role/detail`, { id: item });
    // 参数获取
    // const {state} = useLocation()
    // console.log(state)  // {id:1,name:"zora"}
  }

  load(){
    console.log("调用了load")
    let a =this.state.post_list
    const url = "http://139.186.213.52:8082/post?pageNum=3&postNum=5"
    fetch(url,{
      method:'GET',
    })
    .then(res =>res.json())
    .then((data) => {
      console.log("data.data === ",data.data)  
    //  this.setState({
    //       post:data.data.post,
    //       userInfo:data.data.userInfo,
    //       test:"1"
    //  })
    })
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