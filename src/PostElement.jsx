import React from "react";
// import "./css/postElement/postElement_style.css"
// import "./css/postElement/myStyle.css"



class PostElment extends React.Component {
    constructor(props) {
		super(props);
		this.state = {

		};
    }

    render() { 
        return (
            
            <div class="single-blog-area blog-style-2 mb-15 wow fadeInUp " data-wow-delay="0.2s" data-wow-duration="1000ms">
                {/* <h1>{this.props.data.blogPost.pid}</h1> */}
                <div class="row align-items-center postElement">
                    <div class="col-12 col-md-6">
                        <div class="single-blog-thumbnail">
                            <img src={require('./img/3.jpg')} alt="" />
                            <div class="post-date">
                                <a href="#">12 <span>march</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        {/* <!-- Blog Content --> */}
                        <div class="single-blog-content">
                            <div class="line"></div>
                            <a href="#" class="post-tag">Lifestyle</a>
                            <h4><a href={"/post/" +this.props.data.blogPost.pid}class="post-headline">{this.props.data.blogPost.title}</a></h4>
                            {/* <p>{this.props.data.blogPost.content}</p> */}
                            <p dangerouslySetInnerHTML = {{ __html: this.props.data.blogPost.content}} />
                            <div class="post-meta">
                                <p id="d1">By <a href={"/home/"+this.props.data.userName}>{this.props.data.NickName}</a></p>
                                <p id="d2">3 comments</p>
                                <p id="d3">50 views</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PostElment;