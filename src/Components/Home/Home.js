import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Data extends React.Component {
    render() {
        return (


            <section id="hero">
                <div class="hero-container">
                    <h3>Welcome to <strong>Notary Office</strong> of Egypt</h3>

                    <h1>Easily Sign up Now in Notary Office</h1>
                    <h2>And <span>Validate</span> your Property <span>Contracts</span> and <span>Manage</span> Them Later at no Time</h2>
                    <NavLink to="signin" className="btn-get-started scrollto" style={{ textDedcoration: "none" }}>Sign in</NavLink>
                </div>
            </section>



            // <div className='home-container'>
            //     <img alt='' src={image} />
            //     <div className="text1">
            //         <h1>Notary Office of Egypt</h1>
            //         <div className='text2'>
            //             Easily Sign up and <span>validate</span> your property <span>contracts</span> and <span>manage</span> them later at no time
            //         </div>
            //         <NavLink to='/signin' style={{ textDecoration: 'none' }}><p className='moto'>Sign In</p></NavLink>
            //     </div>
            // </ div>

        );
    }
}

export default Data;