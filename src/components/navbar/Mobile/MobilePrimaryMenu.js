import React, { useContext } from "react"
import styled from "styled-components"
import { animated } from "react-spring"
import { NavbarContext } from "../navbarContext"
import MobilePrimaryMenuItem from "./MobilePrimaryMenuItem"
import { useMenuAnimation } from "./useMenuAnimation"

const Overlay = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: white;
  top: 80px; /* Height of the navbar */
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 100;
  margin-top: 12px;
`

const Ul = styled.ul`
  padding: 0 16px;
`

function MobilePrimaryMenu({ open, items }) {
  const menuAnimation = useMenuAnimation(open)

  const menuItems = items.map(item => (
    <MobilePrimaryMenuItem key={item.name} data={item} />
  ))
  //
  return (
    <Overlay style={menuAnimation}>
      <Ul>{menuItems}</Ul>
    </Overlay>
  )
}

export default MobilePrimaryMenu
