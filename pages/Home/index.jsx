import styled from "styled-components";
import EstiloGlobales from "../../src/componentes/EstiloGlobales";
import Cabezal from "../../src/componentes/Cabezal";
import Rodape from "../../src/componentes/Rodape";
import Container from "../../src/componentes/Container";
import Categoria from "../../src/componentes/Categoria";
import { useContext, useEffect, useState } from "react";
import { FormularioContext } from "../../src/contexto/FormularioContext";
import CardBanner from "../../src/componentes/Banner";
import Modal from "../../src/componentes/ModalEditar";
import CampoTexto from "../../src/componentes/CampoTexto";


export const Fondo = styled.div`
background-color: var(--chumbo);
width: 100%;
min-height: 100vh;
`
export const categorias = [
  {
    nome: 'FRONT END',
    corNome: 'var(--azulClaro)',
    corBorda: 'var(--azulClaro)',
    corSombra: 'var(--azulClaro)',
    corSpan: 'var(--azulClaro)',


  },
  {
    nome: 'BACK END',
    corNome: 'var(--cinzaEscuro)',
    corBorda: 'var(--cinzaEscuro)',
    corSombra: 'var(--cinzaEscuro)',
    corSpan: 'var(--cinzaEscuro)',

  },
  {
    nome: 'MOBILE',
    corNome: 'var(--amarelo)',
    corBorda: 'var(--amarelo)',
    corSombra: 'var(--amarelo)',
    corSpan: 'var(--amarelo)',

  }

]


function Home(props) {
  const [id, setid] = useState('')
  const [titulo, setTitulo] = useState('')
  const [imagen, setImagen] = useState('')
  const [video, setVideo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')


  const aoGuardar = (evento) => {
    evento.preventDefault()
    props.aoVideoRegistrado({
      id,
      titulo,
      imagen,
      video,
      descripcion,
      categoria,
    })


  }


  const limparFormulario = () => {
    setTitulo(''),
      setImagen(''),
      setVideo(''),
      setDescripcion(''),
      setCategoria('')
  }

  const { videos, setVideos, showModal, videoSeleccionado, fecharModal, setVideoSeleccionado } = useContext(FormularioContext);

  console.table(videos)

  useEffect(() => {
    const handleStorageChange = () => {
      const videosDoLocalStorage = JSON.parse(localStorage.getItem('videos')) || [];
      setVideos(videosDoLocalStorage);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);



  return (
    <Fondo>
      <EstiloGlobales />
      <Cabezal />
      < Container  >
        <CardBanner id="banner" />

        {categorias.map((categoria) => (
          <Categoria key={categoria.nome}
           styles={{ marginTop: 100 }}
            nome={categoria.nome}
            corNome={categoria.corNome}
            corBorda={categoria.corBorda}
            corSombra={categoria.corSombra}
            corSpan={categoria.corSpan}
            videos={videos.filter((video) =>
              video.categoria.toLowerCase() === categoria.nome.toLowerCase()

            )}
          />

        ))}
        {showModal && (
          <Modal
            video={videoSeleccionado}
            onClose={fecharModal}
          >

          </Modal>
        )}
        <Rodape />
      </Container>
    </Fondo>
  )
};
export default Home;





