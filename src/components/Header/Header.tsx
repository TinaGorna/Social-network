import React from 'react';
import { NavLink } from 'react-router-dom';


import styles from './Header.module.css';

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return <header className={styles.header}>
        <div className={styles.logo} >
            <img src='https://i.pinimg.com/564x/e8/42/55/e842551f1287148f65da67e35daf2a39.jpg' alt='logo' />
            <div className={styles.main}>IN TOUCH</div>
        </div>
        <div className={styles.loginBlock} >
            {props.isAuth
                ? <div>{props.login} <button  className={styles.buttonLog} onClick={props.logout}>LOG OUT</button></div>
                : <NavLink to={'/login'} >Login</NavLink>
            }
        </div>
    </header>
}

export default Header;