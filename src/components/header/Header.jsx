import React from 'react'
import { Hamburger, Left, Logo, MenuLink, Nav, NavMenu } from './HeaderStyle'

function Header() {

    const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Nav>
        <Left>
            <Logo  src='img/logoC.png' onClick={() => main()}/>
        </Left>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
        </Hamburger>
        <NavMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
            <MenuLink to={`/`}> <span>Inicio</span> </MenuLink>
            <MenuLink to={`/project`}> <span>Proyecto</span> </MenuLink>
        </NavMenu>
    </Nav>
  )
}

export default Header