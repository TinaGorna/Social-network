import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/dialog' activeClassName={styles.activeLink}>Dialogs</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/travelPlans' activeClassName={styles.activeLink}>Travel Plans</NavLink>
        </div>
    </nav>
}

export default Navbar;