import React from 'react';
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Un sitio para descubrir decoraciones para tu hogar</h1>
                <p>
                    Disfruta de diseños personalizados, productos de diseño y decoración exclusivos para tu hogar.
                    Encuentra lo que buscas y compra lo que deseas!
                
                </p>
                <a href="/home" className={styles.btn}>Mirar ahora</a>
            </div>
        </section>
    );
};

export default Home;
