import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;

    z-index: 1;
    background-color: red;

    * {
        border: none;
        border-radius: 4px;
    }
`

export const Pause = styled.button`
    background-color: white;
    text-align: center;

    width: 64px;
    height: 64px;
    margin: 0;
`

export const Arrow = styled.button`
    background-color: black;
    color: white;

    width: 32px;
    height: 32px;
`