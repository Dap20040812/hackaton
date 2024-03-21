import styled from "styled-components";
import { PrimaryColor } from "../../assets/Color";

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 30em;

    @media (max-width: 740px){
        flex-direction: column;
    }
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    text-align: center;
    min-height: 30em;

    p {
        width: 80%;
        font-size: 1.5em;
        margin-bottom: 1em;
    }

    @media (max-width: 740px){
            width: 100%;
            p {
                font-size: 1em;
            }
        }
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    min-height: 30em;

    text-align: center;

    p {
        width: 80%;
        font-size: 1.5em;
        margin-bottom: 1em;
    }

    @media (max-width: 740px){
            width: 100%;
            p {
                font-size: 1em;
            }
    }

`;

export const TitleContent = styled.h1`
    font-size: 3em;
    text-align: center;
    margin-bottom: 1em;

    @media (max-width: 740px){
        font-size: 2em;
    }
`;

export const ContentColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 30em;
    gap: 2em;
    margin-top: 5em;

    @media (max-width: 740px){
        flex-direction: column-reverse;
    }
`;

export const LeftContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 45%;
    text-align: center;
    min-height: 30em;
    border-radius: 2em;
    border: 8px solid ${PrimaryColor};

    p {
        width: 80%;
        font-size: 1.5em;
        margin-bottom: 1em;
    }

    @media (max-width: 740px){
            width: 90%;
            p {
                font-size: 1em;
            }
        }
`;

export const RightContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 45%;
    min-height: 30em;
    border-radius: 2em;
    border: 8px solid ${PrimaryColor};

    text-align: center;

    p {
        width: 80%;
        font-size: 1.5em;
        margin-bottom: 1em;
    }

    @media (max-width: 740px){
            width: 90%;
            p {
                font-size: 1em;
            }
    }

`;  