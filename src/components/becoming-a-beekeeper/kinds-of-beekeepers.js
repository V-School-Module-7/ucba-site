import React from 'react';
import {
    TextContainer,
    TextHeader,
    FlexContainer,
    ParagraphText,
    ParagraphTextBottomMargin,
} from "../../styles/babstyles.js"

const KindsOfBeekeepers = () => {
    return (
        <TextContainer id="kinds-of-beekeepers">
            <FlexContainer>
                <TextHeader>kinds of beekeepers</TextHeader>
            </FlexContainer>
            <ParagraphTextBottomMargin>What Kind of Beekeeper do YOU want to Bee?</ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>
                We challenge you to research all the methodologies involved 
                in beekeeping, treatment methods for disease and parasites, 
                extraction process and selling techniques to that you can 
                determine what kind of beekeeper you want to be. We cannot 
                tell you which is the right way - you must decide for yourself. 
                Each individual must determine their own path and others in the 
                beekeeping community can only act as guides sharing experiences 
                and information so that you, the novice, can make informed 
                intelligent decisions.
            </ParagraphTextBottomMargin>
            <ParagraphText>
                Never hesitate to question; remember there is no SINGLE RIGHT 
                WAY to keep bees successfully - anyone that tells you otherwise 
                is misinformed. Read, research and question and you will be able 
                to determine what kind of beekeeper YOU want to BEE!
            </ParagraphText>
        </TextContainer>
    );
};

export default KindsOfBeekeepers;