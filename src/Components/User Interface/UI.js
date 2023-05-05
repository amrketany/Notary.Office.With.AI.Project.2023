import React from 'react';
import './UI.css';
import cp from './cp.png';





class UI extends React.Component {
    componentDidMount() {
        let profileTab = document.getElementsByClassName("profile-tab")[0];
        let contractsTab = document.getElementsByClassName("contracts-tab")[0];
        let links = document.querySelectorAll('.container-fluid.nav > a.nav-link');
        links[0].onclick = function () {
            contractsTab.classList.remove("show");
            profileTab.classList.add("show");
        };
        links[1].onclick = function () {
            profileTab.classList.remove("show");
            contractsTab.classList.add("show");
        };

    }
    render() {
        return (
            <>
                <div className="container-fluid main speical-height special-padding">

                    <div className="d-block d-md-none menu">

                        <div className="bar"></div>

                    </div>



                    <div className="row align-items-center special-height" >

                        <div className="col-md-3 d-none d-md-block special-height" >

                            <div className="container-fluid nav sidebar flex-column">

                                <a href="#" className="nav-link active mt-auto"><i className="far fa-user-circle"></i> Profile</a>
                                <a href="#" className="nav-link"><i className="far fa-bell"></i> Validated Contracts</a>

                            </div>

                        </div>

                        <div className="col-md-9">

                            <div className="container content clear-fix">

                                <h2 className="mt-5 mb-5">Profile Settings</h2>

                                <div className="profile-tab row special-height">

                                    <div className="col-md-3">

                                        <div href='#' className="d-inline"><img src="https://image.flaticon.com/icons/svg/236/236831.svg" width='130px' style={{ margin: '0' }} /><p className="pl-2 mt-2"><a href="#" className="btn special3">Edit Picture</a></p></div>


                                    </div>

                                    <div className="col-md-9">

                                        <div className="container">

                                            <form>

                                                <div className="form-group">

                                                    <label htmlFor='fullName'>Full Name</label>
                                                    <input type="text" className="form-control" id="fullName" />

                                                </div>
                                                <div className="form-group">

                                                    <label htmlFor='email'>Email</label>
                                                    <input type="email" className="form-control" id="email" />

                                                </div>
                                                <div className="form-group">

                                                    <label htmlFor='pass'>Password</label>
                                                    <input type="password" className="form-control" id="pass" />

                                                </div>
                                                <div className="form-group ">

                                                    <label htmlFor='birthday'>Birthday</label>
                                                    <input type="date" className="form-control" id="birthday" />

                                                </div>

                                                <div className="row mt-5">

                                                    <div className="col">

                                                        <button type="button" className="btn btn-primary btn-block">Save Changes</button>

                                                    </div>

                                                    <div className="col">

                                                        <button type="button" className="btn btn-default btn-block">Cancel</button>

                                                    </div>

                                                </div>

                                            </form>

                                        </div>

                                    </div>

                                </div>
                                { /*another page content */}

                                <div className="contracts-tab row special-height">

                                    <div className="col-md-3"></div>

                                    <div className="col-md-9">

                                        <div className="container">

                                            <ul className='contracts'>
                                                <li className='contract'>
                                                    <img src={cp} alt='contract preview' />
                                                    <p className='contract-title'>buy a nissan car</p>
                                                </li>
                                                <li className='contract'>
                                                    <img src={cp} alt='contract preview' />
                                                    <p className='contract-title'>buy a nissan car</p>
                                                </li>
                                                <li className='contract'>
                                                    <img src={cp} alt='contract preview' />
                                                    <p className='contract-title'>buy a nissan car</p>
                                                </li>
                                                <li className='contract'>
                                                    <img src={cp} alt='contract preview' />
                                                    <p className='contract-title'>buy a nissan car</p>
                                                </li>
                                                <li className='contract'>
                                                    <img src={cp} alt='contract preview' />
                                                    <p className='contract-title'>buy a nissan car</p>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>



                <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            </>

        );

    }
}

export default UI;