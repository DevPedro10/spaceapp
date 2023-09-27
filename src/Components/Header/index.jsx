import styled from "styled-components";
import CampoDeBusca from "../CampoDeBusca";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
    padding: 60px 0;

    img {
        width: 211.41751px;
    }
`


const Header = () => {
    return (
        <HeaderStyled>
            <img src="public\imagens\logo.png" alt="Logo Space App" />
            <CampoDeBusca />
        </HeaderStyled>
    )
}

export default Header;