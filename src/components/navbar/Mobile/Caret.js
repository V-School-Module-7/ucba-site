import React from "react"
import styled from "styled-components"

const CaretIcon = styled.i`
    border: solid black;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 4px;
    height: 10px;
    width: 10px;
    align-self: flex-start;
    transform: translateX(4px) rotate(135deg);
`

export default props => {
    return <CaretIcon {...props}></CaretIcon>
}