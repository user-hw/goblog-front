import React from 'react'
import ReactDOM from 'react-dom'

// import '../css/writing.css';
import MyEditor from '../MyEditor';


export default class Test extends React.Component{
  handleGetDom = () => {

  }

  constructor(props){
    super(props)
    this.state={
      editor:"nihao",
      html:"bb"

    }
  }

  render() {
      return (
        <div>
          {/* <header class="header">
      <input class="header-input" placeholder="请输入标题..." type="text" />
      <div class="header-action">
        <button class="home-btn">首页</button>
        <button class="save-btn">保存</button>
        <button class="publish-btn">发布测试</button>
        <div class="publish">
          <button class="publish-show">发布</button>
          <div class="publish-drop">
            <span class="publish-close">×</span>
            <h1 class="category-label">分类：</h1>
            <ul class="category category-style">
            </ul>
            <h1 class="category-label">类型：</h1>
            <ul class="category-style type-box">
              <li class="active" value="0">普通文章</li>
              <li value="1">自定义页</li>
            </ul>
            <h1 class="category-label">自定义链接：</h1>
            <input class="slug-input" type="text" />
            <div class="publish-action">
              <span class="publish-tip"></span>
              <button class="cancel-btn">取消</button>
              <button class="publish-btn">发布</button>
              
            </div>
          </div>
        </div>
      </div>
    </header> */}
    {/* <div id="editormd"></div> */}
    {/* <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script> */}
    {/* <script src="/js/editormd.js"></script>  */}
    {/* <script src="https://static.mszlu.com/goblog/es6/md-assets/js/cos-js-sdk-v5.min.js"></script> */}
    <div style={{"margin":"50px 50px 0px 50px "}}>
      <MyEditor editor={this.state.editor} html = {this.state.html} />
    </div>
    <div>
      <span>----------------------------------</span>
      <br />
        发布测试栏
        {MyEditor.html}
    </div>
    </div>

    )
  }
}