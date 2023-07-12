import React from "react";
import styles from "./Services.module.css";
// import ph0 from "../../imags/ph0.jpg";
// import ph1 from "../../imags/ph1.jpg";
// import ph3 from "../../imags/ph2.jpg";
// import ph4 from "../../imags/ph3.jpg";
// import ph2 from "../../imags/ph4.jpg";
const Services = () => {
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
            <div id="carouselExampleSlidesOnly" classname="carousel slide" data-bs-ride="carousel">
               <div classname="carousel-inner">
                  <div classname="carousel-item active" >
                     <div className={styles.forBackgroundImage0}>
                        <div className={styles.forBackgroundColor}>
                           <div className={styles.sliderContent}>
                              <h2>All Machines and Buildings Services</h2>
                              <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div classname="carousel-item " >
                     <div className={styles.forBackgroundImage1}>
                        <div className={styles.forBackgroundColor}>
                           <div className={styles.sliderContent}>
                              <h2>Rental any Building</h2>
                              <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div classname="carousel-item " >
                     <div className={styles.forBackgroundImage2}>
                        <div className={styles.forBackgroundColor}>
                           <div className={styles.sliderContent}>
                              <h2>Buy and Sell any Building</h2>
                              <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div classname="carousel-item " >
                     <div className={styles.forBackgroundImage3}>
                        <div className={styles.forBackgroundColor}>
                           <div className={styles.sliderContent}>
                              <h2>Buy and Sell any Veichle</h2>
                              <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div classname="carousel-item " >
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


         <div className={styles.Service}>
            <h2>Veichle Services</h2>
            <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
            <div>
               <a href="/buysellmachine" className={styles.goServiceLink}>Buy and Sell any Veichle</a>
               <a href="/rentalmachine" className={styles.goServiceLink}>Rental any Veichle</a>
            </div>
         </div>
         <div className={styles.Service}>
            <h2>Buildings Services</h2>
            <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
            <div>
               <a href="/buysellbuilding" className={styles.goServiceLink}>Buy and Sell any Building</a>
               <a href="/rentalbuilding" className={styles.goServiceLink}>Rental any Building</a>
            </div>
         </div>
      </div>

   )
}
export default Services;


