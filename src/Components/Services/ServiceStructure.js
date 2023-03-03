import React from "react";
import styles from "./ServiceStyle.module.css";



//font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';


<link rel="stylesheet" href="../CSS/all.min.css"></link>

//type...of contract
//contractlink



const ServiceStrucure = () => {
    return (
        <div>         
            <div className={styles.container}>
                <div className={styles.txt}>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
                    </p>
                </div>
                <div className={styles.get_file}>
                    <h4> To Get Your File Follwo This Link <a href="/#">Go There</a></h4>
                </div>
                <div className={styles.upload}>
                    <h4>After Filling The File Upload It from Here</h4>
                    <FontAwesomeIcon icon={faCircleArrowDown} className={styles.icon} />
                    
                    <div className={styles.input_group}>
                        <input type="file" className={styles.form_control} placeholder="Choose File"/>
                        <input className={styles.uploadbtn } type="submit" value="Submit"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServiceStrucure;