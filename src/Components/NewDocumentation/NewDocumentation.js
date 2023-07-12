import React, { useEffect, useState } from "react";
import axios from "axios";
import App from '../App/App';

// import styles from "./../Services/Services.module.css";
import styles from "./NewDocumentation.module.css";
// import ph0 from "../../imags/ph0.jpg";
// import ph1 from "../../imags/ph1.jpg";
// import ph3 from "../../imags/ph2.jpg";
// import ph4 from "../../imags/ph3.jpg";
// import ph2 from "../../imags/ph4.jpg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const link = "https://rern.gov.eg/pages/requests/2";

const Services = (props) => {

  //Start Handel  Icons Change and Hide content
  let icondocContent, iconBuy, iconRental;
  const [stateIcondocContent, setstateIcondocContent] = useState(false);
  const [stateIconBuy, setstateIconBuy] = useState(false);
  const [stateIconRental, setstateIconRental] = useState(false);
  
  //stateIcondocContent
  if (stateIcondocContent === true) {
    icondocContent = faCaretDown;
  } else {
    icondocContent = faCaretRight;
  }
  //stateIconBuy
  if (stateIconBuy === true) {
    iconBuy = faCaretDown;
  } else {
    iconBuy = faCaretRight;
  }
  //stateIconRental
  if (stateIconRental === true) {
    iconRental = faCaretDown;
  } else {
    iconRental = faCaretRight;
  }
  //End Password Icons
  //..............................
  //Handel alert Liberary
  const alert = (data) => {
    Swal.fire(data)
  }
  //Navigate if login success
  const navigate = useNavigate();
  
  // //way 1 to upload file
  // const initialValues = { file: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [isSubmit, setIsSubmit] = useState(false);
  // const handelChange = (e) => {
  //   const { name, value } = e.target;
  //   //i-need-to-uderstand-it
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // }
  // //Function to handel Submit
  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmit(true);
  //   (handelApiSubmit())
  // }
  // //Handle Submit Api
  // const handelApiSubmit = () => {
  //   fetch("http://eslammamdouh.pythonanywhere.com/upload", {
  //     method: "POST",
  //     // headers: {
  //     //   'Content-Type':'multipart/form-data',
  //     // },
  //     body: JSON.stringify({
  //       file: formValues.file,
  //     })
  //   }).then((response) => response.json())
  //     .then((data) => {
  //       console.log(data, "userRegister");
  //       console.log(data.status);
  //       alert(data.message);
  //     })
  // }


  // //way 2 to upload file
//   const fileInput = document.querySelector('#uploadFile') ;
//   const formData = new FormData();
//   formData.append('file', fileInput.files[0]);

// const options = {
//   method: 'POST',
//   body: formData,
//   // If you add this, upload won't work
//   // headers: {
//   //   'Content-Type': 'multipart/form-data',
//   // }
// };
// fetch('http://eslammamdouh.pythonanywhere.com/upload', options);

//Try with Axios 4/7/2023
const [img, setImg] = useState('')
   const HandelChangeAxios = (e) => {
      console.log(e.target.files);
      setImg(e.target.files[0])
   }
   function handelSubmitAxios() {
      const formData = new FormData();
      formData.append("image", img);
      axios
        .post('http://eslammamdouh.pythonanywhere.com/scan', formData )
        .then((res) => {
          console.log(res.data);
          setImg('');
          return <App ContractData={res.data} />;
        });
      
   }
  


    // Method to fetch data from api and show it
    //0
    const [contract, setContract] = useState("");
    //1
    const getContracts = () => {
      fetch("http://notaryoffice-001-site1.ctempurl.com/api/Services")
        .then((resp) => resp.json())
        .then((data) => {
          setContract(data);
          console.log(data);
          
        });
    }
    //2
    useEffect(() => { getContracts() }, []);
    //End fetching data to show
    //............................................

    return (
      <div className={styles.Services}>
        {/* <div className={styles.info}>
        <h2>Documentation</h2>
        
        <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.
          over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.
        </p>
      </div> */}

        {/* Start-make-top-dowen-list */}
        <div className={styles.mainDocument}>
          <div className={styles.allContracts}>
            {/* //div 0 */}
            <div className={styles.docContent}>
              <button onClick={() => setstateIcondocContent(!stateIcondocContent)} className={styles.iconNewDocumentationbtn}>
                <FontAwesomeIcon icon={icondocContent} className={styles.iconNewDocumentation} />
              </button>
              <h2 className={styles.textDocContent}>Click To Choose Your Type Of Documentation</h2>
            </div>
            {/* // div 1 */}
            {stateIcondocContent &&
              <div className={styles.rentalAndbuy}>
                {/* // div 0 */}
                <div className={styles.lastSection}>
                  {/* // div 0 */}
                  <div className={styles.rental}>
                    <button onClick={() => setstateIconRental(!stateIconRental)} className={styles.iconNewDocumentationbtn}>
                      <FontAwesomeIcon icon={iconRental} className={styles.iconNewDocumentation} />
                    </button>
                    <h2 className={styles.textDocContent}>Documentation for Rental Contract</h2>
                  </div>
                  {/* // div 1 */}
                  {stateIconRental &&
                    <div className={styles.anyContract}>
                      {
                        contract.map((e) => {
                          return (
                            <div  className={styles.contractType}>
                              <div className={styles.divOne}>
                                <FontAwesomeIcon icon={faCircleArrowRight} className={styles.iconContractType} />
                                <h2 className={styles.textDocContent}>Contract For {e.serviceNameEn}</h2>
                              </div>
                              <div className={styles.divTwo}>
                                <a className={styles.fileLink} href={link} target="_blank" rel="noreferrer">Download Template</a>
                                {/* Start upload your file */}
                                <div key={e.id} className={styles.input_group} >
                                  <input onChange={HandelChangeAxios} type="file" id="uploadFile0" className={styles.form_control} placeholder="Upload Contract" name="file" />
                                  <button onClick={handelSubmitAxios} className={styles.uploadbtn} value="Scan" >Scan</button>
                                </div >
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                </div>
                {/* // div 1 */}
                <div className={styles.lastSection}>
                  {/* // div 0 */}
                  <div className={styles.buy}>
                    <button onClick={() => setstateIconBuy(!stateIconBuy)} className={styles.iconNewDocumentationbtn}>
                      <FontAwesomeIcon icon={iconBuy} className={styles.iconNewDocumentation} />
                    </button>
                    <h2 className={styles.textDocContent}>Documentation for Buy Contract</h2>
                  </div>
                  {/* // div 1 */}
                  {stateIconBuy &&
                    <div className={styles.anyContract}>
                      {
                        contract.map((e) => {
                          return (
                            <div key={e.id} className={styles.contractType}>
                              <div className={styles.divOne}>
                                <FontAwesomeIcon icon={faCircleArrowRight} className={styles.iconContractType} />
                                <h2 className={styles.textDocContent}>Contract For {e.serviceNameEn}</h2>
                              </div>
                              <div className={styles.divTwo}>
                                <a className={styles.fileLink} href={link} target="_blank" rel="noreferrer">Download Template</a>
                                {/* Start upload your file */}
                                <div key={e.id} className={styles.input_group} >
                                  <input onChange={HandelChangeAxios} type="file" id="uploadFile0" className={styles.form_control} placeholder="Upload Contract" name="file" />
                                  <button onClick={handelSubmitAxios} className={styles.uploadbtn} value="Scan" >Scan</button>
                                </div >
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </div>
        {/* // start Slider */}
        {/* Slider Work Only When Making Reload for all page  */}
        <div className={styles.sliderCountainer}>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" >
                <div className={styles.forBackgroundImage0}>
                  <div className={styles.forBackgroundColor}>
                    <div className={styles.sliderContent}>
                      <h2>All Veichles and Buildings Documentations</h2>
                      <p>We at Notary Office believe in high quality and exceptional customer service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item " >
                <div className={styles.forBackgroundImage1}>
                  <div className={styles.forBackgroundColor}>
                    <div className={styles.sliderContent}>
                      <h2>Rental any Building</h2>
                      <p>We belive in efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item " >
                <div className={styles.forBackgroundImage2}>
                  <div className={styles.forBackgroundColor}>
                    <div className={styles.sliderContent}>
                      <h2>Buy and Sell any Building</h2>
                      <p> regardless of where you are located</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item " >
                <div className={styles.forBackgroundImage3}>
                  <div className={styles.forBackgroundColor}>
                    <div className={styles.sliderContent}>
                      <h2>Buy and Sell any Veichle</h2>
                      <p>we strive to deliver the best products at the most affordable timeframes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item " >
                <div className={styles.forBackgroundImage4}>
                  <div className={styles.forBackgroundColor}>
                    <div className={styles.sliderContent}>
                      <h2>Rental any Veichle</h2>
                      <p>Validate your Property Contracts and Manage Them Later at no Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //End Slider */}
      </div>
    )
  }

  export default Services;
