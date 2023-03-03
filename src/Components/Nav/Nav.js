import React from 'react';
import styles from "./Nav.module.css";
import  logo  from  "../../imags/0.jpg"
const Nav = () => {
  return (
    <div className={styles.header}  fixed="top">
      <div  className={styles.container}>
       <a href="/"> <img src={logo} className={styles.logo}  alt="logo"/></a>
      <div className={styles.navegation}>
        <div className={styles.nav}>
          <a href="/" target="_self" className={styles.active}>Home</a>
          <a href="/about" target="_self">About</a>
          <a href="/signIn" target="_self">Sign in</a>
          <a href="/signUp" target="_self">Sign up</a>
          <a href="/services" target="_self">Services</a>
        </div>
        </div>
         <div className={styles.links}>
        <span className={styles.icons}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/signIn">Sign in</a></li>
          <li><a href="/signUp">Sign up</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
          </div>          
        </div>
    </div>
  )
}

export default Nav;
