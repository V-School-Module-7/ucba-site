import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import SubMenu from './SubMenu'

const StyledLink = styled(Link)`
  color: black;
  position: relative;
  display: flex;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  font-size: 20px;

  /* :visited{
    color: black
  };
  :hover{
    background-color: #F5D75F;
  } */
`
const StyledLi = styled.li`
  color: black;
  position: relative;
  display: flex;
  align-items: flex-end;
  list-style: none;
  padding: 10px 16px;
  margin: 0;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  font-size: 20px;
    list-style-type: none;
    padding: 1rem;
   
    &:hover {
        cursor: pointer;
        background-color: #F5D75F;
    }
    &:hover > ul,
    & ul:hover {
        visibility: visible;
        display: block;

  }
`
const StyledSpan = styled.span`
  display: inline-block;
`

export default function MenuLink(props) {
    // console.log(props.sublinks)
    return (
          <StyledLi key={props.name}>
            {props.link ? (
              <StyledLink to={props.link}>
                {props.name}
              </StyledLink>
            ) : (
              <span>{props.name}</span>
            )}
              {props.sublinks.length > 0 && (
                <SubMenu items={props.sublinks} />
              )}
            </StyledLi>
    )
}