import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;

    div.html-text {
        width: 100%;
        max-width: 800px;
        height: 100%;
        margin-left: 10px;
        overflow-x: hidden;

        /*p {
            word-wrap: break-word;
        }*/

        .se-video-container figure {
            height: 450px !important;
            padding-bottom: 0 !important;
        }

        a, a:visited {
            color: inherit;
        }
    }
`;
