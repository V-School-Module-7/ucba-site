import React, { useContext } from "react"
import styled from "styled-components"
// import Link from "../../shared/QueryLink"
// import { animated } from "react-spring"
import { useMenuAnimation } from "./useMenuAnimation"

import Caret from "./Caret"
import { NavbarContext } from "../navbarContext"

// const Overlay = styled(animated.div)`
//     height: 100vh;
//     width: 100vw;
//     position: fixed;
//     background-color: yellow;
//     color: black;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     margin: 0;
//     padding: 0;
//     z-index: 100;
// `

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

// const ItemLink = styled(Link)`
//     display: block;
//     text-decoration: none;
//     line-height: 20px;
//     color: inherit;
//     :visited {
//         color: inherit;
//     }
// `


// const StyledButton = styled(Button)`
//     width: 100%;
//     height: 32px;
//     font-size: 12px;
//     padding: 0;
//     margin-top: 16px;
//     font-family: "Work Sans";
// `

function MobileSubMenu(props) {
    // const subMenuItems = props.items.map(subMenuItem, i) => {
    //   const { name, link } = subMenuItem
    // }

    const { subMenuOpen, toggleSubMenu, chosenSubMenu } = useContext(
        NavbarContext
    )

    const menuAnimation = useMenuAnimation(subMenuOpen)

    const subMenuItems =
        chosenSubMenu &&
        chosenSubMenu.items &&
        chosenSubMenu.items.map(item => {
            return (
                <li>
                   /
                    // : (
                        {/* // <ItemLink to={item.sub_nav_link.url}>
                        //     {item.sub_nav_link_label.text}
                        // </ItemLink> */}
                    // }
                </li>
            )
        })

    return (
        // <Overlay style={menuAnimation}>
        <>
            <NavbarControls>
                <Caret onClick={toggleSubMenu} />
            </NavbarControls>
            <SubMenuBody>
                {chosenSubMenu && <li>{chosenSubMenu.primary.label.text}</li>}
                {subMenuItems}
            </SubMenuBody>
        {/* </Overlay> */}
        </>
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
