import React, { useContext } from "react"
import styled from "styled-components"
import { animated } from "react-spring"
import { useMenuAnimation } from "./useMenuAnimation"
import {Link} from "gatsby"

import Caret from "./Caret"
import { NavbarContext } from "../navbarContext"

const Overlay = styled(animated.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #F5D75F;
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



// import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"

// const SubMenuContainer = styled.ul`
//   visibility: hidden;
//   display: none;
//   z-index: 3;
//   margin: 0%;
//   padding: 0;
//   position: absolute;
//   top: 100%;
//   position: absolute;
//   left: 0px;
//   &::before {
//     content: "";
//     position: absolute;
//     background-color: #f5d75f;
//   }
//   & ul:hover {
//     visibility: visible;
//     display: block;
//   }
// `

// const SubMenuItem = styled.li`
//   list-style: none;
//   color: black;
//   background-color: #f5d75f;
//   font-weight: lighter;
//   width: 275px;
//   height: 53px;
//   left: 613px;
//   top: 152px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2px;
//   background-clip: padding;
//   background-clip: content-box;

//   :hover {
//     color: black;
//     font-weight: bold;
//   }
// `
// const SubMenuLink = styled(Link)`
//   display: block;
//   text-decoration: none;
//   line-height: 20px;
//   margin: 0;
//   color: inherit;

//   :visited {
//     color: inherit;
//   }
// `

// function MobileSubMenu(props) {
//   const subMenuItems = props.items.map((subMenuItem, i) => {
//     const { name, link } = subMenuItem
//     return (
//       <SubMenuItem key={i}>
//         <SubMenuLink as={Link} to={link}>
//           {name}
//         </SubMenuLink>
//       </SubMenuItem>
//     )
//   })
//   return <SubMenuContainer>{subMenuItems}</SubMenuContainer>
// }

// export default MobileSubMenu
