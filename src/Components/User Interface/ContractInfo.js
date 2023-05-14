import React from 'react';
import './ContractInfo.css';
import cp from "./cp.png";


class ContractInfo extends React.Component {

    state = {
        id: null,
        contractImage: null,
        startDate: null,
        endDate: null,
        monyAmount: null,
        type: null,
        creatorId: null,
        createDate: null,
        firstPartyId: null,
        secondPartyId: null,
        propertyId: null,
        vehicalId: null,
        creator: null,
        firstParty: null,
        property: null,
        secondParty: null,
        vehical: null

    }
    componentDidMount() {
        document.getElementById('preview').onclick = () => {
            window.open(cp, "_blank");
        }

    }

    render() {

        let gettingData = new Promise((res, rej) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://www.notaryoffice2023.somee.com/api/Contract");
            request.send();
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    res(request);
                }
                else if (request.readyState === 4 && request.status !== 200) {
                    rej();
                }
            };
        });

        gettingData.then((request) => {
            let contractData = JSON.parse(request.responseText)[0];
            this.setState({
                id: contractData.id,
                contractImage: contractData.contractImage,
                startDate: contractData.startDate,
                endDate: contractData.endDate,
                monyAmount: contractData.monyAmount,
                type: contractData.type,
                creatorId: contractData.creatorId,
                createDate: contractData.createDate,
                firstPartyId: contractData.firstPartyId,
                secondPartyId: contractData.secondPartyId,
                propertyId: contractData.propertyId,
                vehicalId: contractData.vehicalId,
                creator: contractData.creator,
                firstParty: contractData.firstParty,
                property: contractData.property,
                secondParty: contractData.secondParty,
                vehical: contractData.vehical,

            });


        });



        return (
            <div className='info-container'>
                <div className='info-form'>

                    <label htmlFor="preview">Contract Preview:</label>
                    <div className='contract-preview' id='preview'>
                        <img src={cp} alt="contract preview" />
                    </div >

                    <label htmlFor="id">Contract ID:</label>
                    <input type="text" className="form-control" id="id" value={this.state.id} disabled />

                    <label htmlFor="startDate">Start Data:</label>
                    <input type="text" className="form-control" id="startDate" value={this.state.startDate} disabled />

                    <label htmlFor="endDate">End Date:</label>
                    <input type="text" className="form-control" id="endDate" value={this.state.endDate} disabled />

                    <label htmlFor="moneyAmout">Money Amout:</label>
                    <input type="number" className="form-control" id="moneyAmout" value={this.state.monyAmount} disabled />

                    <label htmlFor="type">Contract Type:</label>
                    <input type="email" className="form-control" id="type" value={this.state.type} disabled />

                    <label htmlFor="creatorID">Creator ID:</label>
                    <input type="text" className="form-control" id="creatorID" value={this.state.creatorId} disabled />

                    <label htmlFor="createDate">Creation Date:</label>
                    <input type="text" className="form-control" id="createDate" value={this.state.createDate} disabled />

                    <label htmlFor="firstPartyId">First Party ID:</label>
                    <input type="text" className="form-control" id="firstPartyId" value={this.state.firstPartyId} disabled />

                    <label htmlFor="secondPartyId">Second Party ID:</label>
                    <input type="text" className="form-control" id="secondPartyId" value={this.state.secondPartyId} disabled />

                    <label htmlFor="propertyId">Property ID:</label>
                    <input type="text" className="form-control" id="propertyId" value={this.state.propertyId} disabled />

                    <label htmlFor="vehicleId">Vehicle ID:</label>
                    <input type="text" className="form-control" id="vehicleId" value={this.state.vehicalId} disabled />

                    <label htmlFor="creator">Contract Creator:</label>
                    <input type="text" className="form-control" id="creator" value={this.state.creator} disabled />

                    <label htmlFor="firstParty">First Party:</label>
                    <input type="text" className="form-control" id="firstParty" value={this.state.firstParty} disabled />

                    <label htmlFor="secondParty">Second Party:</label>
                    <input type="text" className="form-control" id="secondParty" value={this.state.secondParty} disabled />

                    <label htmlFor="property">Property:</label>
                    <input type="text" className="form-control" id="property" value={this.state.property} disabled />

                    <label htmlFor="vehicle">Vehicle:</label>
                    <input type="text" className="form-control" id="vehicle" value={this.state.vehical} disabled />

                </div>
            </div>
        );

    }
}

export default ContractInfo;