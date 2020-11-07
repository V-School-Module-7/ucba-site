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

const Pests = () => {
    return (
        <DiseaseContainer>
            <CenteringContainer id="pests">
                <TextHeader>pests of the honeybee</TextHeader>
            </CenteringContainer>

            <div id="bee-louse">
                <SubHeader>Bee Louse (Braula coeca)</SubHeader>
            </div>

            <MainParagraph> How to recognize the Bee Louse: Bee Lice are small (about the size of a pin head) and reddish/brown in color and have a similar color/size to Varroa mites. However, bee lice move quickly over the body of bees where varroa is slower. Typically the lice will hide under the bee until it is hungry when it will scurry up to the mouth parts of the bee to sip nectar or honey.</MainParagraph>
            <MainParagraph> How to eliminate Bee Lice: Bee Lice are susceptible to the same treatments as mites and are unlikely to be seen when proper mite prevention techniques are followed.</MainParagraph>

            <div id="wax-moth">
                <SubHeader>Wax Moth (Galleria melonella)</SubHeader>
            </div>

            <MainParagraph>How to recognize Wax moths: wax moth larvae can do considerable damage in a very short time. They tunnel through comb eating everything in their path. They leave silken threads wherever they go covering the entire frame in days. Once they pupate, their cocoons can easily be seen and they will tunnel into the wood slightly to build them. Typically, wax moths will attack empty supers that are unprotected or weak colonies.</MainParagraph>
            <MainParagraph>How to eliminate wax moths: once a super/frame is covered in moth larvae you can try to scrape them back down to foundation. The only approved chemical treatment is paradichlorobenzene (PBD) crystals (urinal cakes). Place them only in empty supers and remove them to air out for several weeks before putting back on a hive. PBD crystals DO NOT kill the eggs to you will need to keep the treatment up for a couple weeks to eliminate them all. NEVER use mothballs - the chemical in moth balls remains in your wax and will transfer to your honey. </MainParagraph>
            <MainParagraph>How to prevent wax moths: Keep empty supers in a dry cold location (winter) and when the temperatures are warm, keep empty supers/frames in a freezer. Another method is to lay supers with frames on their side and put a fan at one end to blow air through them constantly until temperature drop. For in colony, maintain a strong colony; combine weak colonies to prevent outbreaks. A strong colony will eliminate wax moths on their own; a weak hive is defenseless.</MainParagraph>

            <div id="mice">
                <SubHeader>Mice</SubHeader>
            </div>

            <MainParagraph>Recognizing mice and their damage: Mice can damage stored comb and comb in the hive. They will typically move into both in the late fall as temperatures begin to drop. They seek an area in which to build winter nests and the bee's honey storage provides a nice food source as well. They chew up the comb (and foundation) and they also bring in nesting materials. Overall the effect is one of destruction (remember that mice urinate and defecate everywhere they go) and the bees will attempt to kill the invader. If they succeed, they have no method to remove the mouse, but instead coat it in propolis to prevent the spread of disease from the decomposing corpse.</MainParagraph>
            <MainParagraph>How to eliminate mice: if found in supers (occupied or not) capture/kill them immediately. Clean the hive and replace any damaged frames.</MainParagraph>
            <MainParagraph> How to prevent mice: raise your hives off of the ground. Place a mouse guard on the entrance of the colony to prevent them coming in; use at least an entrance reducer and watch for signs of chewing as mice will chew the wood to make the entrance large enough to get in.</MainParagraph>

            <div id="ants">
                <SubHeader>Ants</SubHeader>
            </div>

            <MainParagraph>Recognizing ants and their damage: Ants do not typically cause damage, but instead raid the hive for the honey stores. However, some species will invade a hive to establish a colony; they will then destroy comb, brood, honey and pollen storage. This may cause the colony to abscond.</MainParagraph>
            <MainParagraph>How to eliminate ants: First, eliminate the way the ants are getting in; raise the hive off of the ground and eliminate all brush around the hive. Keep the hive strong and they will keep the ants under control. Place a sticky barrier around the hive that ants cannot cross (oil, vaseline etc). </MainParagraph>
            <MainParagraph>How to prevent ants: if ants appear to be going into the hive, try ground cinnamon. Sprinkle some around the hive and on the inner cover. Ants don't like cinnamon but the bees don't mind. You can also put the hive on a stand with legs that sit inside cans that have oil in them; the ants will crawl up, down and drown in the oil.</MainParagraph>

            <div id="small-hive-beetle">
                <SubHeader>Small Hive Beetle (Athina tumida) Abbreviated as SHB </SubHeader>
            </div>

            <MainParagraph>How to recognize SHB: Small Hive Beetle larvae consume everything in the comb. They also defecate everywhere they go and this causes the stored honey to ferment and ooze out of the comb causing quite a mess. Eventually, the colony may abscond from the hive entirely. How to eliminate SHB: Fortunately, SHB is currently restricted to the southeastern United States. However, it is probably just a matter of time until it finds its way across the country. The only chemical currently approved for the treatment of SHB is coumaphos (Checkmite+ strips). However, some beekeepers feel that treatments with mineral oil foggers and/or ascetic acid may also control this pest. </MainParagraph>
            <MainParagraph>How to prevent SHB: The larvae of the SHB need to come outside of the hive and burrow into the ground to pupate. Keep your hive on top of a hard packed earth or possibly a concrete pad to prevent re-introduction into the hive. A strong colony will be able to keep the SHB under control; watch weak colonies. Kill any and all SHB that you encounter during routine inspections.</MainParagraph>

        </DiseaseContainer >
    )
}

export default Pests