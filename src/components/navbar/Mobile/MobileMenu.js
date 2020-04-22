import React, { useContext } from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
// import Link from "../../shared/QueryLink"
import { NavbarContext } from "../navbarContext"
import MobileButton from "./MobileButton"
import MobilePrimaryMenu from "./MobilePrimaryMenu"
import MobileSubMenu from "./MobileSubMenu"

const Menu = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    /* Don't change position attr, as it will mess with mobile popover menu*/
    @media (min-width: 1000px) {
        display: none;
    }
`

const StyledLogoLink = styled(Link)`
    height: 100%;
    margin: 0;
    margin-right: auto;
    /* z-index: 500; */
`

const MobileLogo = styled.img`
    display: inline;
    max-height: 100%;
    @media (min-width: 1000px) {
        display: none;
    }
`

function MobileMenu(props) {
    console.log("CHECKING PROPS in MobileMenu")
    console.log(props)
    const { mainMenuOpen, toggleMainMenu, toggleSubMenu } = useContext(
        NavbarContext
    )

    function toggleBothMenus() {
        toggleMainMenu()
        toggleSubMenu()
    }


    return (
        <Menu>
            {/* <h1>This is the menu for now</h1> */}
             <MobileButton
                toggleMainMenu={toggleMainMenu}
                toggleBothMenus={toggleBothMenus}
                open={mainMenuOpen}
            />
            
            <MobilePrimaryMenu open={mainMenuOpen} items={props.menuLinks} />
            <MobileSubMenu items={[]} />
        </Menu>
    )
}

export default MobileMenu
