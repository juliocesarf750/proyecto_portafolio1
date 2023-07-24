import { Bloque1 } from "./componentes/bloque1";
import { Bloque2 } from "./componentes/bloque2";
import { Bloque3 } from "./componentes/bloque3";
import { Bloque4 } from "./componentes/bloque4";
import NavScroll from "./componentes/navbar"

function App() {
  return(
    <div>
       <NavScroll logo={'fisdom'} ruta1={'ruta1'} ruta2={'ruta2'} ruta3={'ruta3'} ruta4={'ruta4'} ruta5={'ruta5'} nombre_ruta1={'Invest'}  nombre_ruta2={'Insure'} nombre_ruta3={'Goall'} nombre_ruta4={'Parthers'} nombre_ruta5={'Home'}/>
       <Bloque1/>
       <Bloque2/>
       <Bloque3/>
       <Bloque4/>
    </div>
    );

}

export default App