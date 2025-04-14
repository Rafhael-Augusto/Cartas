import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 8px;
    left: 8px;

    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    padding: 4px;

    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    border: 2px solid white;
    border-radius: 4px;

    * {
        border: none;
        border-radius: 4px;
    }

    &> input {
        height: 24px;
        width: 80px;
        padding: 4px;
        text-align: center;


        &::placeholder {
            text-align: center;
            width: 100%;
        }
    }

    &> div {
        display:flex;
        align-items: center;
        gap: 4px;
    }
`

export const Pause = styled.button`
    background-color: white;
    text-align: center;

    width: 40px;
    height: 40px;
    margin: 0;
`

export const Arrow = styled.button`
    background-color: black;
    color: white;

    width: 32px;
    height: 32px;
`