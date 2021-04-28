import React from "react";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import "./App.css";
import Downloader from "./components/Common/Preloader/Downloader";
import {AppStateType} from "./outside/redux-store";
import {initializeThunkCreator} from "./outside/app-reducer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))


type MapStateToPropsPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapStateToPropsPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Downloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/login"
                           render={() => <Login/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/paviedamliennia"
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <DialogsContainer/>
                               </React.Suspense>
                           }}/>
                    <Route path="/users"
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <UsersContainer/>
                               </React.Suspense>
                           }}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp: initializeThunkCreator}),
    withRouter
)(App);