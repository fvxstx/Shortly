import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --cyan: hsl(180, 66%, 49%);
        --dark-violet: hsl(257, 27%, 26%);
        --red: hsl(0, 87%, 67%);
        --grey: hsl(0, 0%, 75%);
        --grey-violet: hsl(257, 7%, 63%);
        --dark-blue: hsl(255, 11%, 22%);
        --very-dark-violet: hsl(260, 8%, 14%);
    }

    html,body {
        padding: 0;
        margin: 0;
        font-size: 18px;
        font-family: "Poppins", sans-serif;
        -ms-overflow-style: none;  
        scrollbar-width: none;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    header,main,footer{
        padding: 0 90px;
    }

    * {
        box-sizing: border-box; 
    }

    @media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
    }
    body {
        height: 100%;   
        color: black;
        background: linear-gradient(180deg, #FFFF 25%, #E9ECF7 75%);
        
    }
    }
`;

export default GlobalStyle;
