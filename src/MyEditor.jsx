import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

import axios from 'axios'

function MyEditor(props) {
    // editor 实例
    // const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
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
    // const toolbarConfig: Partial<IToolbarConfig> = { }  // TS 语法
    const toolbarConfig = { }                        // JS 语法

    // 编辑器配置
    // const editorConfig: Partial<IEditorConfig> = {    // TS 语法
    const editorConfig = {                         // JS 语法
        placeholder: '请输入内容...',
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
            }
        })
        .then(res =>res.data)
        .then((data) => {
            console.log(data)
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
                    onChange={editor => setHtml(editor.getHtml())}
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