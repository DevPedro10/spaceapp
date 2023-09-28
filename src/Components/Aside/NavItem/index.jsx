import styled from "styled-components";

const ItemListStyled = styled.li`

    display: flex;
    align-items: center;
    gap: 20px;

    color: ${props => props.$ativo ? '#7B78E5': '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    cursor: pointer;

    img{
        width: 32px;
        height: 32px;
    }
`

// eslint-disable-next-line react/prop-types
const NavItem = ({children, ativo = false, iconeAtivo, iconeInativo}) => {
    return (
        <ItemListStyled $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone" />
            {children}
        </ItemListStyled>
    )
}

export default NavItem;