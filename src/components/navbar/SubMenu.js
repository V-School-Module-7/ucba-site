import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const SubMenuContainer = styled.ul`
    visibility: hidden;
    display: none;
    z-index: 3;
    margin: 0%;
    width: 210px;
    padding: 0 2px;
    background-color: #F5D75F;
    position: absolute;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
    top: 100%;
    left: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &::before {
        content: "";
        position: absolute;
        height: 10px;
        width: 10px;
        background-color: #F5D75F;
        top: 0;
        left: 10%;
        transform: translateY(-6.4px) rotate(45deg);
        border-width: 2px;
        border-style: solid;
        border-color: blue;
        border-bottom: none;
        border-right: none;

      
    }
    & ul:hover {
        visibility: visible;
        display: block;
        
  }
`

const SubMenuItem = styled.li`
    list-style: none;
    color: gray;
    font-size: 18px;
    :first-child {
        margin-top: 12px;
    }
    :last-child {
        margin-bottom: 12px;
    }
    :hover {
        color: black;
        background-color: gray;
    }
`
const SubMenuLink = styled(Link)`
     display: block;
    text-decoration: none;
    line-height: 20px;
    padding: 16px;
    color: inherit;

    :visited {
        color: inherit;
    }
`

function SubMenu( props ) {
    console.log(props)
    const subMenuItems = props.items.map((subMenuItem, i) => {
        const {
            name, link
        } = subMenuItem
        return (
            <SubMenuItem key={i}>
                <SubMenuLink as={Link} to={link}>
                {name}
                   
                </SubMenuLink>
            </SubMenuItem>
        )
    })
    return <SubMenuContainer>{subMenuItems}</SubMenuContainer>
}

export default SubMenu