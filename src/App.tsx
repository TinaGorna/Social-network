import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route component={Navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               messages={state.dialogsPage.messages}
                               addMessage = {props.store.addMessage.bind(props.store)}
                               messageForNewDialog = {state.dialogsPage.messageForNewDialog}
                               updateNewMessageText= {props.store.updateNewMessageText.bind(props.store)}
                               />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               posts = {state.profilePage.posts}
                               addPost={props.store.addPost.bind(props.store)}
                               messageForNewPost={state.profilePage.messageForNewPost}
                               updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;