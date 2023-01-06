import React from 'react'

export default class Login extends React.Component{
  loginClick(params) {
    console.log("调用了登录点击")
  }
  
  render(){
    return (
    <div class="login">
      <h1>登录</h1>
      <input class="login-name" placeholder="请输入用户名" type="text" />
      <input class="login-passwd" placeholder="请输入密码" type="password" />
      <span class="login-tip"></span>
      <button class="login-submint" onClick={this.loginClick.bind(this)}>登录</button>
    </div>
  )}
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
