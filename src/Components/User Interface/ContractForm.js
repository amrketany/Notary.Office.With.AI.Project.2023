import React from 'react';
import './ContractInfo.css';
//import axios from 'axios';


class ContractForm extends React.Component {

    state = {
        id: "",
        contractImage: "",
        startDate: "",
        endDate: "",
        monyAmount: "",
        type: "",
        creatorId: "",
        createDate: "",
        firstPartyId: "",
        secondPartyId: "",
        propertyId: "",
        vehicleId: "",
        creator: "",
        firstParty: "",
        property: "",
        secondParty: "",
        vehicle: ""

    }
    componentDidMount() {
        document.getElementById('preview-img').onclick = () => {
            localStorage.setItem('cvs', this.state.contractImageSrc);
            window.open('/#/Viewer', "_blank");
        }




        let data = {

            "Brand: ": "Audi",
            "Buyer Id: ": "12345678912349",
            "Buyer Name: ": "Ahmed",
            "Color: ": "Black",
            "Contract Type: ": "Sell",
            "Engine: ": "99Pro-X",
            "License End Date: ": "abc",
            "License Number: ": "444115222",
            "Model: ": "Clad",
            "Money Amount: ": "450000",
            "Sale Date: ": "abc",
            "Seller Id: ": "77744411122258",
            "Seller Name: ": "Samir",
            "VIN: ": "444115222"
        }

        this.setState({
            id: data["Buyer Id: "],
            // contractImageSrc: 'data:image/png;base64,' + contractData.contractImage,
            startDate: data["Sale Date: "],
            endDate: data["Contract Type: "] ? data["License End Date: "].split("T")[0] : "",
            monyAmount: data["Money Amount: "],
            type: data["Contract Type: "] ? "Rent" : "Sell",
            creatorId: "",
            createDate: data["Sale Date: "].split("T")[0],
            firstPartyId: data["Seller Id: "],
            secondPartyId: data["Buyer Id: "],
            propertyId: data.propertyId === null ? "" : data.propertyId,
            vehicleId: data.vehicalId === null ? "" : data.vehicalId,
            creator: data["creator"],
            firstParty: null,
            secondParty: null,
            propertyGovernorate: data.property,
            propertyCity: data.property,
            propertyDistrict: data.property,
            propertyBuildingNumber: data.property,
            propertyApartmentNumber: data.property,
            propertySpace: data.property,
            propertyNorth: data.property,
            propertySouth: data.property,
            propertyEast: data.property,
            propertyWest: data.property,
            vehicleLicence: data.vehical,
            vehicleEndData: data.vehical,
            vehicleBrand: data.vehical,
            vehicleModel: data.vehical,
            vehicleColor: data.vehical,
            vehicleEngine: data.vehical,

        });




    }

    render() {

        return (
            <div className='info-container'>
                <div className='info-container-inner'>
                    <div className='info-form'>

                        <div className='form-group'>
                            <label htmlFor="preview">Contract Preview:</label>
                            <div className='contract-preview' id='preview'>
                                <img src={this.state.contractImageSrc} alt="contract preview" id="preview-img" />
                            </div >
                        </div>

                        <div className='form-group'>
                            <label htmlFor="id">Contract ID:</label>
                            <input type="text" className="form-control" id="id" value={this.state.id} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="firstParty">First Party:</label>
                            <input type="text" className="form-control" id="firstParty" value={this.state.firstParty} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="secondParty">Second Party:</label>
                            <input type="text" className="form-control" id="secondParty" value={this.state.secondParty} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="firstPartyId">First Party ID:</label>
                            <input type="text" className="form-control" id="firstPartyId" value={this.state.firstPartyId} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="secondPartyId">Second Party ID:</label>
                            <input type="text" className="form-control" id="secondPartyId" value={this.state.secondPartyId} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="startDate">Start Data:</label>
                            <input type="text" className="form-control" id="startDate" value={this.state.startDate} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="endDate">End Date:</label>
                            <input type="text" className="form-control" id="endDate" value={this.state.endDate} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="moneyAmout">Money Amout:</label>
                            <input type="number" className="form-control" id="moneyAmout" value={this.state.monyAmount} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="type">Contract Type:</label>
                            <input type="text" className="form-control" id="type" value={this.state.type} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="creatorID">Creator ID:</label>
                            <input type="text" className="form-control" id="creatorID" value={this.state.creatorId} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="createDate">Creation Date:</label>
                            <input type="text" className="form-control" id="createDate" value={this.state.createDate} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="propertyId">Property ID:</label>
                            <input type="text" className="form-control" id="propertyId" value={this.state.propertyId} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="vehicleId">Vehicle ID:</label>
                            <input type="text" className="form-control" id="vehicleId" value={this.state.vehicleId} />
                        </div>

                        {/* <div className='form-group'>
                    <label htmlFor="creator">Contract Creator:</label>
                <input type="text" className="form-control" id="creator" value={this.state.creator}  /> */}
                        {/* </div>  */}

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Governorate:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyGovernorate} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property City:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyCity} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property District:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyDistrict} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Building Number:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyBuildingNumber} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Apartment Number:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyApartmentNumber} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Space:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertySpace} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property North Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyNorth} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property South Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertySouth} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property East Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyEast} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property West Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyWest} />
                        </div>

                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle License Number:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleLicence} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle License End Data:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleEndData} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Brand:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleBrand} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Model:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleModel} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Engine:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleEngine} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Color:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleColor} />
                        </div>

                    </div>
                </div>
            </div >
        );

    }
}

export default ContractForm;