import styled from "styled-components";

interface Props {
    posx: number
    posy: number
    drag: string
    size: number
}

export const Camera = styled.div`
    height: 100vh;
    width: 100vw;

    overflow: hidden;

    *{
        user-select: none;
    }
`

export const World = styled.div<Props>`
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    position: relative;
    background-color: #222;

    transform: translate(${props => props.posx}px, ${props => props.posy}px);

    cursor: ${props => props.drag == "true" ? 'grabbing' : 'grab'};
`

export const Hi = styled.h1`
    transform: translate(0, 0);
`

export const WriteLetter = styled.div`
    position: fixed;
    top: 95%;
    left: 95%;
    transform: translate(-95%, -95%);
    background-color: transparent;

    &>img {
        width:80px;
        height:80px;

        cursor: pointer;
    }
`

export const Input = styled.input`
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 4px;
`

export const Message = styled.textarea`
    height:120px;
    width: 100%;
    border: none;
    border-radius: 4px;
`

export const CreateLetter = styled.button`
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 4px;
`

export const Form = styled.form`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    flex-direction: column;

    background-color: rgba(255, 255, 255, 0.1);
    padding: 32px;
    border: 4px solid white;
    border-radius: 8px;

    backdrop-filter: blur(4px);


    &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:16px;

        margin-top: 16px;

        &>input, button, textarea {
            padding: 8px;
            font-size: 18px;
        }
    }
`