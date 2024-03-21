import styled from "styled-components";
import { PrimaryColor, SecondaryColor } from "../../assets/Color";

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 95%;
    min-height: 30em;
    gap: 2em;

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
    width: 95%;
    min-height: 30em;
    gap: 2em;
    margin-top: 2em;

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

export const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 30em;

  @media (max-width: 740px){
    width: 90%;
  }
`;

export const TitleCard = styled.h2`
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFront = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid ${PrimaryColor};
  border-radius: 1rem;
  background: linear-gradient(120deg, ${SecondaryColor} 60%, ${SecondaryColor} 88%, ${SecondaryColor} 40%, ${PrimaryColor} 78%);
`;

export const FlipCardBack = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 4px solid ${PrimaryColor};
  border-radius: 1rem;
  background: linear-gradient(120deg,${PrimaryColor} 30%,${PrimaryColor} 88%, ${PrimaryColor} 40%, ${SecondaryColor} 78%);
  color: white;
  transform: rotateY(180deg);

    p {
        width: 80%;
    }
`;

export const FlipCardFront2 = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid ${PrimaryColor};
  border-radius: 1rem;
  background: linear-gradient(120deg,${PrimaryColor} 30%,${PrimaryColor} 88%, ${PrimaryColor} 40%, ${SecondaryColor} 78%);
`;

export const FlipCardBack2 = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 4px solid ${PrimaryColor};
  border-radius: 1rem;
  background: linear-gradient(120deg, ${SecondaryColor} 60%, ${SecondaryColor} 88%, ${SecondaryColor} 40%, ${PrimaryColor} 78%);
  color: white;
  transform: rotateY(180deg);

    p {
        width: 80%;
    }
`;