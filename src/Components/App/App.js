import styles from './App.module.css';
import React from "react";
import Nav from '../../Components/Nav/Nav';
import SignIn from '../../Components/SignIn/SignIn';
import Home from "../Home/Home";
import SignUp from '../SignUp/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import NewDocumentation from '../NewDocumentation/NewDocumentation';
import BuySellMachine from "../Services/Machine/BuySellMachine";
import RentalMachine from "../Services/Machine/RentalMachine";
import BuySellBuilding from "../Services/Building/BuySellBuilding";
import RentalBuilding from "../Services/Building/RentalBuilding";
import UI from "../User Interface/UI";
import ContractInfo from '../User Interface/ContractInfo';




class App extends React.Component {

  state = {
    currentUser: null,
  }

  componentDidUpdate() {
    console.log("USER:");
    console.log(this.state.currentUser);

  }

  extractCurrentUser = (user) => {
    this.setState({ currentUser: user, });
  }
  render() {
    return (
      <BrowserRouter>
        <div className={styles.container}>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signIn" element={<SignIn extractor={this.extractCurrentUser} />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/NewDocumentation" element={<NewDocumentation />} />
            <Route exact path="/User-Settings/*" element={<UI currentUser={this.state.currentUser} />} />
            <Route exact path="/buysellmachine" element={<BuySellMachine />} />
            <Route exact path="/rentalmachine" element={<RentalMachine />} />
            <Route exact path="/buysellbuilding" element={<BuySellBuilding />} />
            <Route exact path="/rentalbuilding" element={<RentalBuilding />} />
            <Route exact path="/contract-info" element={<ContractInfo />} />


          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;


