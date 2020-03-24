import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledLink = styled(Link)`
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

  :visited{
    color: black
  };
  :hover{
    background-color: #F5D75F;
  }
  @media (min-width: 500px) {
  }
`

export default function MenuLink(props) {
    console.log(props)
    return (
         
          <li 
              key={props.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >

            <StyledLink to={props.link}>
              {props.name}
              
            </StyledLink>
            </li>
        
    )
}