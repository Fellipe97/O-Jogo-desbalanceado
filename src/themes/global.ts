import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;  

    }

    html {
        font-size: 12px;
        scroll-behavior: smooth;
    }

    body{
        //background: ${(props) => props.theme['white']};
        background: #5B3A70;
    }
   
`