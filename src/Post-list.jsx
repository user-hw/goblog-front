import React from 'react'
import './css/index.css';


export default class PostList extends React.Component{
  constructor(props){
    super(props)
    this.state={
        post:[],
        // pid: 0,
        // title: "0",
        // slug: "0",
        // content: "",
        // markdown: "",
        // categoryId:0,
        // userId:0,
        // viewCount:0,
        // type:0,
        // createAt:"",
        // updateAt:"",
    }
  }
  

  componentDidMount(){
    fetch('http://139.186.213.52:8082/post/',{
      method:'GET',
    })
     .then(res =>res.json())
     .then((data) => {
       console.log(data.data)  
       this.setState({
            post:data.data
       })
      // ,function(){
      //    console.log(this.state.test)
      //    let com = this.state.test.retBody.map((item,index)=>{
      //      console.log(item.id)
      //      return <li key={index}>{item.name}</li>
      //    })
      //    this.setState({
      //      arr : com
      //    },function(){
      //      console.log(this.state.arr)
      //    })
      //  })
     }) 
  }


  render(){
    return (
      <div>
        <ul class="post-box">
            {
                this.state.post.map(function (value, key) {
                    return (
                        <li key={key}>
                            <a href="#">
                                <h2>{value.title}</h2>
                            </a>
                            <p>{value.content}</p>
                            {value.pid}
                        
                        </li>
                    );
                })
            }
        </ul>
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
