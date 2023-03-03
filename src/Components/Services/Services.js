import React from "react";
import styles from "./Services.module.css";
const Services = () => {
   return (
      <div className={styles.Services}>
         <div className={styles.info}>
         <h2>Services</h2>
            <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.
            over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.
            </p>
         </div>
         <div className={styles.Service }>
            <h2>Machine Services</h2>
            <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
            <div>
               <a href="/buysellmachine">Buy_and_Sell_any_Machine</a>
               <a href="/rentalmachine">Rental_any_Machine</a>   
            </div>
         </div>
         <div className={styles.Service}>
            <h2>Buildings Services</h2>
            <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
            <div>
               <a href="/buysellbuilding">Buy_and_Sell_any_Building</a>
               <a href="/rentalbuilding">Rental_any_Building</a>   
            </div>
         </div>
      </div>
            
 )
}
export default Services;