import React from "react"
import styled from "styled-components"
import {
  DiseaseContainer,
  BeeHeader,
  Paragraph,
  TextHeader,
  CenteringContainer
}
  from "../../../styles/edustyles.js"

const SubHeader = styled(BeeHeader)`
  display: block;
  font-size: 24px;
  line-height: 32px;
  border-bottom:none;
  text-decoration: none;

  @media (max-width: 900px) {
    font-size: 20px;
  }
   @media (max-width: 500px){
    text-decoration: none;
   }
`

const MainParagraph = styled(Paragraph)`
  padding: 1% 0;
  font-size: 20px;
  line-height: 32px;
`

const BoldParagraph = styled(Paragraph)`
   font-weight: bold;
   font-size: 22px;
`

const BeeLink = styled.a`
  width: 50%;
  word-wrap: break-word;
`

const Diseases = () => {
  return (
    <DiseaseContainer>

      <CenteringContainer id="diseases">
        <TextHeader>diseases of honeybees</TextHeader>
      </CenteringContainer>

      <div id="AFB">
        <SubHeader>American Foulbrood (Bacillus larvae) Abbreviated as AFB</SubHeader>
      </div>

      <BoldParagraph>How to recognize AFB:</BoldParagraph>
      <MainParagraph> Brood that are infected by AFB quickly die in the cells. The cell cap will be sunken rather than rounded and will typically be pierced or punctured. If you can see the larvae in the cell they will look melted and there will be a distinctive sour odor to the frame. Odor however, is not a positive identification of American Foulbrood. Another test is to take a small piece of wood (toothpick, twig, matchstick, etc) and insert into a suspect cell. Stir the remains and then slowly withdraw the stick; if you can pull the mass out (about an inch) and it adheres to the stick and the larval mass then it is highly likely that you have AFB.</MainParagraph>
      <BoldParagraph>How to treat for AFB: </BoldParagraph>
      <MainParagraph>If you have AFB in your hive, there is no true treatment to eliminate it from the colony. The only effective method is to burn the hive to ash. However, it is possible to soak the frames in lye water for 24 hours and this may kill the spores; you then scorch the interior of the hive to kill the spores. If you suspect that a hive of yours has AFB, contact your local bee inspector or department of agriculture for the recommended treatment. You can also contact your local beekeeping association for assistance.</MainParagraph>
      <BoldParagraph>How to prevent AFB:</BoldParagraph>
      <MainParagraph> AFB can be prevented by maintaining strong colonies. Also a preventative treatment of oystercatcher (Terramycin) can be applied.</MainParagraph>

      <div id="EFB">
        <SubHeader>European Foulbrood (Melissococus pluton) Abbreviated as EFB</SubHeader>
      </div>
      <BoldParagraph>How to recognize EFB: </BoldParagraph>
      <MainParagraph>
        Unlike AFB, larvae infected with EFB typically die BEFORE being capped. They lie twisted at the bottom of the cell in a reverse corkscrew shape. They will be a tan to brown color and will appear melted. EFB killed larvae do not exhibit the same "ropy" results of a stick test like AFB. There may be a sour odor present but it will different than AFB.</MainParagraph>
        <BoldParagraph>How to treat for EFB:</BoldParagraph>
      <MainParagraph>
         EFB can be effectively controlled with antibiotics
        (Terramycin). Also, requeening your hive will help as it breaks the brood cycle and the EFB reproduction cycle.</MainParagraph>
        <BoldParagraph>How to prevent EFB: </BoldParagraph>
      <MainParagraph>Keep a young vigorous queen in the hive (requeen every couple of years) and help the hive stay healthy and strong. Preventative treatments with antibiotics will help.</MainParagraph>

      <div id="chalkbrood">
        <SubHeader>Chalkbrood (Ascophaera apis)</SubHeader>
      </div>
      <BoldParagraph>How to recognize Chalkbrood:</BoldParagraph>
      <MainParagraph> Chalkbrood is a fungal disease that affects the brood once they are sealed in the cells. Once they are dead, the larvae are chalky white and resemble mummies (kind of) that are spotted on the underside where the fungus discolors the corpse. These dead larvae are then drug out of the hive and deposited in the area in front of the landing board. It is then that you will notice the disease. These corpses will be hard and chalky rather than soft and squishy.</MainParagraph>
      <BoldParagraph>How to treat for Chalkbrood: </BoldParagraph>
      <MainParagraph>
        No treatment is recommended as colonies can recover on their own. However, you can requeen to help break the brood cycle. Also, chalkbrood will typically infect one frame at a time; remove this frame, freeze it and scrape it clean.</MainParagraph>
      <BoldParagraph>How to prevent Chalkbrood:</BoldParagraph>
      <MainParagraph> Keep your hives healthy with good ventilation.</MainParagraph>
      <MainParagraph>Requeen every few years to keep a young vigorous queen laying good eggs in the hive.</MainParagraph>
      <MainParagraph>
        <BeeLink href="http://www.ars.usda.gov/is/ar/archive/aug98/bees0898.htm" target="_blank" rel="noopener noreferrer">http://www.ars.usda.gov/is/ar/archive/aug98/bees0898.htm</BeeLink>
      </MainParagraph>

      <div id="sacbrood">
        <SubHeader>Sacbrood</SubHeader>
      </div>
      <BoldParagraph>How to recognize Sacbrood: </BoldParagraph>
      <MainParagraph>Sacbrood is a viral disease that typically is not a great concern. Brood that are affected change from pearly white to yellow, brown and eventually black. The entire larvae can be easily removed and will be contained in a sac like membrane. Typically, the colony overcomes sacbrood on their own without the beekeeper ever being aware of a problem.</MainParagraph>
      <BoldParagraph>How to treat for Sacbrood: </BoldParagraph>
      <MainParagraph>
        There is no medical treatment for sacbrood currently. If the colony has noticeably sacbrood, remove as much infected larvae as possible.</MainParagraph>
      <BoldParagraph>How to prevent Sacbrood: </BoldParagraph>
      <MainParagraph>
        Keeping your hive healthy and strong as well as regular requeening will help reduce or eliminate the incidence of this disease.</MainParagraph>

      <div id="chilled-brood">
        <SubHeader>Chilled Brood</SubHeader>
      </div>
      <BoldParagraph>How to recognize Chilled brood: </BoldParagraph>
      <MainParagraph>Chilled brood occurs when the brood chamber becomes too large for the bees and they cannot keep the developing young warm. Brood killed in this manner turn gray and may resemble sacbrood.</MainParagraph>
      <BoldParagraph>How to treat for Chilled brood: </BoldParagraph>
      <MainParagraph>
        There is not real treatment for chilled brood; once the weather warms or the colony grows, they will be able to care for the brood more effectively.</MainParagraph>
      <BoldParagraph>How to prevent Chilled brood:</BoldParagraph>
      <MainParagraph>
         Do not work your bees in cold weather, replace frames in the same order they were removed when performing cool weather inspections and do not leave frames of brood outside of the hive for any longer than absolutely necessary.</MainParagraph>

      <div id="nosema">
        <SubHeader>Nosema (Nosema apis)</SubHeader>
      </div>
      <BoldParagraph>How to recognize Nosema: </BoldParagraph>
      <MainParagraph>Nosema is caused by a protozoan and affects adult bees.   The protozoan affects the digestive hind gut of the adults and can cause severe diarrhea which can be seen as fecal staining on the front of the hive. Another affect is that the sick bees cannot produce royal jelly or effectively feed brood resulting in brood reduction. This disease typically occurs in the spring.</MainParagraph>
      <BoldParagraph>How to treat for Nosema: </BoldParagraph>
      <MainParagraph>
        An antibiotic such as Fumagillin can be used to treat the symptoms but it will not eliminate the spores produced. </MainParagraph>
      <BoldParagraph>How to prevent Nosema: </BoldParagraph>
      <MainParagraph>
        Keep hives well stock with winter provisions of capped honey. Keeping the hive healthy and relatively free of other diseases, parasites and pests will also help. Good ventilation is a must.</MainParagraph>

      <div id="dysentery">
        <SubHeader>Dysentery</SubHeader>
      </div>
      <BoldParagraph>How to recognize Dysentery:</BoldParagraph>
      <MainParagraph> Dysentery is not a true disease but a result of other diseases or conditions that prevent the bees from taking cleansing flights; it is also caused by food sources that are too water rich. Typically the bees defecate inside the hive and all over the hive entrance and landing board. These conditions can be caused by poor ventilation and food stores that did not ripen into true honey.</MainParagraph>
      <BoldParagraph>How to treat for Dysentery: </BoldParagraph>
      <MainParagraph>
        A similar treatment to that of Nosema may help.</MainParagraph>
      <BoldParagraph>How to prevent Dysentery: </BoldParagraph>
      <MainParagraph>
        Keep hives situated in such a manner as to prevent too much rain or snow accumulating on/in the hive. Ensure good ventilation and if a fall feeding is necessary, do so early enough to allow the bees to fully cure the food.</MainParagraph>

      <div id="paralysis">
        <SubHeader>Paralysis</SubHeader>
      </div>
      <BoldParagraph>How to recognize Paralysis: </BoldParagraph>
      <MainParagraph>Bees that are seen to tremble uncontrollably and are unable to fly may be exhibiting signs of either Chronic Bee Paralysis Virus (CPV) or Acute Bee Paralysis (APV). They also lose their hair giving them a greasy look and they are submissive to attack (unlike robber bees who may have a similar appearance).</MainParagraph>
      <BoldParagraph>How to treat for Paralysis:</BoldParagraph>
      <MainParagraph>
        There is no know treatment for these viruses. Some research indicates that susceptibility to these viruses may be genetically linked. Requeening or adding frames of sealed brood from a healthy hive may help.</MainParagraph>
      <BoldParagraph>How to prevent Paralysis:</BoldParagraph>
      <MainParagraph>
        Maintain healthy colonies and requeen on a regular basis.   </MainParagraph>
    </DiseaseContainer >
  )
}

export default Diseases