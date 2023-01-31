import React from 'react'
// import MD5 from 'MD5'

import md5 from 'js-md5';
React.Component.prototype.$md5 = md5;

var SALT = "henryk"; // 加盐
var TOKEN_KEY = "AUTH_TOKEN";
var USER_KEY = "USER_INFO";

export default class Login extends React.Component{
  //初始化状态
  state = {
    username: "",
    password:"",
    md5Passwd: ""
  }
  
  render(){
    return (
    <div >
      <form className="login" onSubmit={this.loginClick} method="post">
      <h1>登录</h1>
      <input onChange={this.handleUserName} class="login-name" placeholder="请输入用户名" type="text" />
      <input onChange={this.handlePassword} class="login-passwd" placeholder="请输入密码" type="password" />
      <span class="login-tip"></span>
      <button class="login-submint" onClick={this.loginClick.bind(this)}>登录</button>
      </form>
    </div>
  )}

  //保存用户名
  handleUserName = (e) => {
    this.setState({
        username: e.target.value
    })
    console.log(e.target.value);
  }
  //保存密码
  handlePassword = (e) => {
      this.setState({
          password: e.target.value
      })
  }


  loginClick = (e) => {
    //该方法阻止表单的提交
    e.preventDefault();
    const {username,password} = this;
    var MD5Passwd = md5(this.state.password + SALT);
    
    // alert('用户名：' + this.state.username + '，密码：' + this.state.password+ '，密码：' + MD5Passwd)


    let queryStringRequest = new Request('http://139.186.213.52:8082/login/', {
      method:  'POST',
      body: JSON.stringify({
        username: this.state.username,
        MD5Passwd: MD5Passwd,
     }),
     
    })
    fetch(queryStringRequest)
    .then(res =>res.json() )
    .then((data) => {
      if (data.code===200){
        localStorage.setItem(TOKEN_KEY, data.token);
        localStorage.setItem(USER_KEY, JSON.stringify(data.userInfo[0]));
        console.log("JSON.stringify(data.userInfo===",JSON.stringify(data.userInfo[0]))

        window.location.replace("/");
      }else{
        alert('账号或密码错误')
      }
       
    })

  }
}

// // 登录部分逻辑
// function loginLogic() {
//   if (localStorage.getItem(TOKEN_KEY)) {
//     $(".login-action").hide();
//     $(".login-end").show();
//     var userInfo = JSON.parse(localStorage.getItem(USER_KEY)) || {};
//     $(".login-username").text(userInfo.userName);
//   }
//   // 登录
//   $(".login-submint").click(function () {
//     var tipEle = $(".login-tip");
//     var name = $(".login-name").val();
//     var passwd = $(".login-passwd").val();
//     if (!name) return tipEle.show().text("请输入用户名");
//     if (!passwd) return tipEle.show().text("请输入密码");

//     // md5加密
//     var MD5Passwd = new Hashes.MD5().hex(passwd + SALT);
//     $.ajax({
//       url: "/api/v1/login",
//       data: JSON.stringify({ username: name, passwd: MD5Passwd }),
//       contentType: "application/json",
//       type: "POST",
//       success: function (res) {
//         if (res.code !== 200) {
//           alert(res.code)
//           return tipEle.show().text(res.error);
//           }
//           var data = res.data || {};
//           localStorage.setItem(TOKEN_KEY, data.token);
//           localStorage.setItem(USER_KEY, JSON.stringify(data.userInfo));
//           location.href = "/";
//       },
//       error: function (err) {
//         console.log("err", err);
//         tipEle.show().text("登录错误，请重试");
//       },
//     });
//   });
//   // 退出登录
//   $(".login-out").click(function () {
//     localStorage.removeItem(USER_KEY);
//     localStorage.removeItem(TOKEN_KEY);
//     $(".login-action").show();
//     $(".login-end").hide();
//     window.location.replace("/");
//     console.log("退出登录");
//   });
// }
