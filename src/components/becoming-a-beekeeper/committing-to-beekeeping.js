import React from "react"
import {
  TextHeader,
  ParagraphTextBottomMargin,
  SubHeaderMarginBottom,
} from "../../styles/babstyles.js"

import { Container, FlexContainer } from "../../styles/globalstyles.js"


const CommittingToBeekeeping = () => {
  return (
    <Container id="committing-to-beekeeping">
      <FlexContainer>
        <TextHeader>COMMITTING TO BEEKEEPING</TextHeader>
      </FlexContainer>
      <ParagraphTextBottomMargin style={{marginBottom: "74px"}}>
        The information below assumes you are starting with 2 hives in Utah
        County. You will need to adjust accordingly if you are beginning with
        more or fewer hives or if you are living somewhere other than
        North/Central Utah.
      </ParagraphTextBottomMargin>
      <SubHeaderMarginBottom>Time</SubHeaderMarginBottom>
      <ParagraphTextBottomMargin>
        To begin, you will need to set aside a day early in the year to assemble
        and paint your hives and frames. Typically, a day in mid to late March
        is good although you can order and assemble your equipment any time of
        the year.
      </ParagraphTextBottomMargin>
      <ParagraphTextBottomMargin>
        Next you are looking at about an hour or two a month for checking your
        hives and performing basic maintenance between April and September.
      </ParagraphTextBottomMargin>
      <ParagraphTextBottomMargin>
        Finally, you will need to set aside a day or two to harvest and bottle
        any surplus honey the bees may have produced; typically this is done in
        Early to Mid September. Once your hive is established, you may have the
        opportunity to harvest several times a year.
      </ParagraphTextBottomMargin>
      <SubHeaderMarginBottom>Temperament</SubHeaderMarginBottom>
      <ParagraphTextBottomMargin>
        You must have a temperament that includes patience. You will need to be
        patient and let the bees do the work at their pace - you will NOT have
        honey overnight. It is a process that can take several months.
      </ParagraphTextBottomMargin>
      <ParagraphTextBottomMargin>
        Also, once it is discovered that you are a beekeeper, you will be
        flooded with questions, some that will border on the idiotic. It is
        important that you learn to take the time to answer these questions as
        the person you are talking to could very well become a customer or a
        fellow beekeeper.
      </ParagraphTextBottomMargin>
      <SubHeaderMarginBottom>Non-Bee Related Materials</SubHeaderMarginBottom>
      <ParagraphTextBottomMargin>
        There are some basic tools and materials that you should have before
        getting into beekeeping. Most of these are fairly common in every
        household, however, it is better to know up front so you have everything
        you need to be successful.
      </ParagraphTextBottomMargin>
      <ParagraphTextBottomMargin>
        Hammer, wood glue, wood square, ratcheting straps, paint (outdoor),
        painting tools (rollers, brushes, trays etc.), spray bottles, notebook,
        pencil, pen and markers, means or method for moving hives, bees and
        supplies.
      </ParagraphTextBottomMargin>
      <SubHeaderMarginBottom>Money</SubHeaderMarginBottom>
      <ParagraphTextBottomMargin>
        It's no secret, beekeeping costs money to get into. Currently (2006),
        you can figure on about $150-$200 per hive for your first year. Add
        another $50-$150 for protective gear, tools and other needs. These costs
        can vary depending on the supplier and the amount and kind of
        tools/supplies you choose to purchase.
      </ParagraphTextBottomMargin>
    </Container>
  )
}

export default CommittingToBeekeeping
