import React from 'react';
class Test extends React.Component {


    render() {
        let imageSrc = 'data:image/png;base64,' + byteArray;
        console.log("Image is here!");
        return (
            <div className='image-holder' id='image-holder'>
                <img src={imageSrc} />
            </div>
        );
    }
}

export default Test;