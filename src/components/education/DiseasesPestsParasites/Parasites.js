import React from "react"
import styled from "styled-components"
import {
    DiseaseContainer,
    Paragraph,
    TextHeader,
    CenteringContainer, 
    SubHeader
}
    from "../../../styles/globalstyles.js"

// const SubHeader = styled(BeeHeader)`
//   display: block;
//   font-size: 24px;
//   line-height: 32px;
//   text-decoration: none;
//   border-bottom:none;
//   @media (max-width: 500px){
//     text-decoration: none;
//    }
// `

const MainParagraph = styled(Paragraph)`
  padding: 1% 0;
  font-size: 24px;
line-height: 32px;
`

const Parasites = () => {
    return (
        <DiseaseContainer>
            <CenteringContainer id="parasites">
                <TextHeader>parasites</TextHeader>
            </CenteringContainer>
            <SubHeader>Varroa Mite (Varroa jacobsoni)</SubHeader>

            <MainParagraph>How to recognize Varroa mites: Varroa mites are small reddish/brown colored insects that feed off of the body fluids of adult bees as well as larvae. They are visible to the naked eye and are most easily seen on brood (especially drone brood). Another symptom of Varroa is   the presence of "crawlers", bees whose wings are deformed and cannot fly (hence they crawl around). Varroa does not cause this disfigurement directly, instead they are a carrier for a virus that affects the bee while it is a larvae.</MainParagraph>

            <MainParagraph>How to treat against Varroa: there are several methods to treat for varroa mites; a short list follows but you should research what other beekeepers are doing in your area to treat. You must learn to apply these correctly to prevent contamination of honey, and resistance development  by the mites: </MainParagraph>

            <MainParagraph>Apistan Strips<br></br>
Checkmite+ Strips<br></br>
Sucrocide<br></br>
Oxalic Acid<br></br>
Formic Acid<br></br>
Vaporized mineral oil<br></br>
Ascetic Acid<br></br>
Essential Oils</MainParagraph>

            <MainParagraph>How to prevent Varroa: just as there are several ways to treat for mites, there are several ways to prevent them. In some cases, the treatment and prevention methods are the same:</MainParagraph>

            <MainParagraph>Screened bottom boards
                Powdered sugar treatments
            Drone brood removal
            Small cell foundation
            Queen bees with genetic behaviors to reduce mite numbers</MainParagraph>

            < MainParagraph ></MainParagraph >The same chemicals listed above for treatment can aid in prevention.
            
< SubHeader > Tracheal Mite (Acarapis woodi)</SubHeader >

            <MainParagraph>How to recognize Tracheal mites: Tracheal mites live in the trachea (lungs) of the honey bee and are therefore impossible to see. However, the presence of bees that are incapable of flight, despite normal wings, may be an indication.</MainParagraph>

            <MainParagraph>How to treat against tracheal mites: Menthol crystals placed in hive can help significantly reduce the numbers of tracheal mites. Grease patties may also help lower the population.</MainParagraph>

            <MainParagraph>How to prevent tracheal mites: The same methods for treatment can be used for prevention. Maintaining strong colonies will also help keep the effects of tracheal mites to a minimum.</MainParagraph>
            <SubHeader></SubHeader>

        </DiseaseContainer >
    )
}

export default Parasites