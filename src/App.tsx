import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import Profile from "./components/Profile/Profile";


type AppPropsType = {
    // store: StoreType
}

const App: React.FC<AppPropsType> = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route component={Navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile'
                           render={() => <Profile/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;