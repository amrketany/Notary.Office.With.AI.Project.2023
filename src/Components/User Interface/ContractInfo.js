import React from 'react';
import './ContractInfo.css';
import axios from 'axios';


class ContractInfo extends React.Component {

    state = {
        id: "Loading",
        contractImage: "Loading",
        startDate: "Loading",
        endDate: "Loading",
        monyAmount: "Loading",
        type: "Loading",
        creatorId: "Loading",
        createDate: "Loading",
        firstPartyId: "Loading",
        secondPartyId: "Loading",
        propertyId: "Loading",
        vehicleId: "Loading",
        creator: "Loading",
        firstParty: "Loading",
        property: "Loading",
        secondParty: "Loading",
        vehicle: "Loading"

    }
    componentDidMount() {
        document.getElementById('preview-img').onclick = () => {
            localStorage.setItem('cvs', this.state.contractImageSrc);
            window.open('/#/Viewer', "_blank");
        }
    }

    render() {
        let ccid = localStorage.getItem('ccid');
        console.log("ccid");
        console.log(ccid);

        let TOKEN = localStorage.getItem("userToken");
        let headers = {
            "authorization": `bearer ${TOKEN}`,
        }


        let getContractData = axios.get("http://NotaryOfficeProject.somee.com/api/Contract/" + ccid, { headers });

        getContractData.then((response) => {
            console.log(response.data);
            let contractData = response.data;

            axios.get("http://NotaryOfficeProject.somee.com/api/Visitors/" + contractData.firstPartyId).then((R) => { this.setState({ firstParty: R.data.name }); });
            axios.get("http://NotaryOfficeProject.somee.com/api/Visitors/" + contractData.secondPartyId).then((R) => { this.setState({ secondParty: R.data.name }); });
            this.setState({ type: contractData.type ? "Rent" : "Sell", endDate: contractData.type ? contractData.endDate : "" });

            if (contractData.propertyId != null) {
                console.log("FROM PROPERT CHECK");
                console.log(contractData.propertyId != null);
                console.log(contractData.propertyId);
                let fields = document.querySelectorAll(".property-field");
                for (let x = 0; x < fields.length; x++) { fields[x].classList.add("show"); }
                axios.get("http://NotaryOfficeProject.somee.com/api/Property/" + contractData.propertyId, { headers }).then((R) => { this.setState({ propertyGovernorate: R.data.governorate, propertyCity: R.data.city, propertyDistrict: R.data.district, propertyBuildingNumber: R.data.buldingNum, propertyApartmentNumber: R.data.apartmentNum, propertySpace: R.data.space, propertyNorth: R.data.northernLimit, propertySouth: R.data.southernLimit, propertyEast: R.data.easternLimit, propertyWest: R.data.wasterLimit, }); });

            }
            else if (contractData.vehicalId !== null) {
                console.log("FROM VCL CHECK");
                console.log(contractData.vehicalId != null);
                console.log(contractData.vehicalID);
                let fields = document.querySelectorAll(".vehicle-field");
                console.log(fields);
                for (let x = 0; x < fields.length; x++) { fields[x].classList.add("show"); console.log("Showing Field: " + x) }
                axios.get("http://NotaryOfficeProject.somee.com/api/Vehical/" + contractData.vehicalId, { headers }).then((R) => { this.setState({ vehicalLicence: R.data.licenseNum, vehicalEndData: R.data.licenseEndDate, vehicalBrand: R.data.brand, vehicalColor: R.data.color, vehicalEngine: R.data.engine, vehicalModel: R.data.modle, }); });

            }

            this.setState({
                id: contractData.id,
                contractImageSrc: 'data:image/png;base64,' + contractData.contractImage,
                startDate: contractData.startDate.split("T")[0],
                endDate: contractData.type ? contractData.endDate.split("T")[0] : "",
                monyAmount: contractData.monyAmount,
                type: contractData.type ? "Rent" : "Sell",
                creatorId: contractData.creatorId,
                createDate: contractData.createDate.split("T")[0],
                firstPartyId: contractData.firstPartyId,
                secondPartyId: contractData.secondPartyId,
                propertyId: contractData.propertyId === null ? "" : contractData.propertyId,
                vehicleId: contractData.vehicalId === null ? "" : contractData.vehicalId,
                creator: contractData.creator,
                firstParty: null,
                secondParty: null,
                propertyGovernorate: contractData.property,
                propertyCity: contractData.property,
                propertyDistrict: contractData.property,
                propertyBuildingNumber: contractData.property,
                propertyApartmentNumber: contractData.property,
                propertySpace: contractData.property,
                propertyNorth: contractData.property,
                propertySouth: contractData.property,
                propertyEast: contractData.property,
                propertyWest: contractData.property,
                vehicleLicence: contractData.vehical,
                vehicleEndData: contractData.vehical,
                vehicleBrand: contractData.vehical,
                vehicleModel: contractData.vehical,
                vehicleColor: contractData.vehical,
                vehicleEngine: contractData.vehical,
            });
        });
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
                            <input type="text" className="form-control" id="id" value={this.state.id} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="firstParty">First Party:</label>
                            <input type="text" className="form-control" id="firstParty" value={this.state.firstParty} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="secondParty">Second Party:</label>
                            <input type="text" className="form-control" id="secondParty" value={this.state.secondParty} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="firstPartyId">First Party ID:</label>
                            <input type="text" className="form-control" id="firstPartyId" value={this.state.firstPartyId} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="secondPartyId">Second Party ID:</label>
                            <input type="text" className="form-control" id="secondPartyId" value={this.state.secondPartyId} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="startDate">Start Data:</label>
                            <input type="text" className="form-control" id="startDate" value={this.state.startDate} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="endDate">End Date:</label>
                            <input type="text" className="form-control" id="endDate" value={this.state.endDate} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="moneyAmout">Money Amout:</label>
                            <input type="number" className="form-control" id="moneyAmout" value={this.state.monyAmount} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="type">Contract Type:</label>
                            <input type="text" className="form-control" id="type" value={this.state.type} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="creatorID">Creator ID:</label>
                            <input type="text" className="form-control" id="creatorID" value={this.state.creatorId} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="createDate">Creation Date:</label>
                            <input type="text" className="form-control" id="createDate" value={this.state.createDate} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="propertyId">Property ID:</label>
                            <input type="text" className="form-control" id="propertyId" value={this.state.propertyId} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="vehicleId">Vehicle ID:</label>
                            <input type="text" className="form-control" id="vehicleId" value={this.state.vehicleId} disabled />
                        </div>

                        {/* <div className='form-group'>
                    <label htmlFor="creator">Contract Creator:</label>
                <input type="text" className="form-control" id="creator" value={this.state.creator} disabled /> */}
                        {/* </div>  */}

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Governorate:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyGovernorate} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property City:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyCity} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property District:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyDistrict} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Building Number:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyBuildingNumber} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Apartment Number:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyApartmentNumber} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Space:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertySpace} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property North Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyNorth} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property South Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertySouth} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property East Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyEast} disabled />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property West Limit:</label>
                            <input type="text" className="form-control" id="property" value={this.state.propertyWest} disabled />
                        </div>

                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle License Number:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleLicence} disabled />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle License End Data:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleEndData} disabled />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Brand:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleBrand} disabled />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Model:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleModel} disabled />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Engine:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleEngine} disabled />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Color:</label>
                            <input type="text" className="form-control" id="vehicle" value={this.state.vehicleColor} disabled />
                        </div>

                    </div>
                </div>
            </div >
        );

    }
}

export default ContractInfo;