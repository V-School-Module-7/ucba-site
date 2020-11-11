import React from 'react';

import { Paragraph, TextHeader, Container, FlexContainer } from "../../styles/globalstyles.js"

const KindsOfBeekeepers = () => {
    return (
        <Container id="kinds-of-beekeepers">
            <FlexContainer>
                <TextHeader>kinds of beekeepers</TextHeader>
            </FlexContainer>
            <Paragraph>What Kind of Beekeeper do YOU want to Bee?</Paragraph>
            <Paragraph>
                We challenge you to research all the methodologies involved 
                in beekeeping, treatment methods for disease and parasites, 
                extraction process and selling techniques to that you can 
                determine what kind of beekeeper you want to be. We cannot 
                tell you which is the right way - you must decide for yourself. 
                Each individual must determine their own path and others in the 
                beekeeping community can only act as guides sharing experiences 
                and information so that you, the novice, can make informed 
                intelligent decisions.
            </Paragraph>
            <Paragraph>
                Never hesitate to question; remember there is no SINGLE RIGHT 
                WAY to keep bees successfully - anyone that tells you otherwise 
                is misinformed. Read, research and question and you will be able 
                to determine what kind of beekeeper YOU want to BEE!
            </Paragraph>
        </Container>
    );
};

export default KindsOfBeekeepers;