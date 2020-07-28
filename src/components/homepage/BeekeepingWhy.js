import React from "react"
import styled from "styled-components"
import {
    BeeHeader,
    Container,
    CenteringContainer,
    Paragraph
} from "../../styles/edustyles.js"

// import HomepageBackground from "../../images/HomepageBackground"



const BeekeepingWhy = () => {
    return (

        <Container 
        >
            <CenteringContainer>
            <BeeHeader>Why Beekeeping?</BeeHeader>
                <Paragraph>Many different people keep bees for many different reasons, the most important one being pollination. Bee pollination is needed for the production of about one-third of our food crops.  Beekeepers also raise bees for their honey production and numerous hive by-products, including wax, royal jelly, pollen and, yes, even venom!</Paragraph>

                <Paragraph>Read more about being a beekeeper in our guide below!</Paragraph>
            </CenteringContainer>
        </Container>

    )
}

export default BeekeepingWhy