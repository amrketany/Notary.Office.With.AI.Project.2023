import React from 'react';
import image from './images/notary-public1.jpg';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Data extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <img alt='' src={image} />
                <div className="text1">
                    <h1>Notary Office of Egypt</h1>
                    <div className='text2'>
                        Easily Sign up and <span>validate</span> your property <span>contracts</span> and <span>manage</span> them later at no time
                    </div>
                    <NavLink to='/signUp' style={{ textDecoration: 'none' }}><p className='moto'>Sign Up</p></NavLink>
                </div>
            </ div>

        );
    }
}

export default Data;