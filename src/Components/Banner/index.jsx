import styled from "styled-components";

const FigureStyled = styled.figure`
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 328px;
    
    img {
        width: 100%;
        border-radius: 20px;
        opacity: 0.8;
    }

    figcaption {
        
        width: 350px;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(-50%, -50%);

        color: #FFF;
        font-family: "GandhiSansRegular";
        font-size: 40px;
        font-style: normal;
        line-height: normal;
        
    }

`

// eslint-disable-next-line react/prop-types
const Banner = ({ children, image }) => {
    return (
        <FigureStyled>
            <img src={image} alt="" />
            <figcaption>
                {children}
            </figcaption>
        </FigureStyled>
    )
}

export default Banner;