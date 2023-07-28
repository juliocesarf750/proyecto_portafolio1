import icono1 from "../img/iconos/icono1.png"
import icono2 from "../img/iconos/icono2.png"
import icono3 from "../img/iconos/icono3.png"
import icono4 from "../img/iconos/icono4.png"
import icono5 from "../img/iconos/icono5.png"
import icono6 from "../img/iconos/icono6.png"
import "../index.css"

export const Bloque5 = () =>{
    return (
    <div className="bloque5" id="Servicios">
        <div className="bloque5_titulo">
                  
                  <h1>Servicer That connect you to <br/> your users</h1>
                    
              </div>
        <div className="bloque5_contenedor">
            
            <div className="bloque5_contenedor_cards">
                    <div className="bloque5_cards">

                        <div className="bloque5_cards_icono">
                          
                          <img src={icono1} alt="icono1" />

                        </div>

                        <div className="bloque5_cards_parrafo">
                              <h1>aplication movile</h1>
                              <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                              <a href="#">{"Explore ->"}</a>
                        </div>
                    </div>

                    <div className="bloque5_cards">

                        <div className="bloque5_cards_icono">

                        <img src={icono2} alt="icono2" />
                         </div> 
                         <div className="bloque5_cards_parrafo">
                         <h1>aplication movile</h1>
                              <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                              <a href="#">{"Explore ->"}</a>
                         </div>    
                    </div>
                        
                    <div className="bloque5_cards">

                        <div className="bloque5_cards_icono">
                        <img src={icono3} alt="icono3" />

                        </div> 
                        <div className="bloque5_cards_parrafo">
                        <h1>aplication movile</h1>
                              <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                              <a href="#">{"Explore ->"}</a>
                        </div>

                    </div>
                    <div className="bloque5_cards">

                        <div className="bloque5_cards_icono">
                        <img src={icono4} alt="icono4" />

                        </div> 
                        <div className="bloque5_cards_parrafo">
                        <h1>aplication movile</h1>
                              <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                             
                              <a href="#">{"Explore ->"}</a>
                        </div>

                    </div>
                    <div className="bloque5_cards">

                        <div className="bloque5_cards_icono">
                        <img src={icono5} alt="icono5" />

                        </div> 
                        <div className="bloque5_cards_parrafo">
                        <h1>aplication movile</h1>
                              <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                              <a href="#">{"Explore ->"}</a>
                        </div>

                    </div>
                    <div className="bloque5_cards">

                        <div className="bloque5_cards_icono">
                        <img src={icono6} alt="icono6" />

                        </div> 
                        <div className="bloque5_cards_parrafo">
                        <h1>aplication movile</h1>
                              <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                              <a href="#">{"Explore ->"}</a>
                        </div>
                    </div>

            </div>
            <div className="bloque5_Boton">
                  <button>{"Explore all ->"}</button>
            </div>
        </div>
    </div>
    );
}