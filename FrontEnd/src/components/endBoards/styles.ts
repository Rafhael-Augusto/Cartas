import styled from "styled-components"

export const Wrapper = styled.div`
    * {
        pointer-events: none;
        z-index: 5;
    }
`

export const TopBoard = styled.div`
    position: fixed;
    background-color: black;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
    padding: 30px;
    width: 10000px;

    top: 0;
`
export const BottomBoard = styled.div`
    position: fixed;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    padding: 30px;
    width: 10000px;

    bottom: 0;
`
export const LeftBoard = styled.div`
    position: fixed;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);
    padding: 30px;

    height: 10000px;

    left: 0;
`
export const RightBoard = styled.div`
    position: fixed;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.6), transparent);
    padding: 30px;
    height: 10000px;

    right: 0;
`