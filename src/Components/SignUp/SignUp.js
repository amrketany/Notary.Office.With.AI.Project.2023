import React, { useState } from 'react'
import styles from "./SignUp.module.css";


import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignUp() {
 //Start Make Password Icons
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
  //End Password Icons
  //..............................

  //Start Validation and onSubmit Method
  const initialValues = {
    username: "", email: "", password: "", repassword: "", address: "", job: "", phone: "", idnumber: "", nationality: "",
    governorate: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
//handle change inputs
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name] : value});
    console.log(formValues);

  }

//Send data to api 
  const handelApiSubmit = () => {
    fetch("http://localhost:8000/customerSignUp", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
            repassword: formValues.repassword,
            job: formValues.job,
            address: formValues.address,
            phone: formValues.phone,
            idnumber: formValues.idnumber,
            nationality: formValues.nationality,
            governorate: formValues.governorate
          })
        }).then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
  }
//Handle Submit Form 
  const handelSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
    //Code to send data to apis only if all values is valid
    Object.keys(formError).length === 0 && isSubmit ?
      (
        handelApiSubmit()
      )
      :
      (console.log("Error"))
  }

  const validate = (value) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.username) {
      errors.username = "UserName Is Required";
    }
    if (!value.phone) {
      errors.phone = "Phone Is Required";
    } else if (value.phone.length > 11 || value.phone.length < 11) {
      errors.phone = "Phone Must be 11 Numbers";      
    }
    if (!value.job) {
      errors.job = "Job Is Required";
    }
    if (!value.idnumber) {
      errors.idnumber = "Id Number Is Required";
    } else if (value.idnumber.length > 14 || value.idnumber.length < 14) {
      errors.idnumber = "Id Number Must Be 14 Numbers";      
    }
    if (!value.address) {
      errors.address = "Addrees Is Required";
    }
    if (!value.governorate) {
      errors.governorate = "Governorate Is Required";
    }
    if (!value.nationality) {
      errors.nationality = "Nationality Is Required";
    }
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
    if (!value.repassword) {
      errors.repassword = "Re Enter Password Is Required";
    } else if (value.repassword.length < 8) {
      errors.repassword = "Password Should Be More Than 8 Digits";
    }else if (value.repassword!==value.password) {
      errors.repassword = "Password Don't Match Other Field";
    }
    return errors;
  }
  //End Validation and onSubmit Method
  return (
    <div className={styles.SignUp}>
      <div className={styles.container}>
        <form onSubmit={handelSubmit}>
          <div>
            <label for="name">Enter  your  full  Name</label>
            <input type="text" id={styles.name} name="username" className={styles.signupbtn}
              onChange={handelChange}></input>
            <p className={styles.errorMessage}>{formError.username}</p>
          </div>
          <div>
            <label for="Email">Enter  your  Email</label>
            <input type="text" id={styles.email} name="email" className={styles.signupbtn}
              onChange={handelChange}></input>
            <p className={styles.errorMessage}>{formError.email}</p>
          </div>
          <div className={styles.passInput}>
            <label for="pass">Enter  your  pass</label>
            <input type={inputType0} id={styles.pass} name="password" className={styles.signupbtn}
              onChange={handelChange}></input>
            <button onClick={() => setStatepass(!statePass)} className={styles.showPass}>
              <FontAwesomeIcon icon={iconClass0} />
            </button>
            <p className={styles.errorMessage}>{formError.password}</p>
          </div>
          <div className={styles.passInput}>
            <label for="repass">Re_Enter  your  Password</label>
            <input type={inputType1} id={styles.repass} name="repassword" className={styles.signupbtn}
              onChange={handelChange}></input>
            <button onClick={() => setStaterepass(!stateRepass)} className={styles.showPass}>
              <FontAwesomeIcon icon={iconClass1} />
            </button>
            <p className={styles.errorMessage}>{formError.repassword}</p>
          </div>
          <div>
            <label for="adress">Enter  your  Adress</label>
            <input type="text" id={styles.adress} name="address" className={styles.signupbtn}
              onChange={handelChange}></input>
            <p className={styles.errorMessage}>{formError.address}</p>
          </div>
          <div>
            <label for="job">Enter  your  Job</label>
            <input type="text" id={styles.job} name="job" className={styles.signupbtn}
              onChange={handelChange}></input>
            <p className={styles.errorMessage}>{formError.job}</p>
          </div>
          <div>
            <label for="phone">Enter  your  phone</label>
            <input type="text" maxLength={11} pattern="[0-9]*" id={styles.phone} name="phone" className={styles.signupbtn}
              onChange={handelChange}
              onClick={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></input>
            <p className={styles.errorMessage}>{formError.phone}</p>
          </div>
          <div>
            <label for="id">Enter  your  ID</label>
            <input type="text" id={styles.id} pattern="[0-9]*" name="idnumber" maxLength={14} className={styles.signupbtn}
              onChange={handelChange}
              onClick={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}></input>
            <p className={styles.errorMessage}> {formError.idnumber}</p>
          </div>
          <div>
            <label for="nationality">Enter  your  Nationality</label>
            <select id={styles.nationality} name="nationality" onChange={handelChange}>
              <option>Egypt</option>
              <option>Algeria</option>
              <option>Suria</option>
              <option>Cansa</option>
              <option>Qatar</option>
              <option>Cuit</option>
              <option>Russia</option>
            </select>
            <p className={styles.errorMessage}>{formError.nationality}</p>
          </div>
          <div>
            <label for="governorate">Enter  your  Governorate</label>
            <select id={styles.governorate} name="governorate" onChange={handelChange}>
              <option>Buhaira</option>
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Mansora</option>
              <option>Monofia</option>
            </select>
            <p className={styles.errorMessage}>{formError.governorate}</p>
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
