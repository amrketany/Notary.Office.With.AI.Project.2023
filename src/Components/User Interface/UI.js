import React from 'react';
import './UI.css';
import cp from "./cp.png";
import axios from "axios";


class UI extends React.Component {
    state = {
        userData: null,
        userContracts: null,
        userVehicles: null,
        userProperties: null,
    }
    componentDidMount() {

        document.getElementById("firstName").value = "Loading";
        document.getElementById("firstName").value = "Loading";
        document.getElementById("motherName").value = "Loading";
        document.getElementById("factoryNumber").value = "Loading";
        document.getElementById("phoneNumber").value = "Loading";
        document.getElementById("email").value = "Loading";
        document.getElementById("pass").value = "Loading";
        document.getElementById("nationality").value = "Loading";
        document.getElementById("governorate").value = "Loading";
        document.getElementById("address").value = "Loading";
        document.getElementById("religion").value = "Loading";


        let links = document.querySelectorAll('.UI-container .menu  a.nav-link');
        let tabs = document.querySelectorAll('.UI-container .content > div');

        for (let x = 0; x < tabs.length; x++) {
            links[x].onclick = () => { switcher(tabs.length, x) };
        }

        function switcher(tabsNumber, linkNumber) {
            for (let x = 0; x < tabsNumber; x++) {
                console.log("inside switcher for");
                links[x].classList.remove("active");
                tabs[x].classList.remove("show");

            }

            tabs[linkNumber].classList.add("show");
            links[linkNumber].classList.add("active");
            return "Tab: " + linkNumber;
        }

    }
    render() {

        let TOKEN = localStorage.getItem("userToken");
        let headers = {
            "authorization": `bearer ${TOKEN}`,
        }

        let dataRequest = axios.get("http://notaryoffice-001-site1.ctempurl.com/Api/Visitors/GetCurrentlyUser", { headers });
        let contractRequest = axios.get("http://notaryoffice-001-site1.ctempurl.com/api/Contract/GetForCurrentlyUser", { headers });
        let propertyRequest = axios.get("http://notaryoffice-001-site1.ctempurl.com/api/Property/GetForCurrentlyUser", { headers });
        let vehicleRequest = axios.get("http://notaryoffice-001-site1.ctempurl.com/api/Vehical/GetForCurrentlyUser", { headers });

        dataRequest.then((response) => {
            this.state.userData = response.data;
            console.log("data updated");
            console.log(this.state.userData);
            return response;

        });
        contractRequest.then((response) => {

            this.state.userContracts = response.data;
            console.log("contract updated");
            return response;

        });
        vehicleRequest.then((response) => {
            this.state.userVehicles = response.data;
            console.log("vehicles updated");
            return response;

        });
        propertyRequest.then((response) => {
            this.state.userProperties = response.data;
            console.log("property updated");
            return response;

        });


        dataRequest.then(() => {

            document.getElementById("firstName").value = this.state.userData.name;
            document.getElementById("motherName").value = this.state.userData.momName;
            document.getElementById("factoryNumber").value = this.state.userData.factoryNum;
            document.getElementById("phoneNumber").value = this.state.userData.phoneNumber;
            document.getElementById("email").value = this.state.userData.email;
            document.getElementById("pass").value = this.state.userData.password;
            document.getElementById("nationality").value = this.state.userData.nationality;
            document.getElementById("governorate").value = this.state.userData.governorate;
            document.getElementById("address").value = this.state.userData.address;
            document.getElementById("religion").value = this.state.userData.religon;
            console.log("all good");
        });




        contractRequest.then((response) => {


            let contractsArea = document.querySelector('.contracts-content .contracts');
            console.log(contractsArea);
            if (response.data.length > 0) contractsArea.innerHTML = "";

            for (let cont = 0; cont < response.data.length; cont++) {

                let element = document.createElement("a");
                element.setAttribute("href", "/#/contract-info");
                element.setAttribute("target", "_blank");
                let temp = document.createElement("li");
                temp.setAttribute("class", "contract");
                let temp2 = document.createElement("img");
                temp2.setAttribute("src", cp);
                temp2.setAttribute("alt", "contract-preview");
                temp.append(temp2);

                temp2 = document.createElement("p");
                temp2.setAttribute("class", "contract-title");
                let text = `${response.data[cont].type ? "Hiring " : "Buying "} a ${response.data[cont].propertyId !== null ? "property" : "vehicle"} for ${response.data[cont].monyAmount} LE`;
                temp2.append(document.createTextNode(text));

                temp.append(temp2);

                element.append(temp);

                element.onclick = () => {
                    console.log(response.data[cont].id);
                    localStorage.setItem('ccid', response.data[cont].id);
                };


                contractsArea.append(element);

            }

        });

        return (

            <div className='UI-container'>
                <div className='menu'>
                    <a className='nav-link active' data-order="0">
                        <i className="fa-solid fa-user"></i>
                        Profile
                    </a>
                    <a className='nav-link' data-order="1">
                        <i className="fa-solid fa-circle-check"></i>
                        Validated Contracts
                    </a>

                </div>
                <div className='content'>
                    <div className='profile-content show '>
                        <form>

                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" />

                            <label htmlFor="motherName">Mother Name</label>
                            <input type="text" className="form-control" id="motherName" />

                            <label htmlFor="factoryNumber">Factory Number</label>
                            <input type="text" className="form-control" id="factoryNumber" />

                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" />

                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" />

                            <label htmlFor="pass">Password</label>
                            <input type="text" className="form-control" id="pass" />

                            <label htmlFor="nationality">Nationality</label>
                            <input type="text" className="form-control" id="nationality" />

                            <label htmlFor="governorate">Governorate</label>
                            <input type="text" className="form-control" id="governorate" />

                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" />

                            <label htmlFor="religion">Religion</label>
                            <input type="text" className="form-control" id="religion" />

                            <button type="button" className="btn btn-primary btn-block">Save Changes</button>

                            <button type="button" className="btn btn-default btn-block">Cancel</button>

                        </form>
                    </div>
                    <div className='contracts-content '>
                        <ul className='contracts'>
                            <span>You have no contracts Yet!</span>
                        </ul>
                    </div>

                </div>
            </div >

        );

    }
}

export default UI;