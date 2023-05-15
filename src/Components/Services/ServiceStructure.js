import React, { useState } from "react";
import styles from "./ServiceStyle.module.css";



//font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';


<link rel="stylesheet" href="../CSS/all.min.css"></link>
//type...of contract
//contractlink


const ServiceStrucure = () => {
    const formData = new FormData();
    //handel file change function
    function handelFileChange(e) {
        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            formData.append('file', e.target.files[0]);
        }
    }
    //handel button onclick api submit
    function handelApiOnSubmit() {
        fetch("http://localhost:8000/customerSignUp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formData
            })
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }


    const link = "https://rern.gov.eg/pages/requests/2";
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.txt}>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
                    </p>
                </div>
                <div className={styles.get_file}>
                    <h4> To Get Your File Follow This Link <a href={link} target="_blank" rel="noreferrer">Go There</a></h4>
                </div>
                <div className={styles.upload}>
                    <h4>After Filling The File Upload It from Here</h4>
                    <FontAwesomeIcon icon={faCircleArrowDown} className={styles.icon} />
                    {/* Start upload your file */}
                    <div className={styles.input_group}>
                        <input type="file" className={styles.form_control} placeholder="Choose File" name="file" onChange={handelFileChange} />
                        <button className={styles.uploadbtn} onClick={handelApiOnSubmit}>Submit</button>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default ServiceStrucure;