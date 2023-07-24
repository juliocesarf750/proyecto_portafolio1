import imagen1 from '../img/imagen_celular.png';
import icono1 from '../img/iconos/icono1.png';

export const Bloque4 = () => {
    return(
        <div className="bloque4">
            <div className="bloque4_columna1">
                <h1><strong>Install the device few easy steps.</strong></h1>
                <img src={imagen1} alt="" />
            </div>
            <div className="bloque4_columna2">
                <div className='bloque4_columna2_fila1'>
                    <div className='bloque4_columna2_fila1_icono'>
                        <div className='bloque4_columna2_fila1_icono_redondo'>
                        <img src={icono1} alt="" />

                        </div>
                        
                    </div>
                    <div className='bloque4_columna2_fila1_parrafo'>
                        <h4>Step 1</h4>
                        <h6>Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</h6>
                    </div>

                </div>
                <div className='bloque4_columna2_fila1'>
                    <div className='bloque4_columna2_fila1_icono'>
                        <div className='bloque4_columna2_fila1_icono_redondo'>
                        <img src={icono1} alt="" />

                        </div>
                        
                    </div>
                    <div className='bloque4_columna2_fila1_parrafo'>
                        <h4>Step 1</h4>
                        <h6>Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</h6>
                    </div>

                </div>
                <div className='bloque4_columna2_fila1'>
                    <div className='bloque4_columna2_fila1_icono'>
                        <div className='bloque4_columna2_fila1_icono_redondo'>
                        <img src={icono1} alt="" />

                        </div>
                        
                    </div>
                    <div className='bloque4_columna2_fila1_parrafo'>
                        <h4>Step 1</h4>
                        <h6>Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</h6>
                    </div>

                </div>
                

            </div>
            
            

        </div>
    );
}