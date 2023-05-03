import { Component as comp } from 'react';
import './Icons.css';
import './css/all.min.css';

class Icon extends comp {
    render() {
        return (
            <div className='cont2'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
        );
    }
}

export default Icon;