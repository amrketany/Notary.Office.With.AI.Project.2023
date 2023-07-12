import styles from './App.module.css';
import React, { useEffect, useState } from "react";
import Nav from '../../Components/Nav/Nav';
import SignIn from '../../Components/SignIn/SignIn';
import Home from "../Home/Home";
import SignUp from '../SignUp/SignUp';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import NewDocumentation from '../NewDocumentation/NewDocumentation';
import BuySellMachine from "../Services/Machine/BuySellMachine";
import RentalMachine from "../Services/Machine/RentalMachine";
import BuySellBuilding from "../Services/Building/BuySellBuilding";
import RentalBuilding from "../Services/Building/RentalBuilding";
import ContractInfo from '../User Interface/ContractInfo';
import ContractForm from '../User Interface/ContractForm';
import jwtDecode from 'jwt-decode';
import ForgotPass from '../ForgotPass/ForgotPass';
import UserSettings from '../User Interface/UI';
import Viewer from '../User Interface/Viewer';
import Test from '../Test/Test';

const App = (props) => {

  let { contractImage } = useState();
  //Thia Is Props Name  ContractData
  //...Protected Route it is function component should start with capital liter like App

  //Protect Route Path
  function ProtectedRoute(props) {
    if (localStorage.getItem("userToken") == null) {
      return <Navigate to="/signIn" />   //Navigate Return Component
    } else {
      return props.children;
    }
  }
  //handel Token
  const [userData, setUserData] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  //Handel log out
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/signIn");
  }
  //handel Refreshing
  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      saveUserData();
    }
  }, [])
  return (

    <div className={styles.container}>
      <Test />
      <Nav userData={userData} logOut={logOut} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signIn" element={<SignIn saveUserData={saveUserData} />} />
        <Route exact path="/forgotPass" element={<ForgotPass />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route exact path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route exact path="/NewDocumentation" element={<ProtectedRoute><NewDocumentation /></ProtectedRoute>} />
        <Route exact path="/UserSettings/*" element={<ProtectedRoute><UserSettings /></ProtectedRoute>} />
        <Route exact path="/buysellmachine" element={<ProtectedRoute><BuySellMachine /></ProtectedRoute>} />
        <Route exact path="/rentalmachine" element={<ProtectedRoute><RentalMachine /></ProtectedRoute>} />
        <Route exact path="/buysellbuilding" element={<ProtectedRoute><BuySellBuilding /></ProtectedRoute>} />
        <Route exact path="/rentalbuilding" element={<ProtectedRoute><RentalBuilding /></ProtectedRoute>} />
        <Route exact path="/contractInfo" element={<ProtectedRoute><ContractInfo /></ProtectedRoute>} />
        <Route exact path="/contractForm" element={<ProtectedRoute>< ContractForm /></ProtectedRoute>} />
        <Route exact path="/viewer" element={<ProtectedRoute><Viewer /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;