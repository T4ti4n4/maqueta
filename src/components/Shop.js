import React from 'react';
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.jpg"
import style from "../styles/Shop.css"; // Importa el archivo CSS para los estilos

const ProfileCard = () => {
    return(
        <div >
            <h1 className='titlee'>Compra al gusto</h1> <br/>
        <div className="container-card">
          
        <div className="Profile-card">

        <br/><h2 className="Profile-name">Mueble de diseño</h2> <br/>
            <img className="Profile-img" src={img1} alt=""/>
            <p className='descripti'> Te brinda comodidad y se adapta a tu estilo.</p>
            <p className="Profile-description">$144.890</p>   
            <button className="Profile-button"> Comprar</button>
        </div>
        <div className="Profile-card">

        <br/><h2 className="Profile-name">Mueble de diseño</h2> <br/>
            <img className="Profile-img" src={img4} alt=""/>
            <p className='descripti'> Te brinda comodidad y se adapta a tu estilo.</p>
            <p className="Profile-description">$354.890</p>   
            <button className="Profile-button"> Comprar</button>
        </div>
        <div className="Profile-card">

        <br/><h2 className="Profile-name">Mueble de diseño</h2> <br/>
            <img className="Profile-img" src={img2} alt=""/>
            <p className='descripti'> Te brinda comodidad y se adapta a tu estilo.</p>
            <p className="Profile-description">$894.890</p>   
            <button className="Profile-button"> Comprar</button>
        </div>
        <div className="Profile-card">

        <br/><h2 className="Profile-name">Mueble de diseño</h2> <br/>
            <img className="Profile-img" src={img3} alt=""/>
            <p className='descripti'> Te brinda comodidad y se adapta a tu estilo.</p>
            <p className="Profile-description">$504.890</p>   
            <button className="Profile-button"> Comprar</button>
        </div>
        </div> <br/>
        <h3 className='contact'>Contactanos en <a href='Contact'>Mujeres Digital</a></h3>
        
       
        </div>
    );
    
    }
    
    export default ProfileCard;