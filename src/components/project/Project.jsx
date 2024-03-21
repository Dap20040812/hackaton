import React from 'react'
import { Button, ButtonRow, Container, Info, Section, Title } from '../common/CommonStyle'
import { Content, ContentColumn, LeftContent, LeftContentColumn, RightContent, RightContentColumn, TitleContent } from './ProjectStyle'

function Project() {
  return (
    <Container>
        <Content>
            <LeftContent>
                <TitleContent>Problema</TitleContent>
                <p>En Banco Siuu creamos un sistema para crear cuentas para nuestros clientes, pero tenemos un problema de seguridad muy grande, ya que guardamos las contraseñas de nuestros usuarios sin ningún tipo de encriptación, por lo que si un hacker nos roba la información podrá acceder a la cuenta de todos nuestros clientes, como banco es algo que no nos podemos permitir, por eso requerimos de su ayuda para solucionarlo.</p>
            </LeftContent>
            <RightContentColumn>
                <TitleContent>Objetivo</TitleContent>
                <p>Crear un sistema de encriptación para las contraseñas de nuestros clientes, que sea seguro y no sea vulnerable a ataques de fuerza bruta, para que nuestros clientes puedan dormir tranquilos sabiendo que su dinero está seguro.</p>
                <p>Para esto se debe definir un modelo de encriptación que me permita encriptar y desencriptar las claves.</p>
            </RightContentColumn>
        </Content>
        <ContentColumn>
            <LeftContentColumn>
                <TitleContent>Código</TitleContent>
                <p>Se debe hacer entrega del proyecto con el sistema actualizado ya sea mediante un zip o un repositorio de github antes que el contador llegue a 0, si no se cumple con el tiempo serán descalificados.</p>
                <p>Todas las funciones deben funcionar correctamente y el equipo debe estar en la capacidad de explicar como funcionan.</p>
            </LeftContentColumn>
            <RightContent>
                <TitleContent>Presentación</TitleContent>
                <p>Se debe preparar una presentación de 5 minutos en donde deberán explicar al Banco Siuuu porque su solución es la mejor para la empresa, una vez el contador llegue a cero deberán pasar a exponer.</p>
                <p>Para la presentación podrá pasar la personas que quieran del grupo, pero a los 5 min se pausara la presentación, por lo que tienen que saber manejar correctamente el tiempo</p>
            </RightContent>
        </ContentColumn>
        <Section>
            <Title>Proyecto Banco</Title>
            <Info>
                <p>El sistema actual está en hecho en Java y lo encontraran en un repositorio de github, lean detenidamente el proyecto y encontraran las dos funciones que deben implementar.</p>
                <a href='https://github.com/Ritatrcr/BankHackaton' target='blank'> <Button>Proyecto</Button></a>
            </Info>
        </Section>
    </Container>
  )
}

export default Project
