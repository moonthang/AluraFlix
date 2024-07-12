import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';




export const FormularioContext = createContext();

export const FormularioProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const abrirVideoBanner = (video) => {
    setVideoSeleccionado(video);
  };


  useEffect (() => {
    fetch('https://my-json-server.typicode.com/MaiteFinzi/aluraflix-api/videos')
    .then (resposta => resposta.json())

    .then (dados => {
      setVideos(dados)
    })
  }, [])


  const adicionarVideo = (nuevoVideo) => {
    const videosExistentes = JSON.parse(localStorage.getItem('videos')) || [];

    const videosAtualizados = [...videosExistentes, nuevoVideo];

    localStorage.setItem('videos', JSON.stringify(videosAtualizados));

    setVideos(videosAtualizados);
};

  const aoVideoRegistrado = (nuevoVideo) => {
    const id = uuidv4()
    const videoComId = {...nuevoVideo, id}
    setVideos([...videos, nuevoVideo]);
    localStorage.setItem('videos', JSON.stringify([...videos, videoComId])); 
};

  const abrirModal = (video) => {
    setVideoSeleccionado(video);
    setShowModal(true); 
  };

  const fecharModal = () => {
    setShowModal(false); 
  };

  return (
    <FormularioContext.Provider  value={{ 
        videos, 
        setVideos, 
        videoSeleccionado, 
        setVideoSeleccionado,
        showModal, 
        abrirModal,
        fecharModal,
        abrirVideoBanner, 
        aoVideoRegistrado,
        adicionarVideo 
        }} >
      {children}
    </FormularioContext.Provider>
  );
};







