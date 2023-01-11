import React from 'react'
import HeaderAdmin from '../Header-admin'
import Hello from '../Hello'
import PersonBox1 from '../Person-box1'
import PostList from '../Post-list'
import PostEelment from '../PostElement'


export default function Index() {
  return (
    <div>
      <div>
        <HeaderAdmin/>
      </div>
      <br />
      <div >
        <PostEelment />
        <PostEelment />
        <PostEelment />
      </div>
        
        {/* <PostList/> */}
    </div>
  )
}
