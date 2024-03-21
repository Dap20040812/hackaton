import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, TextColor } from '../../assets/Color';

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: 90%;
    margin-top: 5em;
    background-color: ${PrimaryColor};
    border: 8px solid ${PrimaryColor};
    border-radius: 110px 40px;
    margin-bottom: 3em;
    padding: 2em;

    @media (max-width: 1200px){
        padding: 1em;
    }
    @media (max-width: 1000px){
        flex-direction: column;
        padding: 0;
    }

    p {
        font-size: 2em;
        color: ${TextColor};
        text-align: center;
    }
`

export const Title = styled.h1`
    font-size: 8em;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: 1200px){
        font-size: 6em;
        width: 50%;
    }

    @media (max-width: 740px){
        font-size: 3.5em;
        width: 100%;
    }
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2{
        font-size: 2em;
        text-align: center;
    }

    @media (max-width: 1200px){
        width: 70%;

        p{
            font-size: 1.5em;
            text-align: center;
        }
    }   
`
export const Button = styled.button`
    background-color: white;
    color: black;
    border-radius: 10em;
    font-size: 1.5em;
    font-weight: 600;
    padding: 1em 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
    box-shadow: 0 0 0 0 black;
    font-family: Orbitron;

    &:hover {
        transform: translateY(-4px) translateX(-2px);
        box-shadow: 2px 5px 0 0 black;
    };

    &:active {
        transform: translateY(2px) translateX(1px);
        box-shadow: 0 0 0 0 black;

        };
`