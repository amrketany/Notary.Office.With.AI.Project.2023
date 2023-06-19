import React, { useState } from 'react'
import styles from "./SignUp.module.css";
import Swal from 'sweetalert2';

import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function SignUp() {
  //Start Make Password Icons
  let iconClass0, iconClass1, inputType0, inputType1;
  const [statePass, setStatepass] = useState(true);
  const [stateRepass, setStaterepass] = useState(true);


    //Navigate if login success
    const navigate = useNavigate();
    //Handel alert Liberary
  const alert = (data) => {
    Swal.fire(data)
  }

  if (statePass === false) {
    iconClass0 = faEye;
    inputType0 = "text";
  } else {
    iconClass0 = faEyeSlash;
    inputType0 = "password"
  }

  if (stateRepass === false) {
    iconClass1 = faEye;
    inputType1 = "text";
  } else {
    iconClass1 = faEyeSlash;
    inputType1 = "password"
  }
  //End Password Icons
  //..............................

  //Function to Enter numbers only at phone and Id and fn filds
  const EnterNumberOnly = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
  //.............................

  //Start Validation and onSubmit Method
  const initialValues = {
    name: "", momName: "", email: "", password: "", repassword: "", address: "", job: "", phone: "", id: "", factoryNum: "", nationality: "",
    governorate: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  //handle change inputs
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  }


  //Handle Submit Form 
  const handelSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
    // Code to send data to apis only if all values is valid
    if (formError.length===undefined || formError.length===null && isSubmit ===true) {
          (handelApiSubmit())
    } else {
      console.log(formError);
      console.log(Object.keys.prototype.length);
      console.log(formError.length);
      console.log(isSubmit);
    } 
    }
   //Send data to api 

  //Send data to api 
  const handelApiSubmit = () => {
    fetch("http://NotaryOfficeProject.somee.com/api/Visitors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: formValues.id,
        name: formValues.name,
        momName: formValues.momName,
        email: formValues.email,
        password: formValues.password,
        address: formValues.address,
        phone: formValues.phone,
        factoryNum: formValues.factoryNum,
        nationality: formValues.nationality,
        religon: formValues.religon,
        governorate: formValues.governorate
      })
    }).then((response) => response.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.message === null) {
          navigate('/signIn');
        } else if (data.message !== undefined){
          alert(data.message);
        } else {
          alert("Complete Sign Up Data Please!");
          console.log(data.message);
        }
      })
  }


  //Start Control Validation
  const validate = (value) => {
    const errors = {};
    //email regex
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //FactoryNumber regex
    const regexFactoryName = /[A-Z][A-Z][0-9]*/;
    if (!value.name) {
      errors.name = "UserName Is Required";
    }
    if (!value.momName) {
      errors.momName = "Mother Name Is Required";
    }
    if (!value.phone) {
      errors.phone = "Phone Is Required";
    } else if (value.phone.length > 11 || value.phone.length < 11) {
      errors.phone = "Phone Must be 11 Numbers";
    }
    if (!value.job) {
      errors.job = "Job Is Required";
    }
    if (!value.id) {
      errors.id = "Id Number Is Required";
    } else if (value.id.length > 14 || value.id.length < 14) {
      errors.id = "Id Number Must Be 14 Numbers";
    }
    if (!value.factoryNum) {
      errors.factoryNum = "Factory Number Is Required";
    } else if (value.factoryNum.length < 9) {
      errors.factoryNum = "Factory Number Must Be 9 Numbers";
    } else if (!regexFactoryName.test(value.factoryNum)) {
      errors.factoryNum = "Not Valid FactoryNum format!";
    }
    if (!value.address) {
      errors.address = "Addrees Is Required";
    }
    if (!value.governorate) {
      errors.governorate = "Governorate Is Required";
    } else if (value.governorate === "-Select") {
      errors.governorate = "please Select a Governrate";
    }
    // add religon
    if (!value.religon) {
      errors.religon = "Religon Is Required";
    } else if (value.religon === "-Select") {
      errors.religon = "please Select a religon";
    }
    if (!value.nationality) {
      errors.nationality = "Nationality Is Required";
    } else if (value.nationality === "-Select") {
      errors.nationality = "please Select a Nationality";
    }
    if (!value.email) {
      errors.email = "Email Is Required";
    } else if (!regexEmail.test(value.email)) {
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
    } else if (value.repassword !== value.password) {
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
            <input type="text" id={styles.name} name="name" className={styles.signupbtn}
              onChange={handelChange}></input>
            <p className={styles.errorMessage}>{formError.name}</p>
          </div>
          {/* add mom name section */}
          <div>
            <label for="momName">Enter  your  full Mother  Name</label>
            <input type="text" id={styles.momName} name="momName" className={styles.signupbtn}
              onChange={handelChange}></input>
            <p className={styles.errorMessage}>{formError.momName}</p>
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
            <span onClick={() => setStatepass(!statePass)} className={styles.showPass}>
              <FontAwesomeIcon icon={iconClass0} />
            </span>
            <p className={styles.errorMessage}>{formError.password}</p>
          </div>
          <div className={styles.passInput}>
            <label for="repass">Re_Enter  your  Password</label>
            <input type={inputType1} id={styles.repass} name="repassword" className={styles.signupbtn}
              onChange={handelChange}></input>
            <span onClick={() => setStaterepass(!stateRepass)} className={styles.showPass} >
              <FontAwesomeIcon icon={iconClass1} />
            </span>
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
            <input type="text" maxLength={11} pattern="[0-9]*"
              id={styles.phone} name="phone" className={styles.signupbtn}
              onChange={handelChange}
              onKeyPress={EnterNumberOnly}
              placeholder="Enter Numbers only" ></input>
            <p className={styles.errorMessage}>{formError.phone}</p>
          </div>
          <div>
            <label for="id">Enter  your  ID</label>
            <input type="text" id={styles.id} pattern="[0-9]*" name="id" maxLength={14} className={styles.signupbtn}
              onChange={handelChange}
              onKeyPress={EnterNumberOnly}
              placeholder="Enter Numbers only"></input>
            <p className={styles.errorMessage}> {formError.id}</p>
          </div>
          {/* Add Factory number Section */}
          <div>
            <label for="fn">Enter  your  Factory number</label>
            <input type="text" id={styles.fn} name="factoryNum" maxLength={9} className={styles.signupbtn}
              onChange={handelChange}
              placeholder="Like AS1111115"></input>
            <p className={styles.errorMessage}> {formError.factoryNum}</p>
          </div>
          <div>
            <label for="nationality">Enter  your  Nationality</label>
            <select id={styles.nationality} name="nationality" onChange={handelChange}>
              <option>-Select</option>
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
              <option>-Select</option>
              <option>Buhaira</option>
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Mansora</option>
              <option>Monofia</option>
            </select>
            <p className={styles.errorMessage}>{formError.governorate}</p>
          </div>
          {/* add religion */}
          <div>
            <label for="religon">Enter  your  Religon</label>
            <select id={styles.governorate} name="religon" onChange={handelChange}>
              <option>-Select</option>
              <option>Muslim</option>
              <option>Christian</option>
            </select>
            <p className={styles.errorMessage}>{formError.religon}</p>
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










  //Send data to api []
  // const handelApiSubmit = () => {
  //   fetch("http://NotaryOfficeProject.somee.com/api/Visitors", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: formValues.id,
  //       name: formValues.name,
  //       momName: formValues.momName,
  //       email: formValues.email,
  //       password: formValues.password,
  //       address: formValues.address,
  //       phone: formValues.phone,
  //       factoryNum: formValues.factoryNum,
  //       nationality: formValues.nationality,
  //       religon: formValues.religon,
  //       governorate: formValues.governorate
  //     })
  //   }).then((response) => response.json())
  //     .then((data) => {
  //       console.log(data, "userRegister");
  //       if (data.message === null) {
  //         navigate('/signIn');
  //       } else if (data.message !== undefined){
  //         alert(data.message);
  //       } else {
  //         alert(data.errors);
  //         // alert("Complete Sign Up Data Please!");
  //         console.log(data.message);
  //       }
  //     })
  // }
