import { styled } from "styled-components"

export const Letter = styled.div.withConfig({shouldForwardProp: (prop) => prop !== 'isvisible' && prop !== 'template'})<{ isvisible: boolean, template: string }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url(${(props) => props.template ? props.template : '/images/Paper.jpeg'});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    width: 316px;
    height: 500px;

    cursor: pointer;

    box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease, opacity 0.1s ease-in-out;
    transform-origin: center;
    
    opacity: ${(props) => props.isvisible ? 1 : 0};

    &:hover {
        box-shadow: 0px 10px 20px rgba(0,0,0,0.5);

        @keyframes float {
        0% {
            transform: translate(-50%, -50%);
            transform: translate(-50%, -50%) scale(1.05);
        }
        50% {
            transform: translate(-50%, -48%);
            transform: translate(-50%, -48%) scale(1.025);
        }
        100% {
            transform: translate(-50%, -50%);
            transform: translate(-50%, -50%) scale(1.05);
        }

    }

    animation: float 2s ease-in-out infinite;
    }

    &>* {
        font-family: 'Montserrat', cursive;
        text-decoration: underline;
        text-decoration-color: gray;
    }

    &>h2,h3 {
        text-align: left;
        margin: 16px 4px;
        font-size: 20px;

        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: break-word;

        
    }

    &>h2 {
        font-size: 16px;
        margin: 32px 0px;
    }

    &>h1 {
        text-align: center;
    }

    &>h3 {
        font-size: large;
    }

    border-radius: 8px;
`