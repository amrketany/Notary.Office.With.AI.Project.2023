import React from 'react';
class Viewer extends React.Component {

    componentDidMount() {
        document.getElementById('viewer').style.width = "100vw";
        document.getElementById('viewer').style.height = "86vh";
    }

    render() {
        return (
            <img src={localStorage.getItem('cvs')} alt="contract preview" id="viewer" />
        );

    }

}
export default Viewer;