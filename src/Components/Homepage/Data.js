import React from 'react';
import image from './images/notary-public1.jpg';
class Data extends React.Component {
    render() {
        return (
            <div className='cont'>
                <img alt='' src={image} />
                <div className="text1">
                    <h1>Notary Office of Egypt</h1>
                    <div className='text2'>
                        Easily Sign up and <span>validate</span> your property <span>contracts</span> and <span>manage</span> them later at no time
                    </div>
                    <p className='moto'>Sign Up</p>
                </div>
            </ div>

        );
    }
}

export default Data;