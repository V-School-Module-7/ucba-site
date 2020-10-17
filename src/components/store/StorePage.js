import React from 'react'
import styled from 'styled-components'

import { GreenLineContainer, BeeButton} from "../../styles/edustyles.js"

const StorePage = () => {
    return (
        <div>
        <h1>Store</h1>
        <GreenLineContainer>Item1</GreenLineContainer>
<BeeButton>buy stuff here!</BeeButton>
        <h2>Item2</h2>
        <h2>Item3</h2>
        </div>

    )
}

export default StorePage