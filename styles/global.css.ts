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

    *{
        font-family: "Poppins", sans-serif;
    }

    html,body {
        padding: 0;
        margin: 0;
        font-size: 18px;
        max-width: 100%;
        overflow-x: hidden;
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

    ul {
        list-style-type: none;
        padding: 0;
    }

    header,main,footer{
        padding: 0 130px;

        @media only screen and (max-width: 850px) {
            padding: 0 50px;
        }

        @media only screen and (max-width: 430px) {
            padding: 0 20px;
        }
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
