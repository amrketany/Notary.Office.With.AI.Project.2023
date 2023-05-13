import React, { useState } from "react";
import styles from "./../Services/Services.module.css";
// import ph0 from "../../imags/ph0.jpg";
// import ph1 from "../../imags/ph1.jpg";
// import ph3 from "../../imags/ph2.jpg";
// import ph4 from "../../imags/ph3.jpg";
// import ph2 from "../../imags/ph4.jpg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';





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



  return (
    <div className={styles.Services}>
      <div className={styles.info}>
        <h2>Documentation</h2>
        <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.
          over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.
        </p>
      </div>
      {/* // start Slider */}
      <div className={styles.sliderCountainer}>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" >
              <div className={styles.forBackgroundImage0}>
                <div className={styles.forBackgroundColor}>
                  <div className={styles.sliderContent}>
                    <h2>All Machines and Buildings Services</h2>
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

      {/* Start-make-top-dowen-list */}
      <div className={styles.mainDocument}>
        <div className={styles.docContent}>
          <button onClick={() => setstateIcondocContent(!stateIcondocContent)}>
            <FontAwesomeIcon icon={icondocContent} className={styles.iconNewDocumentation} />
          </button>
          <h2 className={styles.sss}>Documentation</h2>
        </div>
        {stateIcondocContent &&
          <div className={styles.rentalAndbuy}>
            <div className={styles.rental}>
              <button onClick={() => setstateIconRental(!stateIconRental)}>
                <FontAwesomeIcon icon={iconRental} className={styles.iconNewDocumentation} />
              </button>
              <h2 className={styles.sss}>Rental</h2>
            </div>
            {  stateIconRental &&
              <div className={styles.rentalAndbuy}>
                <div className={styles.build}>
                  <h2 className={styles.sss}>Building</h2>
                </div>
                <div className={styles.veichle}>

                  <h2 className={styles.sss}>Veichle</h2>
                </div>
              </div>
            }

            <div className={styles.buy}>
              <button onClick={() => setstateIconBuy(!stateIconBuy)}>
                <FontAwesomeIcon icon={iconBuy} className={styles.iconNewDocumentation} />
              </button>
              <h2 className={styles.sss}>Buy</h2>
            </div>
            { stateIconBuy &&
              <div className={styles.buildAndVichele}>
                <div className={styles.builed}>
                  <h2 className={styles.sss}>Buileding</h2>
                </div>
                <div className={styles.viechle}>
                  <h2 className={styles.sss}>Veichle</h2>
                </div>
              </div>
            }
                  
          </div>
        }
        
      </div>
    </div>
  )
}
     export default Services;
