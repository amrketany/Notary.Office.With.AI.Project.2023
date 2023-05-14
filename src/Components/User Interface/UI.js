import React from 'react';
import './UI.css';
import cp from "./cp.png";




class UI extends React.Component {
    state = {
        userData: null,
        fakeData: "abcdef",
    }
    componentDidMount() {
        let profileTab = document.getElementsByClassName("profile-content")[0];
        let contractsTab = document.getElementsByClassName("contracts-content")[0];
        let profileLink = document.querySelectorAll('.UI-container .menu  a.nav-link')[0];
        let contractLink = document.querySelectorAll('.UI-container .menu  a.nav-link')[1];

        profileLink.onclick = () => {
            contractLink.classList.remove("active");
            profileLink.classList.add("active");

            contractsTab.classList.remove("show");
            profileTab.classList.add("show");

        }
        contractLink.onclick = () => {
            profileLink.classList.remove("active");
            contractLink.classList.add("active");

            profileTab.classList.remove("show");
            contractsTab.classList.add("show");
        }



    }
    render() {

        let gettingData = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", 'http://www.notaryoffice2023.somee.com/api/visitors');
            request.send();
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    let recievedData = JSON.parse(request.responseText)[0];
                    console.log(this.state);
                    this.state.userData = recievedData;
                    console.log(this.state);
                    resolve()
                }
                else if (request.readyState === 4 && request.status !== 200) {
                    reject();
                }
            };
        });

        gettingData.then(() => {
            document.getElementById("firstName").value = this.state.userData.name;
            document.getElementById("motherName").value = this.state.userData.momName;
            document.getElementById("factoryNumber").value = this.state.userData.factoryNum;
            document.getElementById("phoneNumber").value = this.state.userData.phone;
            document.getElementById("email").value = this.state.userData.email;
            document.getElementById("pass").value = this.state.userData.password;
            document.getElementById("nationality").value = this.state.userData.nationality;
            document.getElementById("governorate").value = this.state.userData.governorate;
            document.getElementById("address").value = this.state.userData.address;
            document.getElementById("religion").value = this.state.userData.religon;

        }, () => {
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

        });

        return (

            <div className='UI-container'>
                <div className='menu'>
                    <a className='nav-link active' href='#profile-tab' >
                        <i className="fa-solid fa-circle-user"></i>
                        Profile
                    </a>
                    <a className='nav-link' href='#contracts-tab'>
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
                            <input type="number" className="form-control" id="phoneNumber" />

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
                            <a href="/contract-info" target='_blank'>
                                <li className='contract' data-CID={null}>
                                    <img src={cp} alt='contract-preview' />
                                    <p className='contract-title'>buy a nissan car</p>
                                </li>
                            </a>
                            <a href="/contract-info" target='_blank'>
                                <li className='contract' data-CID={null}>
                                    <img src={cp} alt='contract-preview' />
                                    <p className='contract-title'>buy a nissan car</p>
                                </li>
                            </a>
                            <a href="/contract-info" target='_blank'>
                                <li className='contract' data-CID={null}>
                                    <img src={cp} alt='contract-preview' />
                                    <p className='contract-title'>buy a nissan car</p>
                                </li>
                            </a>
                            <a href="/contract-info" target='_blank'>
                                <li className='contract' data-CID={null}>
                                    <img src={cp} alt='contract-preview' />
                                    <p className='contract-title'>buy a nissan car</p>
                                </li>
                            </a>
                            <a href="/contract-info" target='_blank'>
                                <li className='contract' data-CID={null}>
                                    <img src={cp} alt='contract-preview' />
                                    <p className='contract-title'>buy a nissan car</p>
                                </li>
                            </a>
                            <a href="/contract-info" target='_blank'>
                                <li className='contract' data-CID={null}>
                                    <img src={cp} alt='contract-preview' />
                                    <p className='contract-title'>buy a nissan car</p>
                                </li>
                            </a>
                            <a href="/contract-info" target='_blank'>
                                <li className='contract' data-CID={null}>
                                    <img src={cp} alt='contract-preview' />
                                    <p className='contract-title'>buy a nissan car</p>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>

            </div >

        );

    }
}

export default UI;