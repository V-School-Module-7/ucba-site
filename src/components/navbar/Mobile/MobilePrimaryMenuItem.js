import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// import Link from "../../shared/QueryLink"
import Arrow from '../Arrow'

import { NavbarContext } from "../navbarContext"

const MenuItem = styled.li`
    list-style: none;
    font-size: 18px;
    line-height: 18px;
    color: black;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    &:first-child {
        border-top: 1px solid gray;
    }
`

const Item = styled.span`
    padding: 24px;
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    cursor: pointer;
`

const StyledArrow = styled(Arrow)`
    transform: rotate(-90deg);
`

function MobilePrimaryMenuItem({ data }) {
    // console.log("CHECKING MobilePrimaryMenuItem")
    // console.log(data)
    const { toggleSubMenu, setChosenSubMenu } = useContext(NavbarContext)

    function handleClick() {
        setChosenSubMenu(data.sublinks)
        toggleSubMenu()
    }

    return (
        <MenuItem>

            {/* {!data.sublinks.length ? (
                <Item as={Link} to={data.link}>
                    {data.name}
                </Item>
            ) : ( */}
            <Item onClick={handleClick}>{data.name}</Item>
            {/* )} */}

            {/* {data.sublinks.length > 0 && <StyledArrow />} */}
        </MenuItem>
    )
}

export default MobilePrimaryMenuItem



// const Menu = styled.div`
//     display: flex;
//     height: 100%;
//     width: 100%;
//     justify-content: space-between;
//     /* Don't change position attr, as it will mess with mobile popover menu*/
//     @media (min-width: 1000px) {
//         display: none;
//     }
// `

// const StyledLogoLink = styled(Link)`
//     height: 100%;
//     margin: 0;
//     margin-right: auto;
//     /* z-index: 500; */
// `

// const MobileLogo = styled.img`
//     display: inline;
//     max-height: 100%;
//     @media (min-width: 1000px) {
//         display: none;
//     }
// `

// function MobileMenu(menuLinks) {
//     const { mainMenuOpen, toggleMainMenu, toggleSubMenu } = useContext(
//         NavbarContext
//     )

//     function toggleBothMenus() {
//         toggleMainMenu()
//         toggleSubMenu()
//     }

//     const Menu = styled.header`
//     height: 100px;
//     width: 100%;
//     background-color: blue;
//     z-index: 999;
//     display: flex;
//     flex-direction: row;
//     text-transform: capitalize;

//     @media (min-width: 1000px){
//         display: none;

//     }
// `

// function MobileMenu({ menuLinks }) {
//     return (
//         <Menu>
//             {menuLinks.map(link => (
//                 <MobileMenuLink {...link} />
//             ))}
//         </Menu>
//     )
// }

// export default MobileMenu