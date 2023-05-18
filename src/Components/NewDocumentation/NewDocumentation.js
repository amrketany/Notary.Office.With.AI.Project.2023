import React, { useEffect, useState } from "react";
import styles from "./../Services/Services.module.css";
// import ph0 from "../../imags/ph0.jpg";
// import ph1 from "../../imags/ph1.jpg";
// import ph3 from "../../imags/ph2.jpg";
// import ph4 from "../../imags/ph3.jpg";
// import ph2 from "../../imags/ph4.jpg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const link = "https://rern.gov.eg/pages/requests/2";




const Services = () => {

 //Start Handel  Icons Change and Hide content
  let icondocContent , iconBuy , iconRental;
  const [stateIcondocContent, setstateIcondocContent] = useState(false);
  const [stateIconBuy, setstateIconBuy] = useState(false);
  const [stateIconRental, setstateIconRental] = useState(false);
  
  //stateIcondocContent
  if (stateIcondocContent === true) {
    icondocContent = faCaretDown;
  } else {
    icondocContent =  faCaretRight;
  }
  //stateIconBuy
  if (stateIconBuy === true) {
    iconBuy = faCaretDown;
  } else {
    iconBuy =  faCaretRight;
  }
  //stateIconRental
  if (stateIconRental === true) {
    iconRental = faCaretDown;
  } else {
    iconRental =  faCaretRight;
  }
   //End Password Icons
  //..............................

  // Method to fetch data from api and show it
  //0
  const [contract, setContract] = useState("");
  //1
   const getContracts = () => {
   fetch("http://notaryofficeproject.somee.com/api/Services")
   .then((resp) => resp.json())
   .then((data) => setContract(data));
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
                          <div key={e.id} className={styles.contractType}>
                            <div className={styles.divOne}>
                              <FontAwesomeIcon icon={faCircleArrowRight} className={styles.iconContractType} />
                              <h2 className={styles.textDocContent}>Contract For {e.serviceNameEn}</h2>
                            </div>
                            <div className={styles.divTwo}>
                              <a className={styles.fileLink} href={link} target="_blank" rel="noreferrer">Get File</a>
                              {/* Start upload your file */}
                              <div className={styles.input_group}>
                                <input type="file" className={styles.form_control} placeholder="Choose File" name="file"  />
                                <button className={styles.uploadbtn}>Submit</button>
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
                              <a className={styles.fileLink} href={link} target="_blank" rel="noreferrer">Get File</a>
                              {/* Start upload your file */}
                              <div className={styles.input_group}>
                                <input type="file" className={styles.form_control} placeholder="Choose File" name="file"  />
                                <button className={styles.uploadbtn}>Submit</button>
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
      <div className={styles.sliderCountainer}>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" >
              <div className={styles.forBackgroundImage0}>
                <div className={styles.forBackgroundColor}>
                  <div className={styles.sliderContent}>
                    <h2>All Machines and Buildings Documentations</h2>
                    <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item " >
              <div className={styles.forBackgroundImage1}>
                <div className={styles.forBackgroundColor}>
                  <div className={styles.sliderContent}>
                    <h2>Rental any Building</h2>
                    <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item " >
              <div className={styles.forBackgroundImage2}>
                <div className={styles.forBackgroundColor}>
                  <div className={styles.sliderContent}>
                    <h2>Buy and Sell any Building</h2>
                    <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item " >
              <div className={styles.forBackgroundImage3}>
                <div className={styles.forBackgroundColor}>
                  <div className={styles.sliderContent}>
                    <h2>Buy and Sell any Veichle</h2>
                    <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item " >
              <div className={styles.forBackgroundImage4}>
                <div className={styles.forBackgroundColor}>
                  <div className={styles.sliderContent}>
                    <h2>Rental any Veichle</h2>
                    <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
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
