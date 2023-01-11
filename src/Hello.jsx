import React from "react";

class Hello extends React.Component{
    render(){
        return (
            <div>hello world!{this.props.test}
            {/* <input type="text" /> */}
            </div>
        )
    }
}

export default Hello