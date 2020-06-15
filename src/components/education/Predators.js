import React from "react"
import styled from "styled-components"
import {
    DiseaseContainer,
    BeeHeader,
    Paragraph,
    TextHeader,
    CenteringContainer
}
    from "../../styles/edustyles.js"

const SubHeader = styled(BeeHeader)`
  display: block;
  font-size: 24px;
  line-height: 32px;
  text-decoration: none;
  border-bottom:none;
  @media (max-width: 500px){
    text-decoration: none;
   }
`

const MainParagraph = styled(Paragraph)`
  padding: 1% 0;
  font-size: 24px;
line-height: 32px;
`

const Predators = () => {
    return (
        <DiseaseContainer>
            <CenteringContainer id="predators">
                <TextHeader>predators</TextHeader>
            </CenteringContainer>

            <div id="birds">
            <SubHeader>Birds</SubHeader>
            </div>

            <MainParagraph>Signs of predation: you may only notice birds eating your bees when they are in flight. The birds will swoop down near the hive and take the bees on the wing.</MainParagraph>
            <MainParagraph>Prevention: almost impossible to prevent. However, the number of bees eaten by birds should be minimal (unless it is a whole flock).</MainParagraph>

            <div id="skunks">
            <SubHeader>Skunks</SubHeader>
            </div>

            <MainParagraph>Signs of predation: skunks will scratch at the entrance of the hive to draw the bees out.</MainParagraph>
            <MainParagraph>They then consume the adult bees as the fly out of the hive. Typically this will happen at night and skunks can decimate a colony in no time at all. They also irritate the bees making them cranky and difficult to work. Look for signs of scratching on the hive and skunk feces with bee exoskeletons in it. There may also be mud and torn up vegetation in front of the hive.</MainParagraph>
            <MainParagraph>Prevention: Raise your hive up off the ground; higher is better. Skunks must then stand on their hind legs to reach the entrance exposing their tender under belly to the stings of your colony. Another option is to take a piece of plywood and nail a lot of nails through it. Then place the wood, nails up, in front of the hive.</MainParagraph>

            <div id="raccoons">
            <SubHeader>Raccoons</SubHeader>
            </div>

            <MainParagraph>Signs of predation: Raccoons are smart animals and can figure out how to take the cover off of your hive to get at the bees/brood/honey/pollen inside.</MainParagraph>
            <MainParagraph>Prevention: place heavy rocks or bricks on top of the hive to prevent the racoon from lifting the cover off. Also try the plywood trick for skunks all around the hive.</MainParagraph>

            <div id="bears">
            <SubHeader>Bears</SubHeader>
            </div>

            <MainParagraph>Signs of predation: while the presence of bears in Utah county is slim, you may take your bees into bear country someday. Bears will typically knock the entire hive over and scatter the frames and supers as it consumes everything in the hive. An apiary that has had a bear visitor is a sorry sight.</MainParagraph>
            <MainParagraph>Prevention: an electric fence is the only truly effective method of keeping bears away from your hives. You could try a similar trick to that of skunk prevention and put larger nails through the boards - but you would need these to surround your entire apiary.</MainParagraph>

        </DiseaseContainer >
    )
}

export default Predators