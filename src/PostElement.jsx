import React from "react";
import "./css/postElement/postElement_style.css"
import "./css/postElement/myStyle.css"

class PostElment extends React.Component {
    state = {  } 
    render() { 
        return (
            
            <div class="single-blog-area blog-style-2 mb-15 wow fadeInUp " data-wow-delay="0.2s" data-wow-duration="1000ms">
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
                            <h4><a href="#" class="post-headline">Party people in the house</a></h4>
                            <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                            <div class="post-meta">
                                <p>By <a href="#">james smith</a></p>
                                <p>3 comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PostElment;