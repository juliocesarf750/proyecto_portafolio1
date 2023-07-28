import imagen1 from "../img/iphone10.png"

export const Bloque6 = () => {
    return(
        <div className="bloque6">
            <div className="bloque6_banner">
                <div className="bloque6_banner_parrafo">
                     <h1>Headline</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                     <a href="#">{"Get started-->" }</a>
                </div>
                <div className="bloque6_banner_imagen">
                       <img src={imagen1} alt="" />

                </div>
            </div>
        </div>
    );
}