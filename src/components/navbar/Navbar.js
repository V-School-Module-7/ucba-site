import React, { Fragment } from 'react'
import styled from 'styled-components'


import DesktopMenu from './Desktop/DesktopMenu.js'
import MobileMenu from './Mobile/MobileMenu.js'
import { NavbarContextProvider } from './navbarContext'

// const Nav = styled.nav`
//     position: fixed;
//     display: flex;
//     width: 100%;
//     height: 100px;
//     background-color: magenta;
// `


function Navbar(props) {
    console.log(props)
    return (
        <Fragment>
            <DesktopMenu menuLinks={props.menuLinks} />
            <NavbarContextProvider>
                <MobileMenu menuLinks={props.menuLinks} />
            </NavbarContextProvider >
        </Fragment>
    )
}
export default Navbar