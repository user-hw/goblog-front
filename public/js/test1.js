import React from 'react';

import {Gallery} from "./Gallery"
// const Gallery = React.lazy(() => import('./Gallery'));

function APP(){

    return (
        <div> hello </div>
    )
}
ReactDOM.render(
    <Gallery />,
    document.getElementById("root"),
)