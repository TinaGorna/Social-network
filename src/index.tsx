import state, {addPost, RouteStateType, subscribe} from "./redux/state";


import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export let renderEntireTree = (state: RouteStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost = {addPost} />,
        </BrowserRouter>, document.getElementById("root"));
}
renderEntireTree(state);
subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

