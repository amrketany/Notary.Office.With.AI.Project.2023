import React from 'react'
import styles from "./SignUp.module.css";
function SignUp() {
  return (
    <div  className={styles.SignUp}>
      <div className={styles.container}>
        <form>
          <div>
           <label  for="name">Enter  your  full  Name</label>
           <input  type="text" id={styles.name}  name="name"  required="required"></input>
          </div>
          <div>
           <label  for="Email">Enter  your  Email</label>
           <input  type="email" id={styles.email}  name="email" required="required"></input>
          </div>
          <div>
           <label  for="pass">Enter  your  pass</label>
           <input  type="password" id={styles.pass}  name="pass"  required="required"></input>
          </div>
          <div>
           <label  for="repass">Re_Enter  your  Password</label>
           <input  type="password" id={styles.repass}  name="repass"  required="required"></input>
          </div>
          <div>
           <label  for="adress">Enter  your  Adress</label>
           <input  type="text" id={styles.adress}  name="adress"  required="required"></input>
          </div>
          <div>
           <label  for="jop">Enter  your  Jop</label>
           <input  type="text" id={styles.jop}  name="jop"  required="required"></input>
          </div>
          <div>
           <label  for="phone">Enter  your  phone</label>
           <input  type="number" id={styles.phone}  name="phone"  required="required"></input>
          </div>
          <div>
           <label  for="id">Enter  your  ID</label>
           <input  type="number" id={styles.id}  name="name"  required="required"></input>
          </div>
          <div>
           <label  for="nationality">Enter  your  Nationality</label>
            <select id={styles.nationality} name="nationality"  required="required">
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
           <label  for="governorate">Enter  your  Governorate</label>
            <select id={styles.governorate} name="governorate"  required="required">
            <option>Buhaira</option>
            <option>Cairo</option>
            <option>Alexandria</option>
            <option>Mansora</option>
            <option>Monofia</option>
            </select>
          </div>
          <div>
          <input  type="submit" value="Sign Up"></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
