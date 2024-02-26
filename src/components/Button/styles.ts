import styled, { css } from "styled-components";

type ButtonCTAProps = {
    color: "default" | "redButton" | "greenButton",
}

export const ButtonCTA = styled.button<ButtonCTAProps>`
  
    padding: 15px;
    font-size: 24px;

    color: #ffffff;

    border-radius: 5px;
    border: 0;

    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  
    ${(props) => {
        if (props.color === 'greenButton') {
            return css` background: green;`
        } else if (props.color === 'redButton') {
            return css` background: red;`
        } else {
            return css` background: #8B60B1;`
        }
    }}

    transition: .6s ease-in-out;

    &:not(:disabled):hover{
    filter: brightness(110%);
  };
`