import React from "react";
import { Button } from '@feb-team/legao-react';
import '@feb-team/legao-react/dist/styles/css/legao.all.css';

class Pagination extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        };
      }


    render() { 
        let aaa = this.props
        var pagination_num = this.props.pageCount.map(function (item, key) {
            return (
                <li class="page-item" >
                    <a class="page-link" href="" onClick={() =>aaa.changePage(item)} >{item}</a>
                </li>
            );
        })
        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        {pagination_num}
                        
                        {/* <li><a href="">{this.props.pageNum}</a></li> */}
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                    <div>
    <Button type="info">Button</Button>
  </div>
            </div>
        );
    }
}
 
export default Pagination;