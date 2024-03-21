import React from 'react'
import { Button, ButtonRow, Container, Info, Section, Title } from '../common/CommonStyle'
import { Content, ContentColumn, LeftContent, LeftContentColumn, RightContent, RightContentColumn, TitleContent } from './ProjectStyle'

function Project() {
  return (
    <Container>
        <Content>
            <LeftContent>
                <TitleContent>Problema</TitleContent>
                <p>En Banco Siuu tenemos un sistema para crear cuentas para nuestros clientes, sin embargo detectamos un problema de seguridad muy grande: guardamos las contraseñas de nuestros usuarios sin ningún tipo de encriptación, por lo que si un hacker nos roba la información podrá acceder a la cuenta de todos nuestros clientes. Como banco es algo que no nos podemos permitir, por eso requerimos de su ayuda para solucionarlo.</p>
            </LeftContent>
            <RightContentColumn>
                <TitleContent>Objetivo</TitleContent>
                <p>Crear un sistema de encriptación para las contraseñas de nuestros clientes, que sea seguro y no sea vulnerable a ataques de fuerza bruta, para que nuestros clientes puedan dormir tranquilos sabiendo que su dinero está seguro.</p>
                <p>Para esto se debe definir un modelo de encriptación que permita encriptar y desencriptar las claves.</p>
            </RightContentColumn>
        </Content>
        <ContentColumn>
            <LeftContentColumn>
                <TitleContent>Código</TitleContent>
                <p>Se debe hacer entrega del código con el sistema actualizado, junto con el material de apoyo para la presentación, ya sea mediante un zip o un repositorio de GitHub antes que el contador llegue a 0. Si no se cumple con el tiempo serán descalificados.</p>
                <p>Todas las funciones deben funcionar correctamente y el equipo debe estar en la capacidad de explicar como funcionan.</p>
            </LeftContentColumn>
            <RightContent>
                <TitleContent>Presentación</TitleContent>
                <p>Se debe preparar una presentación de máximo 5 minutos en donde deberán explicar al Banco Siuuu porque su solución es la mejor para la empresa.</p>
                <p>Para la presentación se eligirá 1 integrante del grupo y tendrá 5 min para exponer. Es crucial manejar el tiempo de forma adecuada.</p>
            </RightContent>
        </ContentColumn>
        <Section>
            <Title>Proyecto Banco</Title>
            <Info>
                <p>El sistema actual está hecho en Java y lo encontrarán en un repositorio de GitHub. Lean detenidamente la guía en donde podrán ver una explicaión detallada de cada función del código y las funciones que deben modificar.</p>
                <ButtonRow>
                    <a href='https://github.com/Ritatrcr/BankHackaton' target='blank'> <Button>Código</Button></a>
                    <a href='https://unisabanaedu-my.sharepoint.com/:w:/g/personal/diegoprpr_unisabana_edu_co/ERW6NHegNXNLtRnrklaMWsoBRlB4U7-sjZZL2H90psl9qg?e=Vcj7GK' target='blank'><Button>Guía</Button></a>
                </ButtonRow>
            </Info>
        </Section>
    </Container>
  )
}

export default Project
