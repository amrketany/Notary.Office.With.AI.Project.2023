import React from 'react';
import styles from "./SignIn.module.css";
import logo from "../../imags/13.jpg";
import "../../../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css";
import "../../../node_modules/pretty-checkbox/dist/pretty-checkbox.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const SignIn = () => {
  return (
    <div className={styles.SignIn}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div><p>Don't  have  an  account ? <a href='/signUp' className={styles.signUp}>Sign Up</a></p></div>
          <a href="/home">  <img src={logo} alt="mm" className={styles.img} /></a>
          <h3>Welcome Home</h3>
        </div>


        <div className={styles.Form}>
          <form>
            <label for="mail" className={styles.r}>Email</label>
            <input type="email" placeholder='Enter  your  Email' id="mail" name='mail' className={styles.r} required="required"></input>
            <label for="pass" className={styles.r}>Password</label>
            <input type="password" placeholder='Enter  your  pass' id="pass" name='pass' className={styles.r} required="required">
            </input>
            <div className={styles.btnRemember}>
              <div className="pretty p-icon p-rotate">
                <input type="checkbox" />
                <div className="state p-success">
                  <i className="icon mdi mdi-check"></i>
                  <FontAwesomeIcon icon={faCheck} className={styles.icon} class="icon mdi mdi-check" />
                  <label>Remember me.</label>
                </div>
              </div>
            </div>

            <a href='/signUp'>Forgot  your  pass?</a>
            <div className={styles.r}>
              <input type="submit" value="Submit" id={styles.submit}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;


              // <div>
              //   <input type="checkbox"  id={styles.check}  name='check'></input>
              //   <label for="check">Remember me?</label>
              // </div>


              // pretty p-icon p-rotate




