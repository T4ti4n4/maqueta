import React from "react";
import styles from "../styles/AboutSetion.css";
import img from "../assets/IMG1.jpeg";
import img1 from "../assets/IMG2.jpeg";

import AboutSetion from "../styles/AboutSetion.css";
const AboutSecition = () => {
return (
    <section className="">
        <div className={styles.About_img}>
        <img src={img} alt="About us"/>
        </div>
    <div className={styles.About_text}>
        <h3>About Our Furniture</h3>
        <p>Descripción img</p>
    </div>

    <div className={styles.img1}>
        <img src={img1} alt="About us"/>
   

    </div>

    </section>          
);
}

export default AboutSecition;