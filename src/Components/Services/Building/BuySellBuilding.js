import React from "react";
import styles from "../ServiceStyle.module.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import ServiceStrucure from "../ServiceStructure";


const BuySellBuilding = () => {
 return (
  <div className={styles.BuySellBuilding}>
   <ServiceStrucure/>
  </div>
 );
}

export default BuySellBuilding;