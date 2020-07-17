import React from "react"
import styled from "styled-components"
import {
    Container,
    GreenLineContainer,
    BoxTitle,
    HeaderParagraph,
    CornerContainer
} from "../../../styles/edustyles.js"

// const CornerOutline = styled.div`
// position: absolute;
// left: 99.98%;
// right: -99.98%;
// top: 0%;
// bottom: 100%;

// border: 4px solid #63966A;
// transform: rotate(90deg);

// position: relative;
// width: 90px;
// height: 90px;

// transform: rotate(-180deg);

// position: absolute;
// left: 99.98%;
// right: -99.98%;
// top: 0%;
// bottom: 100%;

// border: 4px solid #63966A;
// transform: rotate(90deg);

// position: absolute;
// left: 0%;
// right: 0%;
// top: 99.99%;
// bottom: 0.01%;

// /* Green */
// border: 4px solid #63966A;

// `

const ReadingsIntro = () => {
    return (
        <Container>
            {/* <CornerContainer> */}
            <GreenLineContainer>
                <BoxTitle>Suggested Readings</BoxTitle>

                <HeaderParagraph>Listed in our guide below are recommended books and articles that will help you learn more about a variety of topics related to beekeeping, bees, honey and other aspects of the culture.</HeaderParagraph>

                <HeaderParagraph>Click the links to view the individual articles. Most are in PDF format so you will need a reader to view them.</HeaderParagraph>

                <HeaderParagraph>Feel free to submit your recommendations or book reviews to ut.co.beekeepers@gmail.com.</HeaderParagraph>
                {/* </CornerContainer> */}
                </GreenLineContainer>
        </Container>
    )
}

export default ReadingsIntro