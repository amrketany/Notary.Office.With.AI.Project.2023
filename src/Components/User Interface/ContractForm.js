import React from 'react';
import './ContractForm.css';
import axios from 'axios';


class ContractForm extends React.Component {

    state = {
        id: "",
        contractImageSrc: localStorage.getItem("contractImage"),
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
        secondParty: "",
        propertyGovernorate: "",
        propertyCity: "",
        propertyDistrict: "",
        propertyBuildingNumber: "",
        propertyApartmentNumber: "",
        propertySpace: "",
        propertyNorth: "",
        propertySouth: "",
        propertyEast: "",
        propertyWest: "",
        vehicleLicence: "",
        vehicleEndData: "",
        vehicleBrand: "",
        vehicleModel: "",
        vehicleColor: "",
        vehicleEngine: "",

    }

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }



    handleClick() {
        let htmlFields = document.getElementsByClassName('form-control');
        let TOKEN = localStorage.getItem("userToken");
        let config = {
            headers: {
                "authorization": `bearer ${TOKEN}`,
            },
        }


        if (htmlFields[12].value !== "") {

            let body = {

                "vin": htmlFields[12].value,
                "ownerId": htmlFields[9].value,
                "licenseNum": htmlFields[12].value,
                "licenseEndDate": htmlFields[7].value,
                "brand": htmlFields[25].value,
                "engine": htmlFields[27].value,
                "color": htmlFields[28].value,
                "modle": htmlFields[26].value,

            };


            let addVehicle = axios.post('http://notaryoffice-001-site1.ctempurl.com/api/Vehical', body, config);
            addVehicle.then((R) => { console.log(R) });

        }
        else if (htmlFields[14].value !== "") {

            let body = {
                "ownerId": htmlFields[9].value,
                "governorate": htmlFields[13].value,
                "city": htmlFields[14].value,
                "district": htmlFields[15].value,
                "buldingNum": htmlFields[16].value,
                "apartmentNum": htmlFields[17].value,
                "space": htmlFields[18].value,
                "northernLimit": htmlFields[19].value,
                "southernLimit": htmlFields[20].value,
                "easternLimit": htmlFields[21].value,
                "wasternLimit": htmlFields[22].value
            };




            let addProperty = axios.post("http://notaryoffice-001-site1.ctempurl.com/api/Property", body, config);
            addProperty.then((R) => { console.log(R) });

        }
        let typeValue;
        if (htmlFields[8].value.toLowerCase() === "Rent".toLowerCase()) {
            typeValue = true;
        } else if (htmlFields[8].value.toLowerCase() === "Sell".toLowerCase()) {
            typeValue = false;
        }



        let body = {
            contractImage: this.state.contractImageSrc.split("base64,")[1],
            startDate: htmlFields[5].value,
            endDate: htmlFields[6].value,
            monyAmount: htmlFields[7].value,
            type: typeValue,
            firstPartyId: htmlFields[3].value,
            secondPartyId: htmlFields[4].value
        }

        console.log(body);
        console.log(config);

        let addContract = axios.post('http://notaryoffice-001-site1.ctempurl.com/api/Contract', body, config);
        addContract.then((res) => {
            console.log(res.data);
        });




    }
    componentDidMount() {

        document.getElementById('preview-img').onclick = () => {
            localStorage.setItem('cvs', this.state.contractImageSrc);
            window.open('/#/Viewer', "_blank");
        }
        let AIData = {
            "Brand: ": "",
            "Buyer Id: ": "",
            "Buyer Name: ": "",
            "Color: ": "",
            "Contract Type: ": "",
            "Engine: ": "",
            "License End Date: ": "",
            "License Number: ": "",
            "Model: ": "",
            "Money Amount: ": "",
            "Sale Date: ": "",
            "Seller Id: ": "",
            "Seller Name: ": "",
            "VIN: ": ""
        };

        for (let x = 0; x < localStorage.getItem("AIData-number"); x++) {

            AIData[`${Object.keys(AIData)[x]}`] = localStorage.getItem(`AIData-${x}`);
        }

        let data = {

            "Brand: ": "",
            "Buyer Id: ": "",
            "Buyer Name: ": "",
            "Color: ": "",
            "Contract Type: ": "",
            "Engine: ": "",
            "License End Date: ": "",
            "License Number: ": "",
            "Model: ": "",
            "Money Amount: ": "",
            "Sale Date: ": "",
            "Seller Id: ": "",
            "Seller Name: ": "",
            "VIN: ": ""
        }

        this.setState({
            contractImageSrc: 'data:image/png;base64,' + localStorage.getItem("contractImage"),
            startDate: data['Sale Date: '],
            monyAmount: data['Money Amount: '],
            type: data['Contract Type: '],
            firstPartyId: data['Seller Id: '],
            secondPartyId: data['Buyer Id: '],
            firstParty: data['Seller Name: '],
            secondParty: data['Buyer Name: '],
            vehicleLicence: data['License Number: '],
            vehicleEndData: data['License End Date: '],
            vehicleBrand: data['Brand: '],
            vehicleModel: data['Model: '],
            vehicleColor: data['Color: '],
            vehicleEngine: data['Engine: '],
        });

        let token = localStorage.getItem("userToken");
        let headers = {
            "authorization": `bearer ${token}`,
        }




        let gettingCurrentUser = axios.get("http://notaryoffice-001-site1.ctempurl.com/Api/Visitors/GetCurrentlyUser", { headers })
        gettingCurrentUser.then((res) => {
            this.setState({
                creatorId: res.data.id,
                creator: res.data.name,

            });
        })


        if (data['VIN: '] === "") {

            this.setState({
                vehicleId: data['VIN: '],
            });
        }
        else {
            this.setState({
                propertyId: data['property ID'],

            })

        }



    }

    render() {

        return (
            <div className='form-container'>
                <div className='form-container-inner'>
                    <div className='form-form'>

                        <div className='form-group'>
                            <label htmlFor="preview">Contract Preview:</label>
                            <div className='contract-preview' id='preview'>
                                <img src={this.state.contractImageSrc} alt="contract preview" id="preview-img" />
                            </div >
                        </div>

                        <div className='form-group'>
                            <label htmlFor="id">Contract ID:</label>
                            <input type="text" className="form-control" id="id" defaultValue={this.state.id} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="firstParty">First Party:</label>
                            <input type="text" className="form-control" id="firstParty" defaultValue={this.state.firstParty} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="secondParty">Second Party:</label>
                            <input type="text" className="form-control" id="secondParty" defaultValue={this.state.secondParty} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="firstPartyId">First Party ID:</label>
                            <input type="text" className="form-control" id="firstPartyId" defaultValue={this.state.firstPartyId} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="secondPartyId">Second Party ID:</label>
                            <input type="text" className="form-control" id="secondPartyId" defaultValue={this.state.secondPartyId} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="startDate">Start Data:</label>
                            <input type="text" className="form-control" id="startDate" defaultValue={this.state.startDate} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="endDate">End Date:</label>
                            <input type="text" className="form-control" id="endDate" defaultValue={this.state.endDate} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="moneyAmout">Money Amout:</label>
                            <input type="number" className="form-control" id="moneyAmout" defaultValue={this.state.monyAmount} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="type">Contract Type:</label>
                            <input type="text" className="form-control" id="type" defaultValue={this.state.type} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="creatorID">Creator ID:</label>
                            <input type="text" className="form-control" id="creatorID" defaultValue={this.state.creatorId} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="createDate">Creation Date:</label>
                            <input type="text" className="form-control" id="createDate" defaultValue={this.state.createDate} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="propertyId">Property ID:</label>
                            <input type="text" className="form-control" id="propertyId" defaultValue={this.state.propertyId} disabled />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="vehicleId">Vehicle ID:</label>
                            <input type="text" className="form-control" id="vehicleId" defaultValue={this.state.vehicleId} />
                        </div>

                        {/* <div className='form-group'>
                    <label htmlFor="creator">Contract Creator:</label>
                <input type="text" className="form-control" id="creator" defaultValue={this.state.creator}  /> */}
                        {/* </div>  */}

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Governorate:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyGovernorate} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property City:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyCity} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property District:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyDistrict} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Building Number:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyBuildingNumber} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Apartment Number:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyApartmentNumber} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property Space:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertySpace} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property North Limit:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyNorth} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property South Limit:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertySouth} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property East Limit:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyEast} />
                        </div>

                        <div className='form-group property-field'>
                            <label htmlFor="property">Property West Limit:</label>
                            <input type="text" className="form-control" id="property" defaultValue={this.state.propertyWest} />
                        </div>

                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle License Number:</label>
                            <input type="text" className="form-control" id="vehicle" defaultValue={this.state.vehicleLicence} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle License End Data:</label>
                            <input type="text" className="form-control" id="vehicle" defaultValue={this.state.vehicleEndData} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Brand:</label>
                            <input type="text" className="form-control" id="vehicle" defaultValue={this.state.vehicleBrand} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Model:</label>
                            <input type="text" className="form-control" id="vehicle" defaultValue={this.state.vehicleModel} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Engine:</label>
                            <input type="text" className="form-control" id="vehicle" defaultValue={this.state.vehicleEngine} />
                        </div>
                        <div className='form-group vehicle-field'>
                            <label htmlFor="vehicle">Vehicle Color:</label>
                            <input type="text" className="form-control" id="vehicle" defaultValue={this.state.vehicleColor} />
                        </div>

                        <div className='form-group'>
                            <button type="button" className="btn btn-primary btn-block" onClick={() => (this.handleClick())} >Save Changes</button>
                        </div>

                        <div className='form-group'>
                            <button type="button" className="btn btn-default btn-block">Cancel</button>
                        </div>

                    </div>
                </div>
            </div >
        );

    }
}

export default ContractForm;