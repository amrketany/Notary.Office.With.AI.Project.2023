import  styles  from './App.module.css';
import React    from "react";
import Nav from '../../Components/Nav/Nav';
import SignIn from '../../Components/SignIn/SignIn';
import Home from "../../Components/Home/Home";
// import  App from  "../../Components/App/App"
import SignUp from '../SignUp/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import BSM from "../Services/Machine/BSM/BSM";
import RM from "../Services/Machine/RM/RM";
import BSB from "../Services/Building/BSB/BSB";
import RB from "../Services/Building/RB/RB";

const App = () => { 
  return (    
    <BrowserRouter>
    <div  className={styles.container}>
        <Nav />  
        <Routes>
        <Route  exact path="/" element={ <Home/>} />
        <Route  exact path="/signIn" element={ <SignIn/>} />
        <Route  exact path="/signUp" element={ <SignUp/>} />
        <Route  exact path="/about" element={ <About/>} />
          <Route exact path="/services" element={<Services />} />
          <Route  exact path="/bsm" element={ <BSM/>} />
          <Route exact path="/rm" element={<RM />} />
          <Route exact path="/bsb" element={<BSB />} />
          <Route exact path="/rb" element={<RB />} />
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App;
