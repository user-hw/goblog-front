import React from 'react'
import HeaderAdmin from '../Header-admin'
import PersonBox1 from '../Person-box1'
import PostList from '../Post-list'
import Index from './Index'

export default function Home() {
  return (
    <div>
      <div>
        
        <HeaderAdmin />
      </div>
      <div  className='MainPage HomePage'>
        <div class="container-left">

          <PersonBox1/>
        </div>

        <div class="container-right">
        <PostList/>

          
        </div>
      </div>
    </div>
  )
}
