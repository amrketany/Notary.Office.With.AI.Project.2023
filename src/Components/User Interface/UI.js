import React from 'react';
import './UI.css';
import cp from './cp.png';





class UI extends React.Component {
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

        console.log("on");
    }
    render() {
        return (

            <div className='UI-container'>

                <div className='menu'>
                    <a className='nav-link active' href='#'>
                        <i className="fa-solid fa-circle-user"></i>
                        Profile
                    </a>
                    <a className='nav-link' href='#'>
                        <i className="fa-solid fa-circle-check"></i>
                        Validated Contracts
                    </a>
                </div>
                <div className='content'>

                    <div className='profile-content show '>
                        <form>



                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" />

                            <label htmlFor="secondName">Second Name</label>
                            <input type="text" className="form-control" id="secondName" />

                            <label htmlFor="motherName">Mother Name</label>
                            <input type="text" className="form-control" id="motherName" />



                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" />



                            <label htmlFor="pass">Password</label>
                            <input type="password" className="form-control" id="pass" />



                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" className="form-control" id="birthday" />





                            <button type="button" className="btn btn-primary btn-block">Save Changes</button>





                            <button type="button" className="btn btn-default btn-block">Cancel</button>





                        </form>
                    </div>
                    <div className='contracts-content '>
                        <ul className='contracts'>
                            <li className='contract'>
                                <img src={cp} alt='contract-preview' />
                                <p className='contract-title'>buy a nissan car</p>
                            </li>
                            <li className='contract'>
                                <img src={cp} alt='contract-preview' />
                                <p className='contract-title'>buy a nissan car</p>
                            </li>
                            <li className='contract'>
                                <img src={cp} alt='contract-preview' />
                                <p className='contract-title'>buy a nissan car</p>
                            </li>
                            <li className='contract'>
                                <img src={cp} alt='contract-preview' />
                                <p className='contract-title'>buy a nissan car</p>
                            </li>
                            <li className='contract'>
                                <img src={cp} alt='contract-preview' />
                                <p className='contract-title'>buy a nissan car</p>
                            </li>
                            <li className='contract'>
                                <img src={cp} alt='contract-preview' />
                                <p className='contract-title'>buy a nissan car</p>
                            </li>
                            <li className='contract'>
                                <img src={cp} alt='contract-preview' />
                                <p className='contract-title'>buy a nissan car</p>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>

        );

    }
}

export default UI;