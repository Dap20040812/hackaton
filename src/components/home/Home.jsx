import React from 'react'
import { Container } from '../common/CommonStyle'
import CountdownTimer from '../countDownTimer/CountDownTimer'
import { Button, Info, Section, Title } from './HomeStyle'
import { useNavigate } from 'react-router-dom'

function Home() {
  let deadline = "March, 21, 2024"

  const navigate = useNavigate()

  return (
    <Container>
      <CountdownTimer deadline={deadline} />
      <Section>
        <Title>Hackaton</Title>
        <Info>
        <Info>
                <p>¿Podrás ayudar al Banco Siuuu a encontrar la mejor solución?</p>
                <Button onClick={() => navigate('/project')}>Comenzar</Button>
            </Info>
        </Info>
      </Section>
    </Container>
  )
}

export default Home