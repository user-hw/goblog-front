import React from 'react'
import HeaderAdmin from '../Header-admin'
import PersonBox1 from '../Person-box1'
import PostList from '../Post-list'

export default function Home() {
  return (
    <div>
      <div>
        
        <HeaderAdmin />
      </div>
      <div class="mainPage">
        <div class="container-left">

          <PersonBox1/>
        </div>

        <div class="container-right">
        <PostList/>
        {/* <!-- 文章列表 -->
        {{template "post-list" .}}
        <!-- pagination -->
        {{template "pagination" .}} */}
        </div>
      </div>
    </div>
  )
}
