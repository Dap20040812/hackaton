import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CDT, DContainer, Number, Puntos, Tiempo } from './CountDownTimerStyle'

function CountdownTimer({deadline}) {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num
  }

const getTimeUntil = (deadline) => {
    const time = (Date.parse(deadline) - Date.parse(new Date())) + 5.04e+7 + (1 * 60 * 60 * 1000);

    if (time < 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    } else {
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }
}

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <CDT>
        <DContainer>
        <Number>{leading0(days)}</Number>
        <Tiempo>Días</Tiempo>
        </DContainer>

        <Puntos>:</Puntos>

        <DContainer>
        <Number>{leading0(hours)}</Number>
        <Tiempo>Horas</Tiempo>
        </DContainer>

        <Puntos>:</Puntos>

        <DContainer>
        <Number>{leading0(minutes)}</Number>
        <Tiempo>Minutos</Tiempo>
        </DContainer>

        <Puntos>:</Puntos>

        <DContainer>
        <Number>{leading0(seconds)}</Number>
        <Tiempo>Segundos</Tiempo>
        </DContainer>
        
    </CDT>
  )
}

export default CountdownTimer

