import imagen1 from '../img/pie de imagen.png';
import imagen2 from '../img/img5.png';
import imagen3 from '../img/img4.png';
import Button from 'react-bootstrap/Button';
export const Bloque1 = () =>{
    return (
        <div className="bloque1">
            <div className="bloque1_parrafo">
                 <h1><strong>Landing page <br/> UI kit</strong></h1>
                 <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br/> odio in et, lectus sit lorem id integer.</h6>
                 <Button style={{marginLeft:'30px'}}>Get Started</Button>
            
            </div>
            <div className="bloque1_imagen">
                <img src={imagen1} alt="imagen1" />
            </div>

        </div>
    );
}