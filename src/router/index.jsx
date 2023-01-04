import Home from "../pages/Home";
import Detail from "../pages/Detail";
import List from "../pages/List";
import Login from "../pages/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Index from "../pages/Index";
import Test from "../pages/Test";

const  BaseRouter = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/test/:name" element={<Test />}></Route>
        </Routes>
        </BrowserRouter >

    )
}

export default BaseRouter