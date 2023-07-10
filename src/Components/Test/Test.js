import React from 'react';
import axios from 'axios';
import img1 from '../../imags/data1.jpg';
import { img2 } from '../../imags/data2.jpg';
import { img3 } from '../../imags/data3.jpg';
class Test extends React.Component {


    render() {

        let headers = {
            image: img1,
        }

        let req = axios.get("http://eslammamdouh.pythonanywhere.com/ocr", { headers });
        req.then((res) => {
            console.log(res);
        })
        return (
            <div>
                <div className='uploader' id='uploader'>
                    <input type='file' />
                </div>
                <div className='image-holder' id='image-holder'>
                </div>
            </div>
        );
    }
}

export default Test;