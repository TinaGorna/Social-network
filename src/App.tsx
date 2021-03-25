import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import state, {
    addMessage,
    addPost,
    updateNewMessageText,
    updateNewPostText
} from "./redux/state";

type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route component={Navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               messages={state.dialogsPage.messages}
                               addMessage = {addMessage}
                               messageForNewDialog = {state.dialogsPage.messageForNewDialog}
                               updateNewMessageText= {updateNewMessageText}
                               />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               posts = {state.profilePage.posts}
                               addPost={addPost}
                               messageForNewPost={state.profilePage.messageForNewPost}
                               updateNewPostText={updateNewPostText}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;