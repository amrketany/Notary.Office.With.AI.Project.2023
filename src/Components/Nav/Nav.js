import React from 'react';
import styles from "./Nav.module.css";
import logo from "../../imags/0.jpg"
import { NavLink } from 'react-router-dom';
import { name } from '../../Components/User Interface/UI';

const Nav = (props) => {
  return (
    <div className={styles.header} fixed="top">
      <div className={styles.container}>
        <div className={styles.logoName}>
          <a href="/"> <img src={logo} className={styles.logo} alt="logo" /></a>
        </div>
        <div className={styles.navegation}>
          
          <div className={styles.nav}>
            {props.userData ?
              <div>
                <NavLink to="/" target="_self" className={styles.active}>Home</NavLink>
                <NavLink to="/about" target="_self">About</NavLink>
                {/* <NavLink to="/services" target="_self">Documentation</NavLink> */}
                <NavLink to="/NewDocumentation" target="_self">Documentation</NavLink>
                <NavLink to="/User-Settings" ta rget="_self">User Settings</NavLink>
                {/* <NavLink to="/signIn" target="_self">Log Out</NavLink> */}
                <a   onClick={props.logOut}>Log Out</a>
              </div>
              :
              <div>
                <NavLink to="/signIn" target="_self">Sign in</NavLink>
                <NavLink to="/signUp" target="_self">Sign up</NavLink>
              </div>
            }
          </div>
          
          
         
        </div>
        <div className={styles.links}>
          <span className={styles.icons}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li><NavLink to="/" target="_self">Home</NavLink></li>
            <li><NavLink to="/about" target="_self">About</NavLink></li>
            {/* <li><NavLink to="/services" target="_self">Documentation</NavLink></li> */}
            <li><NavLink to="/NewDocumentation" target="_self">NewDocumentation</NavLink></li>
            <li><NavLink to="/signIn" target="_self">Sign in</NavLink></li>
            <li><NavLink to="/signUp" target="_self">Sign up</NavLink></li>
            <li><NavLink to="/User-Settings" target="_self">User Settings</NavLink></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav;
