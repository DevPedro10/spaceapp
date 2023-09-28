import styled from "styled-components";
import Tags from "../Tags";
import TituloStyled from "../Titulo";
import Populares from "../Populares";

const GalleryContainer = styled.div`
    display: flex;
`
const MainSectionGallery = styled.section`
    flex-grow:1;
`

const Galeria = () => {
    return (
        <GalleryContainer>
            <Tags />
                <MainSectionGallery>
                    <TituloStyled>Navegue pela galeria</TituloStyled>
                </MainSectionGallery>
                <Populares />
        </GalleryContainer>
    )
}

export default Galeria;