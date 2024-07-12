
import { useContext } from "react";
import Cebezal from "../../src/componentes/Cebezal";
import Container from "../../src/componentes/Container";
import EstiloGlobales from "../../src/componentes/EstiloGlobales";
import Formulario from "../../src/componentes/Formulario";
import Rodape from "../../src/componentes/Rodape";
import { FormularioContext } from "../../src/contexto/FormularioContext";




    const categorias = [
        {
          nome:'FRONT END',
          corNome:'var(--azulClaro)',
          corBorda:'var(--azulClaro)',
          corSombra:'var(--azulClaro)',
          corSpan:'var(--azulClaro)',

        },
        {
          nome:'BACK END',
          corNome:'var(--cinzaEscuro)',
          corBorda:'var(--cinzaEscuro)',
          corSombra:'var(--cinzaEscuro)',
          corSpan:'var(--cinzaEscuro)',

        },
        {
          nome:'MOBILE',
          corNome:'var(--amarelo)',
          corBorda:'var(--amarelo)',
          corSombra:'var(--amarelo)',
          corSpan:'var(--amarelo)',
        }
  ]



 const NuevoVideo = () => {
  
        const {videos , setVideos} = useContext(FormularioContext)
        
        const aoVideoRegistrado = (nuevoVideo) => {
          setVideos([...videos, nuevoVideo]);
        };

    return (
        <>
            <EstiloGlobales />
            <Cebezal />
            <Container>
                <Formulario 
                categorias={categorias.map(categoria => categoria.nome)} 
                aoVideoRegistrado = {aoVideoRegistrado} />
            </Container>
            <Rodape />
        </>
    )
  }

export default NuevoVideo;


