import React from 'react';
import { useParams } from "react-router-dom";
import '../css/detail.css';

import HeaderAdmin from '../Header-admin';

import Valine from 'valine';


export default class PostList extends React.Component {  
    
  constructor(props){
    super(props)
    this.state={
        post:{},
        userInfo:{},
        test:"",
    }
  }
  componentDidMount(){

    new Valine({
      el: "#vcomments",
      appId: "vKl3fsHW0PiDDfDjjYjc3i2E-gzGzoHsz",
      appKey: "rMtUyL3rwkTBwSpx8ffn5At1",
      serverURLs: "https://vkl3fshw.lc-cn-n1-shared.com",
      placeholder: "What are you talking about?"
    });
    const pid = window.location.href.split('/').slice(-1)
    const url = "http://139.186.213.52:8082/post/"+pid

    console.log(url)
    
    fetch(url,{
      method:'GET',
    })
     .then(res =>res.json())
     .then((data) => {
       console.log("data.data === ",data.data)  
       this.setState({
            post:data.data.post,
            userInfo:data.data.userInfo,
            test:"1"
       })
      })
      console.log("this.state.post === ",this.state.post)
      console.log("this.state.userInfo === ",this.state.userInfo)
      console.log("this.state.test === ",this.state.test)
     } 
  

  render(){
    return (
    <div>
      <HeaderAdmin />
      {/* style={"padding-top": "100px";} */}
        <main className="container" style={{paddingTop:'100px'}}>

        <script src="https://static.mszlu.com/goblog/es6/md-assets/js/valine.min.js"></script>

        <div className="detail">
          <div className="detail-left">
            <h1 className="detail-title">{this.state.post.title}</h1>
            <div className="detail-action">
              <span>
                <i className="iconfont icon-yonghu"></i>
                &nbsp; {this.state.userInfo.userName}
              </span>
              <span>
                <i className="iconfont icon-wenjianjia"></i>
                &nbsp;<a href="#">{this.state.post.categoryName}</a>
              </span>
              <span>
                <i className="iconfont icon-riqi"></i>
                &nbsp;{this.state.post.createAt}
              </span>
              <span>
                <i className="iconfont icon-yanjing"></i>
                &nbsp;{this.state.post.viewCount}
              </span>
              <span className="detail-edit">
                <i className="iconfont icon-wenbenshuru"></i>
                <a href={"/writing?id="+this.state.post.pid}>编辑</a>
              </span>
              <span className="detail-edit detail-delete" pid={this.state.post.pid}>
                <i className="iconfont icon-shanchu"></i>
                删除
              </span>
            </div>
            <div className="gap-solid"></div>

            <div id="view-content" className="detail-content" dangerouslySetInnerHTML = {{ __html: this.state.post.content }}></div>
            <div className="gap-solid vcomments-gap"></div>
            <div id="vcomments" className="vcomments"></div>
            <div className="vcomments-copyright">Comment Powered By Valine</div>

          </div>
          {/* <div className="detail-right">
            <div className="toc-card">
              <h1 className="toc-card-list">目录</h1>
              <div className="toc-box" id="toc-box"></div>
            </div>
          </div> */}
        </div>
        <div className="zoom-prev">
          <div className="zoom-container"></div>
        </div>

        </main>

    </div>
  )}
}