import React from 'react'
import styled from 'styled-components'

import { Container, GreenLineContainer, HeaderParagraph, StoreButton, BeeHeader, Paragraph} from "../../styles/edustyles.js"

const StoreTitle = styled(BeeHeader)`
    border-bottom: none;
    font-size: 28px;

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
      }
    

`

const StorePage = () => {
    return (
        <Container>
        <GreenLineContainer>
            <HeaderParagraph>Here you can use PayPal to pay your dues, pay for classes, and buy products for sale by UCBA. Products will NOT be shipped. They must be picked up at the monthly UCBA meeting. Visit the Upcoming classes page for details concerning these classes. Don’t forget to fill out the membership form if applicable, and the registration form for the classes. 
            </HeaderParagraph>
        </GreenLineContainer>

        <StoreTitle>
        $20 Annual Membership
        </StoreTitle>
        <Paragraph>membership form must be sent in to activate new memberships</Paragraph>
        <StoreButton>add to cart</StoreButton>

        <StoreTitle>
        $2 one Hive Inspection Sheet
        </StoreTitle>
        <StoreButton>add to cart</StoreButton>

        <StoreTitle>
        $5 three Inspection Sheets
        </StoreTitle>
        <StoreButton>add to cart</StoreButton>

        <StoreTitle>
        $20 Honey Bee Oil 4oz
        </StoreTitle>
        <StoreButton>add to cart</StoreButton>

        <StoreTitle>
        $70 Beginning Beekeeping Class
        </StoreTitle>
        <Paragraph>class registration form     class includes membership dues</Paragraph>
        <StoreButton>add to cart</StoreButton> 
        <StoreTitle>
        $90 Beginning Beekeeping Class- couple
        </StoreTitle>
        <Paragraph>class registration form     class includes membership dues</Paragraph>
        <StoreButton>add to cart</StoreButton> 
        <StoreTitle>
        $70 Intermediate Beekeeping Class
        </StoreTitle>
        <Paragraph>class registration form     class includes membership dues</Paragraph>
        <StoreButton>add to cart</StoreButton> 
        <StoreTitle>
        $90 Intermediate Beekeeping Class- couple
        </StoreTitle>
        <Paragraph>class registration form     class includes membership dues</Paragraph>
        <StoreButton>add to cart</StoreButton> 
        
        </Container>

    )
}

export default StorePage