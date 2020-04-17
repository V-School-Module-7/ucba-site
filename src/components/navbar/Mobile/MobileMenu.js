import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const Menu = styled.header`
    height: 100px;
    width: 100%;
    background-color: blue;
    z-index: 999;

    @media (min-width: 1000px){
        display: none;
        
    }
`

function MobileMenu() {
    return (
        <Menu>Mobile Menu</Menu>
    )
}

export default MobileMenu