import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        background: ${(props) => props.theme.background};
    }

    body, button, input, textarea {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        color: ${(props) => props.theme.color};
    }
`;
