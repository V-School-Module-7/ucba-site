import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { NavbarContext } from "../navbarContext"
import MobileButton from "./MobileButton"
import MobilePrimaryMenu from "./MobilePrimaryMenu"
import MobileSubMenu from "./MobileSubMenu"
import Logo from "../../logo"

const Menu = styled.div`
  display: flex;
  height: 75px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  text-transform: uppercase;
  /* Don't change position attr, as it will mess with mobile popover menu*/
  @media (min-width: 1000px) {
    display: none;
  }
`

const StyledLogoLink = styled(Link)`
  // height: 40px;
  // margin: 0;
  // margin-right: auto;
  margin-left: 10px;
  margin-top: 14px;
`

function MobileMenu(props) {
  const { mainMenuOpen, toggleMainMenu, toggleSubMenu } = useContext(
    NavbarContext
  )

  function toggleBothMenus() {
    toggleMainMenu()
    toggleSubMenu()
  }

  return (
    <Menu>
      <StyledLogoLink to="/" onClick={() => mainMenuOpen ? toggleMainMenu() : undefined}>
        <Logo />
      </StyledLogoLink>

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
