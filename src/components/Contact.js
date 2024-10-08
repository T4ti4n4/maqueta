import React from 'react';
import { Link } from 'react-router-dom';  // Importamos Link de react-router-dom
import styles from '../styles/Contact.module.css';  // Importa el archivo de estilos como objeto

const Contact = () => {
  // Simulación de datos de contactos
  const contacts = [
    { id: 1, name: 'María José Jiménez Díaz', descripcion: 'Colaboradora' },
    { id: 2, name: 'Karoll Marcela Escalante Gazabón', descripcion: 'Colaboradora' },
    { id: 3, name: 'Sharay Nicolle Mejia Camacho', descripcion: 'Colaboradora' },
    { id: 4, name: 'Luisa Fernanda Triviño', descripcion: 'Colaboradora' },
    { id: 5, name: 'Sara Inés Angarita Ballén', descripcion: 'Colaboradora' },
    { id: 6, name: 'Tatiana Barco Gonzalez', descripcion: 'Colaboradora' },
    { id: 7, name: 'María Paola Anaya Correa', descripcion: 'Colaboradora' },
    { id: 8, name: 'Luisa Fernanda Tarquino Herrera', descripcion: 'Colaboradora' },
    { id: 9, name: 'Estefany Del Carmen Muñoz Carrascal', descripcion: 'Colaboradora' },
    { id: 10, name: 'Luisa Villacorte', descripcion: 'Colaboradora' },
    { id: 11, name: 'Luisa Gonzalez', descripcion: 'Colaboradora' },
    { id: 12, name: 'Wendy Maylin Donneys Samboni', descripcion: 'Colaboradora' },
  ];

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactList}>
        <h2 className={styles.contactTitle}>Lista de Contactos</h2>
        <div className={styles.contactGrid}>
          {contacts.map(contact => (
            <div key={contact.id} className={styles.contactCard}>
              <h3 className={styles.contactName}>{contact.name}</h3>
              <p className={styles.contactDescription}>Descripción: {contact.descripcion}</p>
            </div>
          ))}
        </div>
        {/* Contenedor del botón */}
        <div className={styles.buttonContainer}>
          <Link to="/home" className={styles.backButton}>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
