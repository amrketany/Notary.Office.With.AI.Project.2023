import React from 'react';
import axios from 'axios';
import img1 from '../../imags/data1.jpg';

class Test extends React.Component {

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }




    render() {

        let url = localStorage.getItem('contractImage');

        let file = this.dataURLtoFile(url, 'filename');
        console.log(file);


        let body = {
            "ownerId": "123456788",
            "governorate": "string",
            "city": "string",
            "district": "string",
            "buldingNum": 10,
            "apartmentNum": 30,
            "space": 200,
            "northernLimit": "string",
            "southernLimit": "string",
            "easternLimit": "string",
            "wasternLimit": "string"
        }

        let config = {

            headers: {
                'authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OTM0NTY3ODkyMkBOb3RhcnlPZmZpY2UuY29tIiwianRpIjoiYWZmNmNhYTUtYzdjMS00NWM1LTg0ZTktYzJiYzI1YzAyZWFhIiwiZW1haWwiOiJTdHJpbmcyMDI1QGdtYWlsLmNvbSIsInVpZCI6Ijk5MzQ1Njc4OTIyIiwicm9sZXMiOiJVc2VyIiwiZXhwIjoxNjg5MzY0NDkzLCJpc3MiOiJLaGFsZWQiLCJhdWQiOiJEb2N0b3JzIn0.y_FVfDjSHGa3qJKBOiI8xkhjoTbUYw44SjHeyh5Ez2k'

            }
        }

        let req = axios.post("http://notaryoffice-001-site1.ctempurl.com/api/Property", body, config);
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