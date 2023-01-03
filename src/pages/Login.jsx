import React from 'react'

export default function Login() {
  return (
    <div class="login">
    
    <h1>登录</h1>
    <input class="login-name" placeholder="请输入用户名" type="text" />
    <input class="login-passwd" placeholder="请输入密码" type="password" />
    <span class="login-tip"></span>
    <button class="login-submint">登录</button>
  </div>
  )
}
