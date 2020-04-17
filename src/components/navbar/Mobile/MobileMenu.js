import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MobileMenuLink from './MobileMenuLink'


const Menu = styled.header`
    height: 100px;
    width: 100%;
    background-color: blue;
    z-index: 999;
    display: flex;
    flex-direction: row;
    text-transform: capitalize;

    @media (min-width: 1000px){
        display: none;
        
    }
`
// const MobileMenuList = styled.ul`
//     width: 100%;
//     height: 100%;
  
// `

function MobileMenu({ menuLinks }) {
    console.log(menuLinks)
    return (
        <Menu>
            {menuLinks.map(link => (
            <MobileMenuLink {...link} />
          ))}
        </Menu>
    )
}

export default MobileMenu