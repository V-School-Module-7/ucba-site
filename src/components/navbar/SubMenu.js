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
    border: 1px solid black;
    top: 100%;
    position: absolute; 
    left: 0px;
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
const Container = styled.div`
    /* margin: 10px; */
    /* width: 350px;
    height: 103px; */
    background-color: transparent;
    /* border-color: transparent;
    background-clip: padding-box; */
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
    background-clip: padding; 
    /* background-clip: content; */  
    background-clip: content-box;
    /* border: 10px solid rgb(100, 100, 100); 
    border: 10px solid rgba(0, 0, 0, 0.0); */
    /* background-clip: padding-box; */
    /* border: 10px solid transparent; */
    /* border: 20px solid rgba(0, 0, 0, 0.09); */

    :hover {
        color: black;
        font-weight: bold;
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
            <Container>
            <SubMenuItem key={i}>
                <SubMenuLink as={Link} to={link}>
                {name}
                   
                </SubMenuLink>
            </SubMenuItem>
             </Container>
        )
    })
    return <SubMenuContainer>{subMenuItems}</SubMenuContainer>
}

export default SubMenu