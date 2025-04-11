import { styled } from "styled-components"

export const Letter = styled.div.withConfig({shouldForwardProp: (prop) => prop !== 'isvisible'})<{ isvisible: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url('./images/Paper.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    width: 300px;
    height: 500px;

    cursor: pointer;

    box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
    transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 0.1s ease-in-out;
    transform-origin: center;
    
    opacity: ${(props) => props.isvisible ? 1 : 0};

    &:hover {
        transform: translate(-50%, -50%) scale(1.1);
        box-shadow: 0px 10px 20px rgba(0,0,0,0.5);

        @keyframes float {
        0% {
            transform: translate(-50%, -50%);
        }
        50% {
            transform: translate(-50%, -48%);
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }

    animation: float 2s ease-in-out infinite;
    }
`