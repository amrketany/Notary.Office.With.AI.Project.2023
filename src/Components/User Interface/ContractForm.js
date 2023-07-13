import React from 'react';
import './ContractForm.css';
import axios from 'axios';


class ContractForm extends React.Component {

    state = {
        local: "",
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




    handleClick(e) {
        // e.preventDefault()
        // let htmlFields = document.getElementsByClassName('form-control');
        // let TOKEN = localStorage.getItem("userToken");
        // let config = {
        //     headers: {
        //         "authorization": `bearer ${TOKEN}`,
        //     },
        // }






        // if (this.state.vehicleId !== "") {

        //     let body = {

        //         "vin": this.state.vehicleId,
        //         "ownerId": null,
        //         "licenseNum": this.state.licenseNum,
        //         "licenseEndDate": this.state.licenseEndDate,
        //         "brand": this.state.brand,
        //         "engine": this.state.engine,
        //         "color": this.state.color,
        //         "modle": this.state.modle,

        //     };


        //     let addVehicle = axios.post('http://notaryoffice-001-site1.ctempurl.com/api/Vehical', body, config);
        //     addVehicle.then((R) => { console.log(R) });

        // }
        // else if (this.state.propertyCity !== "") {

        //     let body = {
        //         "ownerId": null,
        //         "governorate": this.state.propertyGovernorate,
        //         "city": this.state.propertyCity,
        //         "district": this.state.propertyDistrict,
        //         "buldingNum": this.state.propertyBuildingNumber,
        //         "apartmentNum": this.state.propertyApartmentNumber,
        //         "space": this.state.propertySpace,
        //         "northernLimit": this.state.propertyNorth,
        //         "southernLimit": this.state.propertySouth,
        //         "easternLimit": this.state.propertyEast,
        //         "wasternLimit": this.state.propertyWest
        //     };




        //     let addProperty = axios.post("http://notaryoffice-001-site1.ctempurl.com/api/Property", body, config);
        //     addProperty.then((R) => { console.log(R) });

        // }
        // let typeValue;
        // if (htmlFields[8].value.toLowerCase() === "Rent".toLowerCase()) {
        //     typeValue = true;
        // } else if (htmlFields[8].value.toLowerCase() === "Sell".toLowerCase()) {
        //     typeValue = false;
        // }



        // let body = {
        //     contractImage: this.state.local,
        //     startDate: this.state.startDate,
        //     endDate: this.state.endDate,
        //     monyAmount: this.state.monyAmount,
        //     type: typeValue ? true : false,
        //     firstPartyId: this.state.firstPartyId,
        //     secondPartyId: this.state.secondPartyId
        // }

        // console.log("body", body);
        // console.log("config", config);
        // console.log("state", this.state);

        // // let addContract = fetch("http://notaryoffice-001-site1.ctempurl.com/api/Contract", {
        // //     method: "POST",
        // //     headers: {
        // //         "authorization": config.headers.authorization,
        // //     },
        // //     body: body
        // // });



        // let addContract = axios({
        //     url: 'http://notaryoffice-001-site1.ctempurl.com/api/Contract',
        //     method: 'POST',
        //     headers: {
        //         authorization: `bearer ${TOKEN}`,
        //     },
        //     data: {
        //         body
        //     }
        // });

        // addContract.then((res) => {
        //     console.log(res.data);
        // });




    }
    componentDidMount() {

        // this.setState({
        //     startDate: localStorage.getItem('startDate'),
        //     endDate: localStorage.getItem('endDate'),
        //     monyAmount: localStorage.getItem('moneyAmout'),
        //     type: localStorage.getItem('type'),
        //     firstPartyId: localStorage.getItem('firstPartyId'),
        //     secondPartyId: localStorage.getItem('secondPartyId'),
        //     propertyId: localStorage.getItem('propertyId'),
        //     vehicleId: localStorage.getItem('vehicleId'),
        //     firstParty: localStorage.getItem('firstParty'),
        //     secondParty: localStorage.getItem('secondParty'),
        //     propertyGovernorate: localStorage.getItem('propertyGovernorate'),
        //     propertyCity: localStorage.getItem('propertyCity'),
        //     propertyDistrict: localStorage.getItem('propertyDistrict'),
        //     propertyBuildingNumber: localStorage.getItem('propertyBuildingNumber'),
        //     propertyApartmentNumber: localStorage.getItem('propertyApartmentNumbertmentNum'),
        //     propertySpace: localStorage.getItem('propertySpace'),
        //     propertyNorth: localStorage.getItem('propertyNorth'),
        //     propertySouth: localStorage.getItem('propertySouth'),
        //     propertyEast: localStorage.getItem('propertyEast'),
        //     propertyWest: localStorage.getItem('propertyWest'),
        //     vehicleLicence: localStorage.getItem('vehicleLicence'),
        //     vehicleEndData: localStorage.getItem('vehicleEndData'),
        //     vehicleBrand: localStorage.getItem('vehicleBrand'),
        //     vehicleModel: localStorage.getItem('vehicleModel'),
        //     vehicleColor: localStorage.getItem('vehicleColor'),
        //     vehicleEngine: localStorage.getItem('vehicleEngine'),

        // });



        // this.setState({
        //     creatorId: this.state.secondPartyId,
        // });

        this.forceUpdate();


        document.getElementById('floc').addEventListener('change', (e) => {
            this.setState({
                local: e.target.files[0]
            });
        });

        document.getElementById('preview-img').onclick = () => {
            localStorage.setItem('cvs', this.state.contractImageSrc);
            window.open('/#/Viewer', "_blank");
        }


        let token = localStorage.getItem("userToken");
        let headers = {
            "authorization": `bearer ${token}`,
        }

        console.log("state", this.state);
        console.log("look in local storage");

    }

    render() {

        return (
            <div className='form-container'>
                <div className='form-container-inner'>
                    <div className='form-form'>

                        <input type='file' id="floc" />

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
                            <button type="button" className="btn btn-primary btn-block" onClick={(e) => (this.handleClick(e))} >Save Changes</button>
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