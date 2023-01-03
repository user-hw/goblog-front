import React from "react";
export default class Clock extends React.Component{
    //构造函数
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }
    //装载完成时，在render之后调用
    //在render之后并不会立即调用，在所有组件完成之后调用
    componentDidMount(){
        this.timeID = setInterval(
            ()=>this.tick(),
            1000
        )
    }
    //将在装载时，在render之前调用
    componentWillUnmount(){
        clearInterval(this.timeID)
    }
    
    tick(){
        this.setState({
            date : new Date()
        })
    }
    render(){
        return(
            <div>
                <h1>hello</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

// ReactDOM.render(
//     <Clock />,
//     document.getElementById("root"),
// )
