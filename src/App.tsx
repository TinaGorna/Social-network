import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import {StoreType} from "./outside/redux-store";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import MyPostsContainer from "./components/Profile/MyPosts/NewOne/MyPostsContainer";


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route component={Navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               store={props.store}
                           />}/>

                    <Route path='/profile'
                           render={() => <MyPostsContainer
                               store={props.store}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;