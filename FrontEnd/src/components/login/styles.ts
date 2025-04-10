import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    background-color: rgb(33, 72, 192);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width:100%;
    height:100%;

    @media (min-width: 1025px) {
        background-image: url(/images/backgrounds/Desktop.png);
    }
    @media (max-width: 1024px) {
        background-image: url(/images/backgrounds/Tablet.png);
    }
    @media (max-width: 768px) {
        background-image: url(/images/backgrounds/MediumPhone.png);
    }
    @media (max-width: 425px) {
        background-image: url(/images/backgrounds/SmallPhone.png);
    }
`

export const LogInInfo = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    max-width: 1024px;
    width: 100%;
    height: 100vh;
`

export const ImageDiv = styled.div`
    display: flex;
    align-items: center;

    border: 2px, solid, white;
    border-radius: 4px;

    padding: 12px;
    gap: 16px;

    max-width: 300px;
    max-height: 45px;

    width:100%;
    height:100%;

    input {
        border: none;
        outline: none;
        background-color: transparent;
        color: white;

        font-size: 14px;
        font-weight: 320;
        font-family: 'Montserrat';

        &::placeholder {
            color:white;
        }

        &:focus {
            border: 2px solid white;
            border-radius: 4px;
            padding: 2px;
            font-size: 16px;

            &::placeholder {
                font-weight: 450;
                font-size: 16px;
            }
        }
    }
`

export const Image = styled.img`
    max-width: 20px;
    max-height: 20px;

    width:100%;
    height:100%;
`

export const Logo = styled.img`
    max-width: 80px;
    max-height: 80px;

    width: 100%;
    height: 100%;

    margin-bottom: 40px;
`

export const ValidateForm = styled.button`
    background-color: white;
    color: rgb(33, 72, 192);
    outline-color: rgb(7, 56, 202);

    box-shadow:  0 8px 4px rgba(0,0,0,0.5);

    margin-top: 24px;
    border: none;
    border-radius: 4px;

    font-family: 'Montserrat';
    font-weight: bold;

    max-width:300px;
    max-height:45px;

    width:100%;
    height:100%;

    cursor: pointer;

    &:focus {
        font-size: 16px;
        font-weight: bolder;
    }
`

export const CreateAccount = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    text-align: end;

    max-width: 300px;
    width: 100%;
    height: 0%;

    button {
        background-color: transparent;

        color: white;
        border: none;
        
        cursor: pointer;

        &:focus {
            font-size: 16px;
            outline-color: white;
        }
    }
`