import styled from "styled-components";
import NavItem from "./NavItem";


const UnorderedListStyled = styled.ul`
    width: 212px;
    height: 276px;


    display: flex;
    flex-direction: column;
    gap: 18px;

    list-style: none;
    margin: 0;
    padding: 0;
`

const Aside = () => {
    return (
        <aside>
            <nav>
                <UnorderedListStyled>
                    <NavItem
                        ativo
                        iconeAtivo="public\icones\home-ativo.png"
                        iconeInativo="public\icones\home-inativo.png"
                    >
                        Início
                    </NavItem>
                    <NavItem
                        iconeAtivo="public\icones\mais-vistas-ativo.png"
                        iconeInativo="public\icones\mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </NavItem>
                    <NavItem
                        iconeAtivo="public\icones\mais-curtidas-ativo.png"
                        iconeInativo="public\icones\mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </NavItem>
                    <NavItem
                        iconeAtivo="public\icones\novas-ativo.png"
                        iconeInativo="public\icones\novas-inativo.png"
                    >
                        Novas
                    </NavItem>
                    <NavItem
                        iconeAtivo="public\icones\surpreenda-me-ativo.png"
                        iconeInativo="public\icones\surpreenda-me-inativo.png"
                    >
                        Supreenda-me
                    </NavItem>

                </UnorderedListStyled>
            </nav>
        </aside>
    )
}

export default Aside;