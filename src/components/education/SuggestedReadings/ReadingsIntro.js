import React from "react"
// import styled from "styled-components"
import {
    Container,
    GreenLineContainer,
    BoxTitle,
    HeaderParagraph
} from "../../../styles/globalstyles.js"

const ReadingsIntro = () => {
    return (
        <Container>
            <GreenLineContainer>
                <BoxTitle>Suggested Readings</BoxTitle>

                <HeaderParagraph>Listed in our guide below are recommended books and articles that will help you learn more about a variety of topics related to beekeeping, bees, honey and other aspects of the culture.</HeaderParagraph>

                <HeaderParagraph>Click the links to view the individual articles. Most are in PDF format so you will need a reader to view them.</HeaderParagraph>

                <HeaderParagraph>Feel free to submit your recommendations or book reviews to ut.co.beekeepers@gmail.com.</HeaderParagraph>
                </GreenLineContainer>
        </Container>
    )
}

export default ReadingsIntro