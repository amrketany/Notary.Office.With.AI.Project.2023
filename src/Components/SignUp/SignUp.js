import React, { useState } from 'react'
import styles from "./SignUp.module.css";


import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignUp() {
  let iconClass0 , iconClass1 ,  inputType0 , inputType1;
  const [statePass, setStatepass] = useState(true);
  const [stateRepass, setStaterepass] = useState(true);
  
  if (statePass === false) {
    iconClass0 = faEye;
    inputType0 = "text";
  } else {
    iconClass0 = faEyeSlash;
    inputType0="password"
  }
    
  if (stateRepass === false) {
    iconClass1 = faEye;
    inputType1 = "text";
  } else {
    iconClass1 = faEyeSlash;
    inputType1="password"
  }
  


  return (
    <div className={styles.SignUp}>
      <div className={styles.container}>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div>
            <label for="name">Enter  your  full  Name</label>
            <input type="text" id={styles.name} name="name" required="required" className={styles.signupbtn}></input>
          </div>
          <div>
            <label for="Email">Enter  your  Email</label>
            <input type="email" id={styles.email} name="email" required="required" className={styles.signupbtn}></input>
          </div>
          <div className={styles.passInput}>
            <label for="pass">Enter  your  pass</label>
            <input type={inputType0} id={styles.pass} name="pass" required="required" className={styles.signupbtn}></input>
            <button onClick={() => setStatepass(!statePass)} className={styles.showPass}>
              <FontAwesomeIcon icon={iconClass0} />
            </button>
          </div>
          <div className={styles.passInput}>
            <label for="repass">Re_Enter  your  Password</label>
            <input type={inputType1} id={styles.repass} name="repass" required="required" className={styles.signupbtn}></input>
            <button onClick={() => setStaterepass(!stateRepass)} className={styles.showPass}>
              <FontAwesomeIcon icon={iconClass1} />
            </button>
          </div>
          <div>
            <label for="adress">Enter  your  Adress</label>
            <input type="text" id={styles.adress} name="adress" required="required" className={styles.signupbtn}></input>
          </div>
          <div>
            <label for="jop">Enter  your  Jop</label>
            <input type="text" id={styles.jop} name="jop" required="required" className={styles.signupbtn}></input>
          </div>
          <div>
            <label for="phone">Enter  your  phone</label>
            <input type="number" id={styles.phone} name="phone" required="required" className={styles.signupbtn}></input>
          </div>
          <div>
            <label for="id">Enter  your  ID</label>
            <input type="number" id={styles.id} name="name" required="required" className={styles.signupbtn}></input>
          </div>
          <div>
            <label for="nationality">Enter  your  Nationality</label>
            <select id={styles.nationality} name="nationality" required="required">
              <option>Egypt</option>
              <option>Algeria</option>
              <option>Suria</option>
              <option>Cansa</option>
              <option>Qatar</option>
              <option>Cuit</option>
              <option>Russia</option>
            </select>
          </div>
          <div>
            <label for="governorate">Enter  your  Governorate</label>
            <select id={styles.governorate} name="governorate" required="required">
              <option>Buhaira</option>
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Mansora</option>
              <option>Monofia</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Sign Up"></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
