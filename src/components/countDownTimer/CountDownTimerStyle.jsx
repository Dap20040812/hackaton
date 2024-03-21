import styled from "styled-components"
import { TextColor } from "../../assets/Color"

const CDT = styled.div `
  margin-top: 4em;
  height: max-content;
  width: max-content;
  display: flex;
`

const DContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Puntos = styled.div `
  font-size: 11vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4vmax;
  color: #F2F3ED;
`

const Number = styled.div `
  margin: 0 2vmin;
  font-size: 15vmin;
  color: ${TextColor};
  font-weight: 700;
`

const Tiempo = styled.div `
  font-size: 4.25vmin;
  color: #F2F3ED;
`

export { CDT, DContainer, Puntos, Number, Tiempo }