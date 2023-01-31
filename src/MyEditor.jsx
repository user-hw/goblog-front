import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

import axios from 'axios'

function MyEditor(props) {
    // editor 实例
    const [editor, setEditor] = useState(null)                   // JS 语法

    // 编辑器内容
    const [html, setHtml] = useState('')
    

    const [title, setTitle] = useState('')

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setTimeout(() => {
            setHtml('')
        }, 1500)
    }, [])

    // 工具栏配置
    const toolbarConfig = { }                        // JS 语法

    // 编辑器配置
    const editorConfig = {                         // JS 语法
        placeholder: '请输入内容...',
        MENU_CONF: {}
    }



    //   // 异步获取临时密钥
    //   $.ajax({
    //     url: "/api/v1/qiniu/token",
    //     type: "GET",
    //     contentType: "application/json",
    //     success: function (res) {
    //       if (res.code !== 200) {
    
    //         return alert(res.error);
    //       }
    //       const token = res.data;
    //       console.log(token)
    //       const observable = qiniu.upload(file, Date.now() + "_" + file.name, token, putExtra, config)
    //       const observer = {
    //         next(res){
    //           // ...
    //         },
    //         error(err){
    //           console.log('出现错误')
    //           console.log(err)
    //         },
    //         complete(res){
    //           console.log(res)
    //           cb("rmyppzaaw.hd-bkt.clouddn.com/" + res.key)
    //         }
    //       }
    //       const subscription = observable.subscribe(observer) // 上传开始
    
    //     },
    //     beforeSend: setAjaxToken,
    //   });



    editorConfig.MENU_CONF['uploadImage'] = {
        server: 'http://139.186.213.52:8082/api/upload/img',
        
        
        // 自定义上传
        async customUpload(file, insertFn) {                   // JS 语法
            const qiniu = require('qiniu-js')
            const config = {
                useCdnDomain: true,
                region: qiniu.region.z0,
            };
            const putExtra = {
            };
            const token= "BzTAVlqDQe3Cyq9Tu9sGYcp1e7K0Y8dx2vGY3faP:1l6oHM4uGRo-aBXOduDBqigzl3o=:eyJzY29wZSI6ImltZy1zdG9yZS1uZXciLCJkZWFkbGluZSI6MTY3NTE4MTEwNH0="

            const observable = qiniu.upload(file, Date.now() + "_" + file.name, token, putExtra, config)
            const observer = {
                next(res){
                  // ...
                },
                error(err){
                  console.log('出现错误')
                  console.log(err)
                },
                complete(res){
                  console.log(res)
                //   cb("rmyppzaaw.hd-bkt.clouddn.com/" + res.key)
                const url ="http://rpcq12gz9.hd-bkt.clouddn.com/"+res.key
                // const url="http://rpcq12gz9.hd-bkt.clouddn.com/1675174426308_1.jfif?token=BzTAVlqDQe3Cyq9Tu9sGYcp1e7K0Y8dx2vGY3faP:E3fuoLoa-9Fb_89cqnUJawX3BaU="
                insertFn(url, "", "")
                }
              }
            const subscription = observable.subscribe(observer) // 上传开始
            console.log('subscription ===',observable)
            
            
            // file 即选中的文件
            // 自己实现上传，并得到图片 url alt href
            // 最后插入图片
            
        }
        
        
        // // 自定义插入图片
        // customInsert(res, insertFn) {                  // JS 语法
        //     // res 即服务端的返回结果
        //     console.log("res === ",res)

    
        //     // 从 res 中找到 url alt href ，然后插入图片
        //     // insertFn(url, alt, href)
        // },
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    const handleTitle=(e)=>{
        setTimeout(() => {
            setTitle(e.target.value)
        }, 1500)
        // console.log(title)
    }
        
    const post=()=>{

        if (title===""){
            alert("标题不能为空")
            return
        }
        if (html===""){
            alert("内容不能为空")
            return
        }

        const url = "http://139.186.213.52:8082/writing"
        axios({
            method: 'post',
            url: url,
            params:{
                pid:-1,
                title:title,
                content:html,
                uid:1001,
                text:editor.getText(),
            }
        })
        .then(res =>res.data)
        .then((data) => {
            console.log(data)
            if(data.code===200){
                alert('发布成功')
                window.location.replace("/")
            }else{
                alert('发布失败')
            }
        })
    }  

    return (
        <>

        <input class="header-input" placeholder="请输入标题..." onBlur={handleTitle} type="text" />
            <div style={{ border: '1px solid #ccc', zIndex: 100}} >
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml()) }
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            {/* <div style={{ marginTop: '15px' }}>
                {html}
            </div> */}

            <div>
            <button class="publish-btn" onClick={post}>发布</button>
            </div>
        </>
    )
}



export default MyEditor