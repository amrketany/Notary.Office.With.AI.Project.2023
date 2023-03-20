import React, { useState } from 'react';
import styles from "./SignIn.module.css";
import logo from "../../imags/13.jpg";
import "../../../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css";
import "../../../node_modules/pretty-checkbox/dist/pretty-checkbox.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const SignIn = () => {

  let iconClass , inputType;
   const [state, setState] = useState(true);
  if (state === false) {
    iconClass = faEye;
    inputType = "text";
  } else {
    iconClass = faEyeSlash;
    inputType="password"
  }
  










  return (
    <div className={styles.SignIn}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.dhaccount}><p>Don't  have  an  account ? <a href='/signUp' className={styles.signupLink}>Sign Up</a></p></div>
          <a href="/home">  <img src={logo} alt="mm" className={styles.img} /></a>
          <h3>Welcome Home</h3>
        </div>
        <form className={styles.signinForm}  onSubmit={(e)=>{e.preventDefault()}} >
          
          <div className={styles.email_in}>
            <label for="mail" className={styles.signinLable}>Email</label>
            <input className={styles.signinLable} type={"email"} placeholder='Enter  your  Email' id="mail" name='mail'
            required="required"></input>
          </div>
          
          <div className={styles.password_in} >
            <label for="pass" className={styles.signinLable}>Password</label>
            <input className={styles.signinLable} type={inputType} placeholder='Enter  your  pass' id="pass" name='pass'
            required="required">
            </input>
            <button onClick={()=>setState(!state)} className={styles.showIcon } >
              <FontAwesomeIcon icon={iconClass} />
            </button>
          </div>
          
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

          <a className={styles.signupLink} href='/signUp'>Forgot  your  pass?</a>

          <div className={styles.signinLable}>
            <input type="submit" value="Submit" id={styles.submit}></input>
          </div>

        </form>
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




