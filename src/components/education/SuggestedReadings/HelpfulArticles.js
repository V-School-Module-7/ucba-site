import React from "react"
import styled from "styled-components"

import {
    Container,
    Paragraph,
    BeeHeader,
    CenteringContainer,
    BeeLink
} from "../../../styles/edustyles.js"

const BHeader = styled(BeeHeader)`
    display: block;
    margin-bottom: 2%;

    @media (max-width: 500px) {
        margin-top: 8%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4%;
    }
`

const MainHeader = styled(BeeHeader)`
    @media (max-width: 500px) {
    font-size: 24px;
}
`

const Title = styled.h2`
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    // text-decoration-line: underline;

    @media (max-width: 900px) {
        font-size: 18px;
    }
`


const HelpfulArticles = () => {
    return (
        <Container>
            <CenteringContainer>
                <MainHeader>Helpful Articles</MainHeader>
            </CenteringContainer>
            <BHeader>Colony Collapse Disorder</BHeader>

            <Title>CCD Summary:</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/CCDSummaryWG0207.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/CCDSummaryWG0207.pdf</BeeLink></Paragraph>

            <Title>CCD Long Report:</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/FallDwindleUpdate0107.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/FallDwindleUpdate0107.pdf</BeeLink></Paragraph>

            <Title>CCD PFT Report:</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/FallDwindleDisTalkAustin.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/FallDwindleDisTalkAustin.pdf</BeeLink></Paragraph>

            <BHeader>Standard Hive Plans</BHeader>

            <Title>WBC 10-Frame Plan:</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/10%20Frame%20WBC%20Hive%20Plans.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/10%20Frame%20WBC%20Hive%20Plans.pdf</BeeLink></Paragraph>

            <Title>Langstroth Hive Plan:</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Langstroth%20Hive%20Plan.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Langstroth%20Hive%20Plan.pdf</BeeLink></Paragraph>

            <BHeader>Honey Articles</BHeader>

            <Title>Honey Standards</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/CNG%20Honey%20Bee%20Standards.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/CNG%20Honey%20Bee%20Standards.pdf</BeeLink></Paragraph>

            <Title>Comb Honey</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Comb%20Honey.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Comb%20Honey.pdf</BeeLink></Paragraph>

            <Title>Heavy Metals in Honey</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Heavy%20Metals%20in%20Honey%20and%20Propolis.PDF" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Heavy%20Metals%20in%20Honey%20and%20Propolis.PDF</BeeLink></Paragraph>

            <Title>Honey as Wound Dressing</Title>

            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20as%20a%20Wound%20Dressing.PDF" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20as%20a%20Wound%20Dressing.PDF</BeeLink></Paragraph>

            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20as%20a%20Wound%20Dressing%202.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20as%20a%20Wound%20Dressing%202.pdf</BeeLink></Paragraph>

            <Title>Honey Grades</Title>

            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Grades%20-%20USDA.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Grades%20-%20USDA.pdf</BeeLink></Paragraph>

            <Title>Honey Info</Title>

            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Info%2001.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Info%2001.pdf</BeeLink></Paragraph>

            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Info%2002.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Info%2002.pdf</BeeLink></Paragraph>

            <Title>Honey Market Trends - Feb 2005</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Market%20Trend%20Info%20-%20Feb%202005.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Market%20Trend%20Info%20-%20Feb%202005.pdf</BeeLink></Paragraph>

            <Title>Honey Uses</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Uses%20from%20University%20of%20Florida.PDF" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honey%20Uses%20from%20University%20of%20Florida.PDF</BeeLink></Paragraph>

            <Title>Maximizing Honey Production</Title>
            <Paragraph><BeeLink href=""></BeeLink></Paragraph>


            <Title></Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Maximizing%20Honey%20Production%20with%20Spring%20Management.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Maximizing%20Honey%20Production%20with%20Spring%20Management.pdf</BeeLink></Paragraph>


            <Title>Floral Source Guide</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/NHB%20Floral%20Source%20Guide.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/NHB%20Floral%20Source%20Guide.pdf</BeeLink></Paragraph>

            <Title>USDA Standards for Cone Honey</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/USDA%20Standards%20for%20Comb%20Honey.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/USDA%20Standards%20for%20Comb%20Honey.pdf</BeeLink></Paragraph>

            <BHeader>Beeswax</BHeader>

            <Title>Beeswax 1</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beeswax%20Quality.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beeswax%20Quality.pdf</BeeLink></Paragraph>

            <Title>Beeswax 2</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beeswax.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beeswax.pdf</BeeLink></Paragraph>

            <BHeader>Propolis</BHeader>

            <Title>Determining Propolis Quality</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Determining%20Propolis%20Quality.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Determining%20Propolis%20Quality.pdf</BeeLink></Paragraph>

            <Title>Heavy Metals in Honey and Propolis</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Heavy%20Metals%20in%20Honey%20and%20Propolis.PDF" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Heavy%20Metals%20in%20Honey%20and%20Propolis.PDF</BeeLink></Paragraph>

            <Title>Propolis Shown to Kill HIV</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Anti%20HIV%20Propolis%20Paper.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Anti%20HIV%20Propolis%20Paper.pdf</BeeLink></Paragraph>

            <BHeader>Plants (Honey or Pollen)</BHeader>

            <Title>Desert Plants of Utah</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Desert%20Plants%20of%20Utah.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Desert%20Plants%20of%20Utah.pdf</BeeLink></Paragraph>

            <Title>NHB Floral Source</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/NHB%20Floral%20Source%20Guide.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/NHB%20Floral%20Source%20Guide.pdf</BeeLink></Paragraph>

            <BHeader>Chemical Poisoning</BHeader>

            <Title>USU Reduction of Honey Bee Poisoning</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/USU%20Reducction%20of%20Honeybee%20Poisoning.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/USU%20Reducction%20of%20Honeybee%20Poisoning.pdf</BeeLink></Paragraph>

            <Title>Reducing Bee Poisoning</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Reducing%20Bee%20Poisoning.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Reducing%20Bee%20Poisoning.pdf</BeeLink></Paragraph>

            <BHeader>Observation Hives</BHeader>

            <Title>3 Frame Plan</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/3%20Frame%20Observation%20Hive%20Plan.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/3%20Frame%20Observation%20Hive%20Plan.pdf</BeeLink></Paragraph>

            <Title>8 Frame Plan</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/8%20Frame%20Observation%20Hive%20Plan.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/8%20Frame%20Observation%20Hive%20Plan.pdf</BeeLink></Paragraph>

            <BHeader>General Beekeeping</BHeader>

            <Title>10 Commandments of Beekeeping</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/10%20Commandments%20of%20Beekeeping.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/10%20Commandments%20of%20Beekeeping.pdf</BeeLink></Paragraph>

            <Title>2005 UDAF Report</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/2005%20UDAF%20Report.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/2005%20UDAF%20Report.pdf</BeeLink></Paragraph>

            <Title>Apiary Setup</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Apiary%20Set%20Up.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Apiary%20Set%20Up.pdf</BeeLink></Paragraph>

            <Title>Beekeeping for Extension Agents</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beekeeping%20for%20Extension%20Agents.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beekeeping%20for%20Extension%20Agents.pdf</BeeLink></Paragraph>

            <Title>Beekeeping in Tennessee</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beekeeping%20in%20Tennessee%20-%20excellent%20article.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Beekeeping%20in%20Tennessee%20-%20excellent%20article.pdf</BeeLink></Paragraph>

            <Title>Preparing for Winter</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Preparing%20for%20Winter.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Preparing%20for%20Winter.pdf</BeeLink></Paragraph>

            <Title>Products from the Hive</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Products%20from%20the%20Hive.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Products%20from%20the%20Hive.pdf</BeeLink></Paragraph>

            <Title>Spring Start-Up</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Spring%20Startup.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Spring%20Startup.pdf</BeeLink></Paragraph>

            <Title>Value of Honey Bees as Pollinators</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Value%20of%20Honey%20Bees%20as%20Pollinators%20-%202000%20Report.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Value%20of%20Honey%20Bees%20as%20Pollinators%20-%202000%20Report.pdf</BeeLink></Paragraph>

            <BHeader>Diseases, Pests and Parasites</BHeader>

            <Title>AFB in the UK</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/AFB%20UK%20Article.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/AFB%20UK%20Article.pdf</BeeLink></Paragraph>

            <Title>Bee Loss and Remedies</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Bee%20Loss%20and%20Remedies.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Bee%20Loss%20and%20Remedies.pdf</BeeLink></Paragraph>

            <Title>Apiary Setup</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Apiary%20Set%20Up.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Apiary%20Set%20Up.pdf</BeeLink></Paragraph>

            <Title>Essential Oil Control of Varrora</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Essential%20Oil%20Varroa%20Control.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Essential%20Oil%20Varroa%20Control.pdf</BeeLink></Paragraph>

            <Title>Managing Varrora in the UK</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Managing%20Varroa%20UK%20Article.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Managing%20Varroa%20UK%20Article.pdf</BeeLink></Paragraph>

            <Title>Varrora Mites</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Varroa%20Mites.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Varroa%20Mites.pdf</BeeLink></Paragraph>

            <BHeader>Africanized Honey Bees</BHeader>

            <Title>AHB in Saguaro Park</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/AHB%20Saguaro%20Park%20AZ.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/AHB%20Saguaro%20Park%20AZ.pdf</BeeLink></Paragraph>
       
            <BHeader>Honey Bee Types</BHeader>

            <Title>Bee Types</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Bee%20Types.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Bee%20Types.pdf</BeeLink></Paragraph>

            <Title>A Comparison of Russian and Italian Honey Bees</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Russians%20vs%20Italians%20[Bees].pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Russians%20vs%20Italians%20[Bees].pdf</BeeLink></Paragraph>
            
            <BHeader>Swarm Information</BHeader>

                        <Title>Facts About Swarms</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Facts%20About%20Swarms.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Facts%20About%20Swarms.pdf</BeeLink></Paragraph>

            <Title>If Your Bees Swarm</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/If%20Your%20Bees%20Swarm.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/If%20Your%20Bees%20Swarm.pdf</BeeLink></Paragraph>

            <Title>Swarm Prevention</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Swarm%20Prevention.PDF" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Swarm%20Prevention.PDF</BeeLink></Paragraph>

            <BHeader>Venom</BHeader>

            <Title> Venom Detection Paper</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honeybee%20Venom%20Detection%20paper.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Honeybee%20Venom%20Detection%20paper.pdf</BeeLink></Paragraph>

            <BHeader>Nutrition</BHeader>

            <Title>Fat Bee Skinny Bee</Title>
            <Paragraph><BeeLink href="http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Fat%20Bees%20Skinny%20Bees.pdf" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/Other%20Files/Information%20Articles/Fat%20Bees%20Skinny%20Bees.pdf</BeeLink></Paragraph>

        </Container>
    )
}

export default HelpfulArticles