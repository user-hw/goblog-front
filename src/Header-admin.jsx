import React from "react";
import ReactDOM from 'react-dom'
import imgURL from './img/3.jpg';

class HeaderAdmin extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
        userName:"",
        // avatar:  require.context("img/3.jpg" true);

    }
  }
  
  componentDidMount(){
    console.log("执行了函数logincheck")
    if (localStorage.getItem(TOKEN_KEY)) {

      let loginAction = document.querySelector('#loginAction');
      loginAction.style.display = 'none';	// 隐藏选择的元素

      let loginEnd = document.querySelector('.login-end');
      loginEnd.style.display = 'block';	// 显示选择的元素

      
      var userInfo = JSON.parse(localStorage.getItem(USER_KEY))
      this.setState({
        userName:userInfo.userName,
      })

    }else{
      let loginAction = document.querySelector('#loginAction');
      loginAction.style.display = 'block';	// 隐藏选择的元素

      let loginEnd = document.querySelector('.login-end');
      loginEnd.style.display = 'none';	// 隐藏选择的元素
      // console.log("没有找到token")
      // window.location.replace("/login");
      // console.log("退出登录");
    }
  }
  
  
  
  
  render(){

  return(   

    <div> 
    <header id="header" class="header d-flex align-items-center">       
      <div class="d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span class="d-none d-lg-block">CodeIsYourLife</span>
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div>
      <div class="search-bar">
        <form class="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
          <button type="submit" title="Search"><i class="bi bi-search"></i></button>
        </form>
      </div>

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">

          <li class="nav-item d-block d-lg-none">
            <a class="nav-link nav-icon search-bar-toggle " href="#">
              <i class="bi bi-search"></i>
            </a>
          </li>

          <li class="nav-item dropdown">

            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge bg-primary badge-number">4</span>
            </a>

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
              <li class="dropdown-header">
                You have 4 new notifications
                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-x-circle text-danger"></i>
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-check-circle text-success"></i>
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-info-circle text-primary"></i>
                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>

            </ul>

          </li>

          <li class="nav-item dropdown">

            <a class="nav-link nav-icon" href="" data-bs-toggle="dropdown">
              <i class="bi bi-chat-left-text"></i>
              <span class="badge bg-success badge-number">3</span>
            </a>

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
              <li class="dropdown-header">
                You have 3 new messages
                <a href=""><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle" />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle" />
                  <div>
                    <h4>Anna Nelson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>6 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle" />
                  <div>
                    <h4>David Muldon</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>8 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="dropdown-footer">
                <a href="#">Show all messages</a>
              </li>

            </ul>

          </li>


          <a className="login-action" id="loginAction" href="/login">
              <button class="login-btn" id="login-btn">登录</button>
          </a>
 
          <li class="nav-item login-end  dropdown pe-3" >
            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src={require('./img/3.jpg')} alt="Profile" className="rounded-circle" />
              <span class="d-none d-md-block dropdown-toggle ps-2">{this.state.userName}</span>
            </a>

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li class="dropdown-header">
                <h6>{this.state.userName}</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i class="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i class="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                  <i class="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="#" onClick={LoginOut}>
                  <i class="bi bi-box-arrow-right"></i>
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  
      </div> 
    );
        }
}
export default HeaderAdmin

function LoginOut(){
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
  // $(".login-action").show();
  // $(".login-end").hide();
  window.location.replace("/");
  console.log("退出登录");
}

var TOKEN_KEY = "AUTH_TOKEN";
var USER_KEY = "USER_INFO";

// LoginCheck()


// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.async = true;
// script.src = '/resource/vendor/main.js';
// document.querySelector("#header-admin").appendChild(script);   
 
// var script2 = document.createElement('script');
// script2.type = 'text/javascript';
// script2.async = true;
// script2.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
// document.querySelector("#header-admin").appendChild(script2);   

// var script3 = document.createElement('script');
// script3.type = 'text/javascript';
// script3.async = true;
// script3.src = '/resource/js/index.js';
// document.querySelector("#header-admin").appendChild(script3);  

// ReactDOM.render(<HeaderAdmin />, document.querySelector("#header-admin"));
