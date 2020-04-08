import React from "react"
import styled from "styled-components"
import {
  TextContainer,
  TextHeader,
  FlexContainer,
} from "../../styles/babstyles.js"

const ParagraphText = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 72px;
  color: #000000;
`

const BoldText = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  /* margin-bottom: 32px; */
  color: #000000;
`

const BasicPartsOfTheHive = () => {
    return (
        <TextContainer>
            <FlexContainer>
                <TextHeader>BASIC PARTS OF A HIVE</TextHeader>
            </FlexContainer>
            <BoldText>Covers</BoldText>
            <ParagraphText>
            There are two main types of covers: telescoping (shown) or migratory. Migratory covers seem to be popular among the association members. Consult some beekeepers for their opinions as either cover is fine.
            </ParagraphText>
            <BoldText>Inner Cover</BoldText>
            <ParagraphText>
            Sits on top of the hive under the main cover and helps provide ventilation and spacing. Honey Supers - come in three sizes: deep, medium and shallow. All are great and the difference is in weight. Medium and shallow supers are much lighter when full than a deep so if the heaviness of a honey super is a concern go with medium or shallow. There are also comb honey supers used to produce comb honey - you should wait until after your first year before attempting to produce comb honey. 
            </ParagraphText>
            <BoldText>Queen Excluders</BoldText>
            <ParagraphText>
            These are used between the brood boxes andhe honey supers to prevent the queen from laying eggs. Some beekeepers also call these honey excluders as they report smaller honey crops. Opinion varies about the need, but a first year beekeeper will probably want to use one until you learn management techniques that allow you to produce honey without an excluder.
            </ParagraphText>
            <BoldText>Brood Boxes</BoldText>
            <ParagraphText>
            These are the boxes in which the queen lays eggs and the brood (young) is raised. Typically, you will have two brood boxes per hive.
            </ParagraphText>
            <BoldText>Bottom Board</BoldText>
            <ParagraphText>
            This piece is what the rest of the hive sits upon; it also serves as a landing board for returning bees.
            </ParagraphText>
            <BoldText>Entrance Reducers</BoldText>
            <ParagraphText>
            These are used to make the opening of the hive smaller for various reasons. You will use one in the winter/ spring to help maintain colony temperature.
            </ParagraphText>
            <BoldText>Hive Stands</BoldText>
            <ParagraphText>
            There are many types of prefabricated hive stands such as the one shown. You can also stand your hive on pallets, cinder blocks, bricks etc. The point is to raise your hive off of the ground to avoid pests.
            </ParagraphText>
            <BoldText>Frames</BoldText>
            <ParagraphText>
            These are the parts that go into the brood boxes or honey supers and they hold the foundation that the bees build their wax upon to house brood, pollen and honey.
            </ParagraphText>
            <BoldText>Foundations</BoldText>
            <ParagraphText>
            There many types of foundation that can be utilized in your hive. Start with either permadent or duragilt for your first year; experiment after that.
            </ParagraphText>
            <BoldText>Nails</BoldText>
            <ParagraphText>
            You will need to acquaint yourself with frame nails (staples can be used as well) and the types of nails used to build the supers/ brood boxes. Nails for boxes are fairly standard while frame nails are best purchased from the beekeeping supplies supplier.
            </ParagraphText>
            <BoldText>Feeders</BoldText>
            <ParagraphText>
            Feeders are used to supply the colony with either honey, sugar water or high fructose corn syrup. You will need to feed a new colony as they have no honey stores to consume. Some feeders are used internally, some at the entrance, some atop the hive and others outside in an accessible spot; consult some beekeepers for their preferences or do some online research.
            </ParagraphText>
        </TextContainer>

    )
}
export default BasicPartsOfTheHive