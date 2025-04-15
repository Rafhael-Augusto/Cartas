import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    &> h1 {
        text-align: center;
        background-color: rgb(0, 0, 0, 0.5);
        width: 100%;

        color: white;
    }
`