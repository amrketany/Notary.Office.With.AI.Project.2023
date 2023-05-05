import { Component as comp } from 'react';
import './Icons.css';
import './css/all.min.css';

class Icon extends comp {

    componentDidMount() {
        document.getElementsByClassName('fa-facebook')[0].onclick = () => {
            window.location.href = "https://www.facebook.com";
        }
        document.getElementsByClassName('fa-instagram')[0].onclick = () => {
            window.location.href = "https://www.instagram.com";
        }
        document.getElementsByClassName('fa-youtube')[0].onclick = () => {
            window.location.href = "https://www.youtube.com";
        }
        document.getElementsByClassName('fa-twitter')[0].onclick = () => {
            window.location.href = "https://www.twitter.com";
        }
        document.getElementsByClassName('fa-pinterest')[0].onclick = () => {
            window.location.href = "https://www.pinterest.com";
        }
        document.getElementsByClassName('fa-linkedin')[0].onclick = () => {
            window.location.href = "https://www.linkedin.com";
        }
    }
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