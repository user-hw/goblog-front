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

/*遗留问题
滑动到底后显示已经到底的标识

*/


export default class Index extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			post_list: [
      ],
      pageNum:1,
      postNum:5,
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
      }else if (this.isBottom()===true ){
        console.log("已经到底了")
  
        let loginEnd = document.querySelector('.isBottom');
        loginEnd.style.display = 'block';	// 显示选择的元素
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
}  
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
      
      </div>
      <p id='isBottom' style={{"display":"none"}}>啊哦，已经到底了</p>
    </div>
  )
  }
}