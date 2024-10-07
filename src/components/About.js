import React from "react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Somos tú mejor aliado para darle un toque especial a tú hogar.</h1>
        <p>
          Nacimos para llevar lo tradicional un poco más alla, queremos que
          disfrutes tus decoraciónes de manera personalizada.
        </p>
        <a href="/home" className={styles.btn}>
          Inicio
        </a>
      </div>
    </section>
  );
};

export default About;