import React, { useCallback, useEffect, useState } from 'react';
import styles from "./SignIn.module.css";
import logo from "../../imags/13.jpg";
import "../../../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css";
import "../../../node_modules/pretty-checkbox/dist/pretty-checkbox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const SignIn = (props) => {
  let iconClass, inputType;
  const [state, setState] = useState(true);
  if (state === false) {
    iconClass = faEye;
    inputType = "text";
  } else {
    iconClass = faEyeSlash;
    inputType = "password"
  }

  //Handel alert Liberary
  const alert = (data) => {
    Swal.fire(data)
  }


  //Navigate if login success
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handelChange = (e) => {
    const { name, value } = e.target;
    //i-need-to-uderstand-it
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  //Function to handel Submit
  const handelSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
    if (formError.length === 0 || formError.length === undefined && isSubmit === true) {
      (handelApiSubmit())
    } else {
      console.log(formError.length);
    }
  }


  //Handle Submit Api
  const handelApiSubmit = () => {
    fetch("http://NotaryOfficeProject.somee.com/api/Visitors/SignIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password,
      })
    }).then((response) => response.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.message === null) {
          localStorage.setItem("userToken", data.token);
          //call user data
          props.saveUserData();
          navigate('/');
        } else if (data.message !== undefined) {
          alert(data.message);
        } else {
          alert("Complete Sign In Data Please!");
        }
      })
  }



  //Validate-Function
  const validate = (value) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!value.email) {
      errors.email = "Email Is Required";
    } else if (!regex.test(value.email)) {
      errors.email = "Not Valid Email format!";
    }
    if (!value.password) {
      errors.password = "Password Is Required";
    } else if (value.password.length < 8) {
      errors.password = "Password Should Be More Than 8 Digits";
    }
    return errors;
  }
  //End-of-validation
  //..........................................................


  return (
    <div className={styles.SignIn}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.dhaccount}><p>Don't  have  an  account ? <a href='/signUp' className={styles.signupLink}>Sign Up</a></p></div>
          <a href="/home">  <img src={logo} alt="img not found" className={styles.img} /></a>
          <h3 className={styles.welcomeMessage}>Welcome Home</h3>
        </div>

        <form className={styles.signinForm} onSubmit={handelSubmit} >
          <div className={styles.email_in}>
            <label for="mail" className={styles.signinLable}>Email</label>
            <input className={styles.signinLable} type={"text"} placeholder='Enter  your  Email' id="mail" name='email'
              value={formValues.email}
              onChange={handelChange}></input>
          </div>
          <p className={styles.errorMessage}>{formError.email}</p>
          <div className={styles.password_in} >
            <label for="pass" className={styles.signinLable}>Password</label>
            <input className={styles.signinLable} type={inputType} placeholder='Enter  your  pass' id="pass" name='password'
              value={formValues.password}
              onChange={handelChange}>
            </input>
            <span onClick={() => {
              setState(!state)
            }} className={styles.showIcon} >
              <FontAwesomeIcon icon={iconClass} />
            </span>
          </div>
          <p className={styles.errorMessage}>{formError.password}</p>
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
          <a className={styles.signupLink} href='/forgotPass'>Forgot  your  pass?</a>
          <div className={styles.signinLable}>
            <input type="submit" value="Submit" id={styles.submit}></input>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignIn;