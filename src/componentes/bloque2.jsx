import imagen1 from '../img/iconos_de_compras/img1.png';
import imagen2 from '../img/iconos_de_compras/img2.png';
import imagen3 from '../img/iconos_de_compras/img3.png';
import imagen4 from '../img/iconos_de_compras/img4.png';
import imagen5 from '../img/iconos_de_compras/img5.png';
import imagen6 from '../img/iconos_de_compras/img6.png';
import imagen7 from '../img/iconos_de_compras/img7.png';
import imagen8 from '../img/iconos_de_compras/img8.png';

export const Bloque2 = () => {
    return(
        <div className="bloque2">
            <div className="bloque2_parrafo">
                 <h1><strong> 150.000+</strong></h1>
                 <h6>Customers who use Landify UI Kit to <br/> 
                     build their new startup landing page.
                 </h6>
            </div>
            <div className="bloque2_imagenes_contenedor">
                <div className="bloque2_imagenes_fila1">
                   <img src={imagen1} alt="" />
                   <img src={imagen2} alt="" />
                   <img src={imagen3} alt="" />
                   <img src={imagen4} alt="" />
                </div>
                <div className="bloque2_imagenes_fila2">
                   <img src={imagen5} alt="" />
                   <img src={imagen6} alt="" />
                   <img src={imagen7} alt="" />
                   <img src={imagen8} alt="" />
                </div>
                 
            </div>

        </div>
    );
}