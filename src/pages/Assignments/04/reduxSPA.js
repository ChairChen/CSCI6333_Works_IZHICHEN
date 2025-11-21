import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Assignment04Layout from "./Pages/reduxSPALayout";
import ReduxShoppingCart from "./Pages/ReduxShoppingCart";
import ReduxTodoList from "./Pages/ReduxTodoList";

export default function reduxSPA({ basePath }) {
    return (
        <section style={{height: "100%", width: "100%"}}>
            <Header basePath={basePath}/>
            <Routes>
                <Route path="/" element={<Assignment04Layout />}>
                    <Route index element={<p>Click the Link to See the Redux Demo Above</p>}></Route>
                    <Route path="ReduxShoppingCart" element={<ReduxShoppingCart />}></Route>
                    <Route path="ReduxTodoList" element={<ReduxTodoList />}></Route>
                </Route>
            </Routes>
        </section>
    );
}

