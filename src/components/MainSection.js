import React, { useState, useEffect } from "react";
import styles from "../styles/MainSection.module.css";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.webp";
import leftArrow from "../assets/icon-angle-left.svg";
import rightArrow from "../assets/icon-angle-right.svg";

const carouselItems = [
  {
    image: img1,
    title: "Mejora tu espacio con soluciones creativas",
    description:
      "Ofrecemos calidad, confort y estilo únicos para propietarios. Nuestros expertos combinan forma y función para crear tu visión. Transforma tu hogar con nuestra exclusiva colección que refleja tu personalidad.",
  },
  {
    image: img2,
    title: "Estamos disponibles en todo el mundo",
    description:
      "Con tiendas globales, encontrar los muebles ideales para tu hogar o negocio es fácil. Usa nuestro localizador de tiendas para ubicar la sucursal más cercana. ¿Tienes dudas? Contáctanos hoy.",
  },
  {
    image: img3,
    title: "Fabricados con unos de los mejores materiales",
    description:
      "Nuestros muebles garantizan una calidad excepcional. Tras décadas de experiencia, utilizamos tecnología avanzada para asegurar la perfección en cada producto que fabricamos para tu hogar u oficina.",
  },
];

const MainSection = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
//para hacer el carrusel automatico 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [current]);

  if (!Array.isArray(carouselItems) || length === 0) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselcontent}>
        <img
          src={carouselItems[current].image}
          alt={carouselItems[current].description}
          className={styles.carouselimage}
        />
        <div className={styles.carouseldescription}>
          <h1 className={styles.titleh1}>{carouselItems[current].title}</h1>
          <p className={styles.descriptionp}>{carouselItems[current].description}</p>
          {/* AQUI AGREGA LA RUTA QUE LLEVA A SHOP*/}
          <div href="#" className={styles.enlace}>
            COMPRA AHORA {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="16"
              viewBox="0 0 50 16"
            >
              <line
                x1="5"
                y1="8"
                x2="45"
                y2="8"
                stroke="#333333"
                stroke-width="2"
              />
              <polyline
                points="38,3 45,8 38,13"
                fill="none"
                stroke="#333333"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.carouselbuttons}>
        <button
          className={styles.carouselbutton}
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <img src={leftArrow} alt="left" />
        </button>
        <button
          className={styles.carouselbutton}
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          <img src={rightArrow} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default MainSection;