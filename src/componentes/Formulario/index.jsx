import CampoTexto from "../CampoTexto";
import styled from "styled-components";
import ListaSuspensa from "../ListaSuspensa";
import { useContext, useState } from "react";
import { FormularioContext } from "../../contexto/FormularioContext";


const TextoEstilizado = styled.h1`
    font-family: var(--fonteNavBotoes);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    padding-block:20px;
    margin-top: 50px;
   
h2{
    font-family: var(--fonteNavBotoes);
    font-size: 15px;
    font-weight: 400;
    margin-bottom:20px;
}


`

const FormularioEstilizado = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
   
form{
    height: 100%;
    width:90vw;
   
}
`

const CampoTextoEstilizados = styled.div`
    display: flex;
    justify-content:space-evenly;
     @media (max-width: 360px){
        display: flex;
        flex-direction:column;      
        height: 80%;
        label{
            margin-left: 10px;
        }
    }
    

`
const BotoesEstilizadosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 20px;
    gap: 25px;
button{
    color: var(--cinzaClaro);
    padding-inline: 3rem;
    background-color:var(--chumbo);
    border: 2px solid var(--cinzaClaro);
    border-radius: 20px;
    padding: 10px 30px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: var(--fonteNavBotoes);
    &:hover{
    border: 2px solid var(--azulEscuro);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: inset 0.7px 0.5px 17px 5px var(--azulEscuro);
    color: var(--azulEscuro);
    }
}    

`


const Formulario = ( props) => {
    const [titulo, setTitulo] = useState('')
    const [imagen, setImagen] = useState('')
    const [video, setVideo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState('')


    
   const aoGuardar = (evento) => {
       evento.preventDefault()
     const novoVideo ={
        titulo:titulo,
        imagen:imagen,
        video:video,
        descripcion:descripcion,
        categoria:categoria
     }
       props.aoVideoRegistrado(novoVideo)


     }


     const limparFormulario = () => {
        setTitulo(''),
        setImagen(''),
        setVideo(''),
        setDescripcion(''),
        setCategoria('')
     }


    return (
        <FormularioEstilizado >
            <form onSubmit={aoSalvar}>  
                <TextoEstilizado>
                    <header>
                    <h1>NUEVO VIDEO</h1>
                    <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO.</h2>
                    </header>
                </TextoEstilizado>
                <CampoTextoEstilizados>
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Titulo" 
                    placeholder="Ingrese el título del vídeo" 
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                    />
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Imagen" 
                    placeholder="Ingrese el link de la imagen del vídeo"
                    valor={imagen}
                    aoAlterado={valor => setImagen(valor)}
                    />
                </CampoTextoEstilizados>
                <CampoTextoEstilizados>
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Vídeo" 
                    placeholder="Ingrese link del vídeo" 
                    valor={video}
                    aoAlterado={valor => setVideo(valor)}
                    />
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Descripción" 
                    placeholder="Descripción del video" 
                    valor={descripcion}
                    aoAlterado={valor => setDescripcion(valor)}
                    />
                </CampoTextoEstilizados>
                < CampoTextoEstilizados>
                    <ListaSuspensa 
                    obrigatorio={true} 
                    label="Categorias" 
                    itens={props.categorias} 
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                    />
                </ CampoTextoEstilizados>
            </form>
            
                <BotoesEstilizadosContainer >
                    <button type="submit" onClick={aoSalvar}>GUARDAR</button> 
                    <button type="button" onClick={limparFormulario}>LIMPAR</button>
                </BotoesEstilizadosContainer>
        </FormularioEstilizado >
    )

}

export default Formulario;


