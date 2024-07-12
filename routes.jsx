import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import EstiloGlobales from "./src/componentes/EstiloGlobales";
import Cabezal from "./src/componentes/Cabezal";
import Container from "./src/componentes/Container";
import { FormularioProvider } from "./src/contexto/FormularioContext";

const AppRoutes = () => {
    const [videos, setVideos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [videoSeleccionado, setVideoSeleccionado] = useState(null);

    useEffect(() => {
        const carregarVideos = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/MaiteFinzi/aluraflix-api/videos');
                console.log(response)
                if (!response.ok) {
                    throw new Error("Error al cargar los vídeos");
                }
                const data = await response.json();
                console.log(data)
                setVideos(data.videos || []); 
                localStorage.setItem('videos', JSON.stringify(data.videos));   
            } catch (error) {
                console.error("Error al cargar los vídeos:", error);
            }
        };

        carregarVideos();
    }, []); 

    useEffect(() => {
        const handleStorageChange = () => {
            const videosDoLocalStorage = JSON.parse(localStorage.getItem('videos')) || [];
            setVideos(videosDoLocalStorage);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleAbrirModal = (video) => {
        setShowModal(true);
        setVideoSeleccionado(video);
    };
    const fecharModal = () => {
        setShowModal(false);
        setVideoSeleccionado(null);
    };

    const aoVideoRegistrado = (nuevoVideo) => {
        console.log("Nuevo vídeo:", nuevoVideo);
        setVideos([...videos, nuevoVideo]);
        console.log("Array de vídeos:", videos);
    };
    return (
        <BrowserRouter>
            <FormularioProvider>
                <EstiloGlobales />
                <Cabezal />
                <Container>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home videos={videos} showModal={showModal} videoSeleccionado={videoSeleccionado} handleAbrirModal={handleAbrirModal} fecharModal={fecharModal} />}
                        />
                        <Route
                            path="/nuevo"
                            element={<NueviVideo aoVideoRegistrado={aoVideoRegistrado} />} 
                        />
                    </Routes>
                </Container>
            </FormularioProvider>
        </BrowserRouter>
    );
};

export default AppRoutes;
