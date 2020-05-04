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

            {!data.sublinks.length ? (
                <Item as={Link} to={data.link}>
                    {data.name}
                </Item>
            ) : (
                    <Item onClick={handleClick}>{data.name}</Item>
                )}

            {data.sublinks.length > 0 && <StyledArrow />}
        </MenuItem>
    )
}

export default MobilePrimaryMenuItem