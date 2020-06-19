import React from "react"
import styled from "styled-components"
import {
    Container,
    BoxTitle,
    Paragraph,
    BeeHeader,
    CenteringContainer
} from "../../../styles/edustyles.js"

const Title = styled(BeeHeader)`
    margin-top: 0;
`
const BooksPublications = () => {
    return (
        <CenteringContainer>
            <Title>Books & Publications</Title>
        </CenteringContainer>
    )
}

export default BooksPublications