import React, { useContext } from "react"
import styled from "styled-components"
import { animated } from "react-spring"
import { useMenuAnimation } from "./useMenuAnimation"
import { Link } from "gatsby"

import Caret from "./Caret"
import { NavbarContext } from "../navbarContext"

const Overlay = styled(animated.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: white;
    color: black;
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 100;
`

const NavbarControls = styled.div`
    height: 80px;
    padding: 28px 16px;
    display: flex;
    align-items: center;
`

const SubMenuBody = styled.ul`
    padding: 0 16px;
    list-style: none;
    & > li {
        padding: 24px 16px;
        font-size: 14px;
        font-weight: 800;
        border-top: 1px solid gray;
        line-height: 20px;
    }
    & > li:first-child {
        font-size: 16px;
        border-top: 1px solid gray;
        padding-left: 8px;
    }
`

const ItemLink = styled(Link)`
    display: block;
    text-decoration: none;
    line-height: 20px;
    color: inherit;
    :visited {
        color: inherit;
    }
`

function MobileSubMenu(props) {
    console.log('CHECKING SUBMENU PROPS')
    console.log(props)
    const { subMenuOpen, toggleSubMenu, chosenSubMenu } = useContext(
        NavbarContext
    )
    console.log(chosenSubMenu)
    const menuAnimation = useMenuAnimation(subMenuOpen)

    const subMenuItems =
        chosenSubMenu &&
        chosenSubMenu.length &&
        chosenSubMenu.map(item => {
            return (
                <li>


                    <ItemLink to={item.link}>
                        {item.name}
                    </ItemLink>

                </li>
            )
        })

    return (
        <Overlay style={menuAnimation}>
            <NavbarControls>
                <Caret onClick={toggleSubMenu} />
            </NavbarControls>
            <SubMenuBody>
                {/* {chosenSubMenu && <li>{chosenSubMenu.primary.label.text}</li>} */}
                {subMenuItems}
            </SubMenuBody>
        </Overlay>

    )
}

export default MobileSubMenu
