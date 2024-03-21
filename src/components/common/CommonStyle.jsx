import styled from "styled-components";
import { PrimaryColor, SecondaryColor, TextColor } from "../../assets/Color";
export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${SecondaryColor};
    color: ${TextColor};
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2em;
    width: 90%;
    margin-top: 5em;
    background-color: ${PrimaryColor};
    border: 8px solid ${PrimaryColor};
    border-radius: 110px 40px;
    margin-bottom: 3em;
    @media (max-width: 1000px){
        flex-direction: column;
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

    @media (max-width: 1000px){
        font-size: 5em;
        width: 100%;
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
    padding: 2em;
    text-align: center;

    h2{
        font-size: 2em;
        text-align: center;
    }
`

export const ButtonRow = styled.div`
    display: flex;
    gap: 2em;
    margin-top: 2em;
    justify-content: center;
    align-items: center;
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

    &:hover {
        transform: translateY(-4px) translateX(-2px);
        box-shadow: 2px 5px 0 0 black;
    };

    &:active {
        transform: translateY(2px) translateX(1px);
        box-shadow: 0 0 0 0 black;

        };

    a {
        text-decoration: none;
        color: black;
    }
`