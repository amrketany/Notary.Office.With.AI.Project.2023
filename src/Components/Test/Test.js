import React from 'react';
import axios from 'axios';
import img1 from '../../imags/data1.jpg';

class Test extends React.Component {

    convertBase64ToImageFile(base64Url) {
        // Remove data:image/png;base64, from base64 URL
        const base64Data = base64Url.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

        // Convert base64 to byte array
        const byteCharacters = atob(base64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
            const slice = byteCharacters.slice(offset, offset + 1024);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        // Create Blob from byte arrays
        const blob = new Blob(byteArrays, { type: 'image/png' });

        // Create File object from Blob
        const file = new File([blob], 'image.png', { type: 'image/png' });

        return file;
    }


    render() {

        let url = localStorage.getItem('contractImage');

        let file = this.convertBase64ToImageFile(url,);
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