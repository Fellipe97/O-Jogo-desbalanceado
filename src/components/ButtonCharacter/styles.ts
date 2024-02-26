import styled, { css } from "styled-components";

type ButtonCTAProps = {
    isDisabled?: boolean
}

export const ButtonCTA = styled.button<ButtonCTAProps>`
  
    padding: 15px;
    font-size: 24px;

    background-size: cover;


    color: #5B3A70;

    border-radius: 5px;
    border: 0;

    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    width: 150px;
    height: 200px;
    
    transition: .6s ease-in-out;

    &:not(:disabled):hover{
        opacity: .5;
    };
`