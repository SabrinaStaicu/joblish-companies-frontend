import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
    body : "#000000e6",
    fontColor : "#fff"
}

export const lightTheme = {
    body : "#fff",
    fontColor : "#000"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color : ${props => props.theme.body};
        
    }

    * {
        color : ${props => props.theme.fontColor};
    }

    .card {
        background: rgba(255,255,255,0.2);
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        backdrop-filter:blur(10px);
    }

    .navigation ul li.active {
        background-color : ${props => props.theme.body};
    }

    .MuiCard-root {
        background: rgba(255,255,255,0.2)!important;
        box-shadow: 0 15px 35px rgba(0,0,0,0.1)!important;
        backdrop-filter:blur(10px)!important;
    }

    td {
        color : ${props => props.theme.fontColor}!important;
    }

    th {
        color : ${props => props.theme.fontColor}!important;
    }

    p {
        color : ${props => props.theme.fontColor}!important;
    }

    input {
        color : ${props => props.theme.fontColor}!important;
        border-color: ${props => props.theme.fontColor}!important;
    }
    
    span {
        color : ${props => props.theme.fontColor}!important; 
    }

    `
