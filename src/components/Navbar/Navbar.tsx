import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to="/profile" activeClassName={styles.activeLink}>My profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/paviedamliennia" activeClassName={styles.activeLink}>Messages</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/users" activeClassName={styles.activeLink}>Friends</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/muzyka" activeClassName={styles.activeLink}>My community</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/naviny" activeClassName={styles.activeLink}>Vlog</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/nalady" activeClassName={styles.activeLink}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;