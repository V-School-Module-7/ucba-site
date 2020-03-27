import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const SubMenuContainer = styled.ul`
    /* visibility: hidden; 
    display: none; */
    z-index: 3;
    margin: 0%;
    padding: 0;
    background-color: #F5D75F;
    position: absolute;
    border: solid 2px black;
    border-style: solid;
    border-color: transparent;
    box-shadow: 0 0 0 50px rgba(150, 0, 0, 0.5);
    top: 100%;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    &::before {
        content: "";
        position: absolute;
        background-color: #F5D75F;
    }
    & ul:hover {
        visibility: visible;
        display: block;
  }
`

const SubMenuItem = styled.li`
    list-style: none;
    color: black;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    font-size: 18px;
    font-weight: lighter;
    width: 275px;
    height: 53px;
    left: 613px;
    top: 152px;
    display: flex;
    justify-content: center;
    background-clip: padding-box;
    border: 2px solid black;
    box-shadow: 0 0 0 50px rgba(150, 0, 0, 0.5);

    :first-child {
        /* margin-top: 12px; */
    }
    :last-child {
        /* margin-bottom: 12px; */
    }
    :hover {
        color: black;
        background-color: orange;
    }
`
const SubMenuLink = styled(Link)`
    display: block;
    text-decoration: none;
    line-height: 20px;
    padding: 16px;
    /* padding-left: -16; */
    margin: 0;
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