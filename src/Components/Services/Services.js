import React from "react";
import styles from "./Services.module.css";
import service_0 from "../../imags/0.jpg";
const Services = () => {
 return (
  <div className={styles.Services}>
   <div className={styles.Container}>
    {/*first_service*/}
       <div className={styles.info}>
         <div className={styles.text}>
         <h2>Home Services</h2>
         <p>over tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain , on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.</p>
         </div>
         </div>
       <div className={styles.all_services}>
    <div className={styles.service}>
     <img src={service_0} alt="img" className={styles.service_0}/>
    <h3>Service_Name</h3>
         <p>service_Description</p>
         <a href="/more"  className={styles.more}>View more</a>
    </div>
    {/* first_service */}
    
    <div className={styles.service}>
     <img src={service_0} alt="img" className={styles.service_0}/>
    <h3>Service_Name</h3>
         <p>service_Description</p>
            <a href="/more" className={styles.more}>View more</a>
    </div>
     {/* first_service */}
    <div className={styles.service}>
     <img src={service_0} alt="img" className={styles.service_0}/>
    <h3>Service_Name</h3>
         <p>service_Description</p>
            <a href="/more" className={styles.more}>View more</a>
    </div>

     {/* first_service */}
    <div className={styles.service}>
     <img src={service_0} alt="img" className={styles.service_0}/>
    <h3>Service_Name</h3>
         <p>service_Description</p>
            <a href="/more" className={styles.more}>View more</a>
     </div>
    
    {/* first_service */}

    <div className={styles.service}>
     <img src={service_0} alt="img" className={styles.service_0}/>
    <h3>Service_Name</h3>
         <p>service_Description</p>
            <a href="/more" className={styles.more}>View more</a>
     </div>
    {/* first_service */}

    <div className={styles.service}>
     <img src={service_0} alt="img" className={styles.service_0}/>
    <h3>Service_Name</h3>
         <p>service_Description</p>
            <a href="/more" className={styles.more}>View more</a>
     </div>
    {/* first_service */}

             
             
             
    <div className={styles.service}>
     <img src={service_0} alt="img" className={styles.service_0}/>
      <h3>Service_Name</h3>
      <p>service_Description</p>
      <a href="/more" className={styles.more}>View more</a>
     </div>
    {/* first_service */}
    <div className={styles.service}>
      <img src={service_0} alt="img" className={styles.service_0}/>
      <h3>Service_Name</h3>
         <p>service_Description</p>
          <a href="/more" className={styles.more}>View more</a>
     </div>
   </div>
     </div>
     </div>
 )
}
export default Services;