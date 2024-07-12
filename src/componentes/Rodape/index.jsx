import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    width: 100%;
    padding-block: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--fontePrincipal);
    background-color: var(--chumbo);
    border-top: 4px groove var(--azulEscuro);

    font-size: 1rem;
    font-weight: 500;
    color: var(--cinzaClaro);
    
img{
    width: 120px;
    height: 30px;
   padding-top:0.5rem;
}
p{
    font-size:0.8em;
    font-family:var(--fontePrincipal);
}
`

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <img src="/imagens/logo-aflix.png" alt="Logo Aluraflix" />
            <p>&copy; Hecho por Miguel Angel S. Burgos
                2024</p>
        </RodapeEstilizado>
    )
}

export default Rodape;