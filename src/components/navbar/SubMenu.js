import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const SubMenuContainer = styled.ul`
    visibility: hidden; 
    display: none;
    z-index: 3;
    margin: 0%;
    padding: 0;
    background-color: #F5D75F;
    position: absolute;
    /* border: solid 1px black; */
    border-style: solid;
    /* border-color: transparent; */
    top: 100%;
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
    font-weight: lighter;
    width: 275px;
    height: 53px;
    left: 613px;
    top: 152px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px black;
    /* border-top: 2px black; */
    background-clip: padding-box;

    :first-child {
        /* margin-top: 36px;     */
    }
    :last-child {
        /* margin-bottom: 12px; */
    }
    :hover {
        color: black;
        font-weight: bold;
        /* background-color: orange; */
    }
`
const SubMenuLink = styled(Link)`
    display: block;
    text-decoration: none;
    line-height: 20px;
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