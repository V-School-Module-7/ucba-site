import React from "react"
import styled from "styled-components"
import {
    Container,
    Paragraph,
    BeeHeader,
    CenteringContainer,
    BeeLink
} from "../../../styles/edustyles.js"

const Title = styled(BeeHeader)`
    margin-top: 0;
    font-size: 36px;

    @media (max-width: 900px) {
        font-size: 30px;
    }
    
    @media (max-width: 500px) {
        font-size: 24px;
    }
`

const BHeader = styled(BeeHeader)`
    display: block;
    margin-bottom: 2%;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;

    @media (max-width: 900px) {
        font-size: 24px;
    }

    @media (max-width: 500px) {
        margin-top: 8%;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4%;
    }
`

const BooksPublications = () => {
    return (
        <Container>
            <CenteringContainer>
                <Title>Books & Publications</Title>
            </CenteringContainer>

            <BHeader>Honey</BHeader>

            <Paragraph><i>Cooking with Honey</i> by Hazel Berto, 1972, <i>Gramercy</i></Paragraph>
            <Paragraph><i>Honey: BeesOnline Recipe Book</i> by Maureen Maxwell, 2003, <i>BeesOnline</i></Paragraph>

            <BHeader>Bees</BHeader>

            <Paragraph><i>Orchid Bees of Tropical America: Biology and Field Guide</i> by David Roubik and Paul E. Hansen, 2004, <i>InBio</i></Paragraph>
            <Paragraph><i>The World of Bees</i> by Murray Hoyt, 1965, <i>Bonanza Books</i></Paragraph>
            <Paragraph><i>The Buzz About Bees: Biology of a Superorganism</i> by Jurgen Tautz, 2007, <i>Springer</i></Paragraph>
            <Paragraph><i>Bees of the World</i> by Christopher O’Toole and Anthony Raw, 1991, <i>Facts On FIle</i></Paragraph>

            <BHeader>Beginning Beekeeping</BHeader>
            <Paragraph><i>Beekeeping for Dummies</i> by Howland Blackiston, 2002, <i>Hungry Minds</i></Paragraph>

            <Paragraph><i>First Lessons in Beekeeping</i> by C.P. Dadant, 1938, <i>Dadant and Sons</i></Paragraph>

            <Paragraph><i>The Beekeeper’s Handbook</i> by Diana Sammataro and Alphonse Avitabile, 2011, <i>Collier Books</i></Paragraph>

            <Paragraph><i>The Classroom: Beekeeping Questions and Answers</i> by Jerry Hayes, 1998, <i>Dadant and Sons</i></Paragraph>

            <BHeader>Intermediate Beekeeping</BHeader>
            <Paragraph><i>At the Hive Entrance</i>  by H. Storch, 1985, <i>European Apicultural Editions</i></Paragraph>

            <BHeader>Advanced Beekeeping</BHeader>
            <Paragraph><i>The Biology of the Honey Bee</i> by Mark L. Winston, 1987,  <i>Harvard University Press</i></Paragraph>

            <BHeader>Hive Products</BHeader>
            <Paragraph><i>Honey Plants</i>  by Harvey Lovell, 1977, <i>Gleaning in Bee Culture</i></Paragraph>
            <Paragraph><i>CANDLES THAT EARN: Creating and Operating Your Own Successful Candle Business</i> by Don Olsen, 1991,  <i>Peanut Butter Publishing</i></Paragraph>
            <Paragraph><i>Propolis: Nature’s Energizer</i>  by Carlson Wade, 1983, <i>Keats Publishing</i></Paragraph>
            <Paragraph><i>The Royal Jelly Miracle</i> by Reynaud Allen, John B. Lust, 1991,  <i>Benedict Lust Publications</i></Paragraph>
            <Paragraph><i>Health and the Honey Bee</i> by Charles Mraz, 1995,  <i>Queen City Publications</i></Paragraph>

            <BHeader>Magazines</BHeader>
            <Paragraph><i><BeeLink href="https://www.beeculture.com/" target="_blank" rel="noopener noreferrer">Bee Culture - https://www.beeculture.com/</BeeLink></i></Paragraph>
            <Paragraph><i><BeeLink href="https://www.dadant.com/journal/" target="_blank" rel="noopener noreferrer">American Bee Journal - https://www.dadant.com/journal/</BeeLink></i></Paragraph>

            <BHeader>Miscellaneous</BHeader>
            <Paragraph><i>How to Keep Bees and Sell Honey</i> by Walter T. Kelly, 1978,  <i>The Walter T. Kelly Company</i></Paragraph>
            <Paragraph><i>How Butterbees Came to Bee!</i> by Lana Grimm and Tania Bloch, illustrated by David Michener, 2001,  <i>Bee Unlimited Creations</i></Paragraph>

        </Container >

    )
}

export default BooksPublications