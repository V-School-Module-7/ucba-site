import React from 'react'
import styled from 'styled-components'

import DesktopMenu from './Desktop/DesktopMenu.js'
import MobileMenu from './Mobile/MobileMenu.js'

const Nav = styled.nav`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100px;
    background-color: magenta;
`


function Navbar(props) {
    return (
        <>
            <DesktopMenu menuLinks={props.menuLinks}/>
            <MobileMenu />
        </>
    )
}
export default Navbar