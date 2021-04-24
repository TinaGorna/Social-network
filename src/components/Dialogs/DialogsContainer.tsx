import { connect } from 'react-redux';
import { compose } from 'redux';


import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import {ActionsType, AppStateType} from "../../outside/redux-store";
import {SendMessageActionCreator} from "../../outside/dialogs-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(SendMessageActionCreator(newMessageBody))
        }
    }
}

// const AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)