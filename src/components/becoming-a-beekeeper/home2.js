import React from 'react';
import styled from 'styled-components'

const TextContainer = styled.div`
position: relative;
width: 763px;
margin: auto;
margin-top: 88px;
margin-bottom: 102px;
`
const TextHeader = styled.div`
position: relative;
width: 539px;
height: 33px;
margin:auto;

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;

color: #000000;

`

const FlexContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 16px;
margin-bottom: 72px;
`

const Underline = styled.div`
width: 539px;
height: 6px;
float: center;

background-color: #63966A;
`

const ParagraphTextOne = styled.div`
font-family: Futura;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
margin-bottom: 72px;

color: #000000;
`

const BoldText = styled.div`
font-family: Futura;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 32px;
margin-bottom: 32px;

color: #000000;
`

const ParagraphTextTwo = styled.div`
font-family: Futura;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
margin-bottom: 32px;

color: #000000;
`


const home = () => {
    return (
        <TextContainer id="committing-to-beekeeping">
            <TextHeader>COMMITTING TO BEEKEEPING</TextHeader>
            <FlexContainer>
                <Underline/>
            </FlexContainer>
            <ParagraphTextOne>The information below assumes you are starting with 2 hives in Utah County. You will need to adjust accordingly if you are beginning with more or fewer hives or if you are living somewhere other than North/Central Utah.</ParagraphTextOne>
            <BoldText>Time</BoldText>
            <ParagraphTextTwo>To begin, you will need to set aside a day early in the year to assemble and paint your hives and frames. Typically, a day in mid to late March is good although you can order and assemble your equipment any time of the year.</ParagraphTextTwo>
            <ParagraphTextTwo>Next you are looking at about an hour or two a month for checking your hives and performing basic maintenance between April and September.</ParagraphTextTwo>
            <ParagraphTextTwo>Finally, you will need to set aside a day or two to harvest and bottle any surplus honey the bees may have produced; typically this is done in Early to Mid September. Once your hive is established, you may have the opportunity to harvest several times a year.</ParagraphTextTwo>
            <BoldText>Temperament</BoldText>
            <ParagraphTextTwo>You must have a temperament that includes patience. You will need to be patient and let the bees do the work at their pace - you will NOT have honey overnight. It is a process that can take several months.</ParagraphTextTwo>
            <ParagraphTextTwo>Also, once it is discovered that you are a beekeeper, you will be flooded with questions, some that will border on the idiotic. It is important that you learn to take the time to answer these questions as the person you are talking to could very well become a customer or a fellow beekeeper.</ParagraphTextTwo>
            <BoldText>Non-Bee Related Materials</BoldText>
            <ParagraphTextTwo>There are some basic tools and materials that you should have before getting into beekeeping. Most of these are fairly common in every household, however, it is better to know up front so you have everything you need to be successful.</ParagraphTextTwo>
            <ParagraphTextTwo>Hammer, wood glue, wood square, ratcheting straps, paint (outdoor), painting tools (rollers, brushes, trays etc.), spray bottles, notebook, pencil, pen and markers, means or method for moving hives, bees and supplies.</ParagraphTextTwo>
            <BoldText>Money</BoldText>
            <ParagraphTextTwo>It's no secret, beekeeping costs money to get into. Currently (2006), you can figure on about $150-$200 per hive for your first year. Add another $50-$150 for protective gear, tools and other needs. These costs can vary depending on the supplier and the amount and kind of tools/supplies you choose to purchase.</ParagraphTextTwo>
        </TextContainer>
    );
};

export default home;