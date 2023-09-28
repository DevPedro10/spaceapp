/* eslint-disable react/prop-types */
import styled from "styled-components";

const DivInputStyled = styled.div`
    
    border-radius: 10px;
    border: 2px solid transparent;
    background: linear-gradient(to right, #c98cf1, #7b78e5, #c98cf1);
    display: flex;
    align-items: center;
    position: relative;
    
    input{
        font-family: 'Gandhi Sans', Arial, Helvetica, sans-serif;
        border-radius: 10px;
        color: #D9D9D9;
        padding: 12px 64px 12px 16px;
        width: calc(365px - 64px + 16px);
        border: 3px solid transparent;
        background:#041C3D;

        &:focus {
            outline: none;
        }

        &:focus::placeholder {
            color: transparent;
        }
    }

    img {
        position: absolute;
        right: 16px;
        width: 32px !important;
        height: 32px;
        margin-left: auto;
    }

`

const CampoDeBusca = () => {
    return (
        <DivInputStyled>
            <input type="text" placeholder="O que você procura?" />
            <img src="public\icones\search.svg" alt="" />
        </DivInputStyled>
    )
}

export default CampoDeBusca;