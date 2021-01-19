import React from "react"
import styled from "styled-components"

import { BeeHeader, Container, GreenLineContainer, BoxTitle, HeaderParagraph, Paragraph } from "../../styles/globalstyles.js"

const Pgraph = styled(Paragraph)`
@media (min-width: 900px) {
    margin: 10px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -0.5px;
}  
`

const BHeader = styled(BeeHeader)`
    display: block;
    margin-bottom: 2%;
    padding-bottom: 1.5%;

    @media (max-width: 500px) {
        margin-top: 8%;
    }
`

const Sponsor = () => {
    return (
        <Container>
            <GreenLineContainer>
                <BoxTitle>Sponsors</BoxTitle>
                <HeaderParagraph>The following are people and organizations that have made donations to the association's Bee a Beekeepers program. These donations help us to fund and run the program to the benefit of our youth. They recognize the importance of honeybees as pollinators and the critical need to involve our youth to ensure beekeeping's continued success. Please visit their pages, emails or, where applicable, their businesses to support their support of this great program.</HeaderParagraph>
            </GreenLineContainer>

            <BHeader>Equipment/Bees</BHeader>
            <Pgraph>Stephen Briles - equipment, time and mentoring.</Pgraph>
            <Pgraph>Knight Family Honey - packages, equipment, time and mentoring.</Pgraph>
            <Pgraph>Olivarez Honey Bees - packages.</Pgraph>
            <Pgraph>CF Koehnen and Sons - packages.</Pgraph>
            <Pgraph>Wild Attitude! Apiaries - equipment, time and mentoring.</Pgraph>

            <BHeader>Goods/Services</BHeader>
            <Pgraph>V School - Alumni, students, and staff oversaw, designed, and developed our website:</Pgraph>
            <Pgraph>Project Management: Alan Triacca, Laney Kawaguchi</Pgraph>
            <Pgraph>Development: Nate Jensen, Sarah Aldous, Bradley Mulick, and Colby Prather</Pgraph>
            <Pgraph>Design: Joey Johnston, Alex Terese</Pgraph>
            <br></br>
            <Pgraph>Sprinkler World - Donated our Banner and Educational Poster.</Pgraph>
            <Pgraph>Tahitian Noni - provides advice through their Legal Dept.</Pgraph>



        </Container>
    )
}

export default Sponsor