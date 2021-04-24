import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import styles from '../Common/FormsControls/FormControl.module.css'
import {Input} from "../Common/FormsControls/FormControl";
import {required} from "../../utils/validators/validatos";
import {AppStateType} from "../../outside/redux-store";
import {loginThunkCreator} from "../../outside/auth-reducer";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type MapStatePropsType = {
    isAuth: boolean
}


type MapDispatchToPropsType = {
    login: (login: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchToPropsType


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    component={Input}
                    validate={[required]}
                    name={'login'} />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    component={Input}
                    validate={[required]}
                    name={'password'}
                    type={'password'} />
            </div>
            <div>
                <Field
                    component={Input}
                    type={'checkbox'}
                    validate={[required]}
                    name={'rememberMe'} />
                <span>Remember me</span>
            </div>
            { error && <div className={styles.formSummaryError}>{error}</div> }
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div style={{ color: 'white' }}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login: loginThunkCreator })(Login);