import React, { Fragment } from 'react'

import DesktopMenu from './Desktop/DesktopMenu.js'
import MobileMenu from './Mobile/MobileMenu.js'
import { NavbarContextProvider } from './navbarContext'


function Navbar(props) {
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