import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import store from "./outside/redux-store";

//для смены URL относительно не домена, а папки для BrowserRouter basename = {process.env.PUBLIC_URL}

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider >
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();