import React from 'react'
import './css/index.css';
import axios from 'axios'
import PostElment from './PostElement';
// import Pagination from './Pagination';
import { Pagination } from '@feb-team/legao-react';
import '@feb-team/legao-react/dist/styles/css/legao.all.css';

/*
存在一个bug，页面数量显示不出来，很奇怪，没发现为什么
*/

export default class PostList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      post_list: [
      ],
      pageNum:1,
      postNum:5,
      pageCount:5,
    };
  }
  

  componentDidMount(){
    this.load()
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
        uid:1001,
      }
    })
    .then(res =>res.data)
    .then((data) => {
      console.log(data.data);
      this.setState({
        post_list: this.state.post_list.concat(data.data),
        pageCount: data.data[0].pageCount,
      })
    })
    .catch((error) => {
      console.log(error)
    })
    setTimeout(() => {
            console.log('data.data.pageCount === ',this.state.pageCount);
      }, 1000);           
  }

  changePage=(value)=>{
    console.log("修改页面111")
    this.setState({
      pageNum: value,
      post_list:[]
    })
    setTimeout(() => {
      this.load();
    }, 50); 
  }


  render(){
    return (
      <div>
        <ul className="post-box">
            {
              this.state.post_list.map(function (item, key) {
                  return (
                      <li key={key}>
                          <PostElment data={item}/>
                      </li>
                  );
              })
            }
        </ul>
        <Pagination style={{"text-align": "right"}} total={5} current={1} pageSize={1} onChange={this.changePage} />
        {/* <Pagination pageNum={this.state.pageNum} pageCount={this.state.pageCount} changePage={this.changePage}/> */}
      </div>
  )}
}





// let url = 'http://139.186.213.52:8082/page/userinfo/henryk'
// fetch(url, {
//   method: 'GET',
// }).then(response => response.json()).then(data => {
//   if (data === null) {
//     window.alert("根据此id查询不到用户")
//     console.log("查询失败")
//     return
//   }
//   // updateState(data)
//   console.log("调用了fetch")
//   function PersonBox() {
//     console.log("调用执行了这个函数"+"GetInfo")
//     console.log("data1",data)
//     // setState({
//     //   data:data,
//     // }
//     // )
//     // console.log(state)

//     // var data = data.data
//     // console.log("data2",data)
  
//     return (
//       <div class="personal-box">
//         <img class="personal-avatar" style={{"object-fit":"cover"}} src={data.data[0].avatar} alt={data.data[0].UserName} />
//         <p class="personal-name">{data.data[0].userName}</p>
//         <p class="personal-desc">{data.data[0].userDesc}</p>
//         <span class="gap-dashed"></span>
//         <ul class="personal-action">
//           <li>
//             <i class="iconfont icon-github"></i>
//             <a href={data.data[0].github} target="_blank"> github</a>
//           </li>
//           <li>
//             <i class="iconfont icon-bilibili-line"></i>
//             <a href={data.data[0].bilibili} target="_blank"> Bilibili</a>
//           </li>
//           <li>
//             <i class="iconfont icon-zhihu-circle"></i>
//             <a href={data.data[0].zhihu} target="_blank"> 知乎</a>
//           </li>
//         </ul>
//         <span class="gap-solid"></span>
  
  
//         {/* <div class="personal-cteg">
//           <h2>分类：</h2>
//           {data.Categorys.map((item, idx) => (
//             <div>
//               <i class="iconfont icon-fenlei-copy"></i>
//               <a href={"/c/" + item.Cid}>{item.Name}</a>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     )
//   };
 
//   ReactDOM.render(<PersonBox />, document.querySelector("#app"));
// })

// ReactDOM.render(<GetInfo />, document.querySelector("#app"));
// function GetInfo() {
//   console.log("调用执行了这个函数"+"GetInfo")

//   const [state, setState] = React.useState({
//     Avatar: "/resource/images/1.jpg",
//     UserName: "不会写代码的建筑师",
//     UserDesc: "写代码是医生的邀请",
//     Bilibili: "https://space.bilibili.com/66628849",
//     zhihu: "https://www.zhihu.com/people/xu-heng-wei-63",
//     Categorys: [
//       {
//         "Cid": "1",
//         "Name": "java"
//       },
//       {
//         "Cid": "2",
//         "Name": "golang"
//       },
//     ],
//   });
  
//   return (
//     <div class="personal-box">
//       <img class="personal-avatar" src={state.Avatar} alt={state.UserName} />
//       <h1 class="personal-name">{state.UserName}</h1>
//       <p class="personal-desc">{state.UserDesc}</p>
//       <span class="gap-dashed"></span>
//       <ul class="personal-action">
//         <li>
//           <i class="iconfont icon-bilibili-line"></i>
//           <a href={state.Bilibili} target="_blank"> Bilibili</a>
//         </li>
//         <li>
//           <i class="iconfont icon-zhihu-circle"></i>
//           <a href={state.zhihu} target="_blank"> 知乎</a>
//         </li>
//       </ul>
//       <span class="gap-solid"></span>


//       <div class="personal-cteg">
//         <h2>分类：</h2>
//         {state.Categorys.map((item, idx) => (
//           <div>
//             <i class="iconfont icon-fenlei-copy"></i>
//             <a href={"/c/" + item.Cid}>{item.Name}</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// };

// ReactDOM.render(<GetInfo />, document.querySelector("#app"));
