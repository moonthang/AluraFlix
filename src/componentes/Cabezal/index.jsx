import styled from "styled-components";
import { Link } from "react-router-dom";


const HeaderEstilizado = styled.header`
    background-color: var(--chumbo);
    border-bottom: 6px ridge var(--azulEscuro);
    position: absolute;
    top:0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block:10px;
    
img{
    width: 120px;
    height: 30px;
    margin-left:16px
}
`

const LinkEstilizado = styled(Link)`
    text-decoration: none;
    color: var(--cinzaClaro);
    padding-inline: 3rem;
    border: 2px solid var(--cinzaClaro);
    margin: 25px;
    border-radius: 20px;
    padding: 10px 30px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: var(--fonteNavBotoes);
    @media (max-width:430px) {
        margin: 5px;

    }
    &:hover{
    border: 2px solid var(--azulEscuro);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: inset 0.7px 0.5px 17px 5px var(--azulEscuro);
    color: var(--azulEscuro);
    }
    
    @media (max-width: 360px) {
     margin:10px;
     padding-inline: 1rem;
    }

`

const Cabezal = () => {
    return(
       <HeaderEstilizado>
           <img src="imagens/logo-aflix.png" alt="Logo Aluraflix" />
          <div>
          <LinkEstilizado  to="/">HOME</LinkEstilizado >
          <LinkEstilizado  to="/novo">NUEVO VÍDEO</LinkEstilizado>
         </div>
       </HeaderEstilizado>
    )
}

export default Cabezal;