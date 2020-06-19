import React from "react"
import styled from "styled-components"
import {
    Container,
    GreenLineContainer,
    BoxTitle,
    Paragraph,
    BeeHeader,
    CenteringContainer
} from "../../../styles/edustyles.js"

const Green = styled(GreenLineContainer)`
    padding-bottom: 0;
`

const ReadingsIntro = () => {
    return (
        <Container>
            <Green>
                <BoxTitle>Suggested Readings</BoxTitle>
                <Paragraph>Listed in our guide below are recommended books and articles that will help you learn more about a variety of topics related to beekeeping, bees, honey and other aspects of the culture.</Paragraph>

                <Paragraph>Click the links to view the individual articles. Most are in PDF format so you will need a reader to view them.</Paragraph>

                <Paragraph>Feel free to submit your recommendations or book reviews to ut.co.beekeepers@gmail.com.</Paragraph>
            </Green>
        </Container>
    )
}

export default ReadingsIntro