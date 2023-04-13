import React from 'react'
import ReactDOM from 'react-dom';
import HeaderAdmin from '../Header-admin'
import Hello from '../Hello'
import PersonBox1 from '../Person-box1'
import PostList from '../Post-list'
import PostElment from '../PostElement'
import MasonryImageList from '../MasonryImageList'

import request from 'superagent';
import debounce from 'lodash.debounce';

import { useHistory,useLocation } from 'react-router-dom';

import axios from 'axios'

// import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
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
      postNum:8,
		};



    window.onscroll = debounce(() => {
      const {
        load
      } = this;
      // this.isBottom()
      console.log(window.innerHeight)
      console.log(document.documentElement.scrollTop)
      console.log(document.documentElement.offsetHeight)
  
      if (window.innerHeight + document.documentElement.scrollTop >= (document.documentElement.offsetHeight-5) ) {
        this.state.pageNum +=1
        this.load();
        
        console.log("this.state.pageNum ===",this.state.pageNum)
      }else if (this.isBottom()===true ){
        console.log("已经到底了")
  
        // let loginEnd = document.querySelector('.isBottom');
        // loginEnd.style.display = 'block';	// 显示选择的元素
      }
    }, 100);
	}

  componentDidMount(){
    this.load()
  }

  isBottom(){
    if (this.state.pageNum<=40){
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
    // setTimeout(() => {
    //         console.log(this.state.post_list);
    //   }, 1000); 
}  
  render(){
  return (
    <div>
      <div>
        <HeaderAdmin/>
      </div>
      <br />

      <Box sx={{ width: "100%", height: '100%'}}>
        
      <ImageList variant="masonry" cols={3} gap={8}>
        {this.state.post_list.map((item) => (
          <ImageListItem key={item.blogPost.titleImg} href={"www.baidu.com"}>
            <a href={"/post/" +item.blogPost.ID}class="post-headline">
            <img
              src={`${item.blogPost.titleImg}`}
              srcSet={`${item.blogPost.titleImg}&dpr=2 2x`}
            //   src={`${item.img}?w=248&fit=crop&auto=format`}
            //   srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.blogPost.title}
              
              
              loading="lazy"
            />

          <ImageListItemBar
            title={item.blogPost.title}
            subtitle={'@'+item.NickName}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

      {/* <MasonryImageList items={this.state.post_list}/> */}

      <div id='MainPage' className='MainPage'>
      

      {/* {this.state.post_list.map((item, index) => {
						return (
                <PostElment data={item}/>
						)})} */}
      
      </div>
      {/* <p id='isBottom' style={{"display":"none"}}>啊哦，已经到底了</p> */}
    </div>
  )
  }
}