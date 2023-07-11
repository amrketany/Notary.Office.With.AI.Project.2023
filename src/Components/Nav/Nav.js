import React from 'react';
import styles from "./Nav.module.css";
import logo from "../../imags/logo2.png"
import { NavLink } from 'react-router-dom';
import { name } from '../../Components/User Interface/UI';

const Nav = (props) => {
  return (
    <div className={styles.header} fixed="top">
      <div className={styles.container}>
        <div className={styles.navegation}>
          <div className={styles.nav}>
            <div className={styles.logoLinks}>
              <a href="/"> <img src={logo} className={styles.logo} alt="logo" /></a>
              {props.userData ?
                <div className={styles.PageLinks}>
                  <NavLink to="/" target="_self" className={styles.active}>Home</NavLink>
                  <NavLink to="/about" target="_self">About</NavLink>
                  {/* <NavLink to="/services" target="_self">Documentation</NavLink> */}
                  <NavLink to="/NewDocumentation" target="_self">Scan Contract With AI</NavLink>

                </div>
                : ""
              }
            </div>
            <div className={styles.logSystem}>
              {
                props.userData ?
                  <><NavLink to="/User-Settings" ta rget="_self">User Settings</NavLink>
                    <a className={styles.logOut} onClick={props.logOut}>Log Out</a>
                  </>

                  :
                  <div>
                    <NavLink to="/signIn" target="_self">Sign in</NavLink>
                    <NavLink to="/signUp" target="_self">Sign up</NavLink>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className={styles.smallArea}>
          <a href="/"> <img src={logo} className={styles.logoSmallArea} alt="logo" /></a>
          <div className={styles.links}>
            <span className={styles.icons}>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <ul className={styles.smallSize}>
              {props.userData ?
                <div className={styles.HideLinks}>
                  <li><NavLink to="/" target="_self">Home</NavLink></li>
                  <li><NavLink to="/about" target="_self">About</NavLink></li>
                  {/* <li><NavLink to="/services" target="_self">Documentation</NavLink></li> */}
                  <li><NavLink to="/NewDocumentation" target="_self">Scan Contract With AI</NavLink></li>
                  <li><NavLink to="/User-Settings" target="_self">User Settings</NavLink></li>
                  <li><a className={styles.logOut} onClick={props.logOut}>Log Out</a></li></div>
                : <div className={styles.ShowLinks}>
                  <li><NavLink to="/signIn" target="_self">Sign in</NavLink></li>
                  <li><NavLink to="/signUp" target="_self">Sign up</NavLink></li>
                </div>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;















//ggggggg
          // <div className={styles.nav}>
          //   <a href="/"> <img src={logo} className={styles.logo} alt="logo" /></a>
          //   {props.userData ?
          //     <div>
          //       <NavLink to="/" target="_self" className={styles.active}>Home</NavLink>
          //       <NavLink to="/about" target="_self">About</NavLink>
          //       {/* <NavLink to="/services" target="_self">Documentation</NavLink> */}
          //       <NavLink to="/NewDocumentation" target="_self">Documentation</NavLink>
          //       <NavLink to="/User-Settings" ta rget="_self">User Settings</NavLink>
          //       <a   onClick={props.logOut}>Log Out</a>
          //     </div>
          //     :
          //     <div>
          //       <NavLink to="/signIn" target="_self">Sign in</NavLink>
          //       <NavLink to="/signUp" target="_self">Sign up</NavLink>
          //     </div>
          //   }
          // </div>
