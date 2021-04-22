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
            <img src='https://ps.w.org/ultimate-member/assets/icon-256x256.png?rev=2143339 'alt='logo' />
            <div>VLOG</div>
        </div>
        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>LOG OUT</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;