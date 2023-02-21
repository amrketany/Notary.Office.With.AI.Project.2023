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
        <Route  exact path="/services" element={ <Services/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App;
