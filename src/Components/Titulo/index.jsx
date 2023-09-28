import styled from "styled-components";

const TituloStyled = styled.h2`
    color: #7B78E5;
    font-family: 'GandhiSansRegular';
    font-size: 32px;
    font-style: normal;
    line-height: normal;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : "left" };
`

export default TituloStyled;