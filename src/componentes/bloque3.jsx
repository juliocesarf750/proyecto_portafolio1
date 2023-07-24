import SwiperCards from "./paginationCards";

export const Bloque3 = () =>{
    return(
        <div className="bloque3">
            <div className="bloque3_contenedor_cards">
                <h1 style={{color:'white',marginLeft:'30px'}}><strong>Our clients speak</strong></h1>
                 <SwiperCards/>
            </div>
        </div>
    );
}