import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import './App.css';
import Downloader from "./components/common/Downloader";
import {AppStateType} from "./outside/redux-store";
import {initializeThunkCreator} from "./outside/app-reducer";



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
        if(!this.props.initialized) {
            return <Downloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/login'
                           render={() => <Login />} />
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />} />
                    <Route path='/paviedamliennia'
                           render={() => <DialogsContainer />} />
                    <Route path='/users'
                           render={() => <UsersContainer />} />
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
    connect(mapStateToProps, { initializeApp: initializeThunkCreator }),
    withRouter
)(App);