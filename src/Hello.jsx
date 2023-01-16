import React from "react";

class Hello extends React.Component{
    render(){
        return (
            <div>hello world!{this.props.test.props1}
            hello world!{this.props.test.props2}
            {/* <input type="text" /> */}
            </div>
        )
    }
}

export default Hello