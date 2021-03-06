import React from "react"
import styled from "styled-components"
import AfricanbeeMap from "../../images/Africanbeemap.png"
import AfricanUtahMap from "../../images/AfricanUtahMap.png"

import { Container, BoxTitle, GreenLineContainer, Paragraph, BeeHeader, BHeader, CenteringContainer } from "../../styles/globalstyles"

const Container3 = styled.div`
display: grid;
grid-template-columns: 35% 5% 60%; 
text-align: center;
margin-bottom: 10vw;
margin-top: 5vh;

@media (max-width: 900px){
    grid-template-columns: 100%;
    grid-template-rows: auto 5% auto;
    margin-bottom: 15vh;
}
`

const Container4 = styled.div`
text-align: center;
// margin: 10vw;
margin-top: 5vh;
font-family: Nunito;
`
const Section3 = styled.div`
border: 5px solid #63966a;
padding: 5vw;
font-family: Nunito;
padding-top: 5vh;
`
const SectionModel = styled.div`

`
const SectionTitle = styled.h2`
text-align: left;
font-family: Work Sans; 
border-bottom: 4px solid #63966a;   
margin-bottom: 20px;
padding-bottom: 10px;
line-height: 28px;
font-size: 28px;

@media (max-width: 500px) {
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: #63966A;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }
`
const SectionContent = styled.p`
text-align: left;
margin-bottom:50px;
font-size: 22px;
line-height: 28px;
font-family: Nunito;

@media (max-width: 900px) {
    width: 100%;
  font-size: 16px;
  margin: 2%;
  line-height: 24px;
}
`

const ParaImg = styled.img`
  width: 100%;
`

const AfricanHoneyBees = () => {
    return (
        <Container>
            {/* <Container1> */}
            <GreenLineContainer>
                <BoxTitle>History of Africanized Honey Bees</BoxTitle> <Paragraph>African honey bees were first imported to the Americas in 1956 by the prominent Brazilian geneticist, Warwick Kerr.  He thought there was a good possibility that he could utilize African stock to produce a new breed of honey bees, which would be less defensive than the wild African bees but which would be more productive than European honey bees (EHB) in Brazil's tropical setting.  Kerr was able to acquire 63 live queens from South African beekeepers. These were later taken to a quarantine area at an agricultural research station near Rio Claro, where 48 queens survived till the next year. </Paragraph>

                <Paragraph>Through selective breeding with European drones, Kerr and his associates had produced a number of first generation hybrids, now known as Africanized honey bees.  After several months of this activity, natural attrition had reduced their stock of Africanized honey bees to 29 which were maintained in hive boxes equipped with queen excluders.  In October of 1957 (according to Kerr), a local beekeeper wandered by, noticed the queen excluders and removed them. In any case, as the story goes, the removal of the excluders accidentally released 26 Africanized honey bee queens with small swarms into the nearby forest.  Kerr hoped the escaped bees would either perish in the wild or mate with European honey bees and eventually lose their African characteristics.</Paragraph>

                <Paragraph>Within a few years, however, reports began arriving from surrounding areas of wild bees relentlessly attacking farm animals and even humans. Many poor Brazilian farmers suffered livestock losses, and, eventually, there were human fatalities as well. By the early 1960s, it was clear that a rapid expansion had occurred among feral bee colonies and that the Africanized honey bees were moving quickly into other parts of the country.  While European honey bee swarms might disperse only a few miles and then look for an ideal place to establish themselves, swarms of Africanized honey bees can move 60 miles or more at a time and build their nests in a variety of locations. In October 1986, they reached Mexico.</Paragraph>
                {/* <ParaImg src={AfricanPara1}></ParaImg> */}
                </GreenLineContainer>
            {/* </Container1> */}

            {/* <Container2> */}
            <CenteringContainer>
                <BeeHeader>Spread of Africanized Honey Bees in the United States</BeeHeader>
                </CenteringContainer>
                <Paragraph>On October 15, 1990, the first wild colony of Africanized honey bees was found in the United States, near Hidalgo, Texas. By 1993, naturally occurring swarms were recovered in Arizona and New Mexico, and the following year California confirmed arrival of this invasive species. By 2009, over 100 counties in Texas, 13 counties in New Mexico, every county in Arizona, 14 counties in California, 3 counties in Nevada, 2 counties in Utah, 28 counties in Oklahoma, 3 counties in Louisiana, 1 county in Arkasas, and 16 counties in Florida were infested with AHB.  Below is the map of the spread of AHB from 1990 - 2009. For the current map see USDA:</Paragraph>
               
                {/* <ParaImg src={Africanpt2}></ParaImg> */}
                <ParaImg src={AfricanbeeMap}></ParaImg>
            {/* </Container2> */}

            <Container3>
                <ParaImg src={AfricanUtahMap}></ParaImg>
                <div></div>
                <Section3>
                    {/* <ParaImg src={Africanpt3}></ParaImg> */}
                    <Paragraph>The Utah Department of Agriculture and Food has been surveying for Africanized honey bees since the 1990s.  The main area of focus has been in southern Utah because of established populations in northen Arizona and Nevada. In 2009, they announced that Africanized Bees had been discovered in southern Utah. While this is of concern to the population of southern Utah, because of our winter season those in northern Utah (including Utah county) really have nothing to worry about. This is because the Africanized bee will probably colonize Utah (and the US) the way it has South America, with a southern zone developing where feral (wild) honey bees are almost completely Africanized and a northern zone that will continue to be populated almost completely by the European honey bee.  A transition area will probably exist between the northern and southern zones in which the two groups interbreed and their behavior stretching across the entire range of defensiveness.</Paragraph>
                </Section3>

            </Container3>
            <Container4>
                <SectionModel>
                    <SectionTitle>
                        Stopping the Spread of AFB
                    </SectionTitle>
                    <SectionContent>
                        Managed hives (those kept by beekeepers) are the first and best defense against an area becoming Africanized.
                        Managed bees dilute the AFB gene pool reducing aggressiveness, prevent AFB take over of European honey bee hives,
                        and AFBs are less attracted to areas where other foragers exist.  Education of the public about the necessity of
                        reporting feral nests, along with beekeepers, regulatory, and public safety agencies working together, we will
                        be able to minimize the safety and economic impact of Africanized bees.
                    </SectionContent>
                </SectionModel>
                <SectionModel>
                    <SectionTitle>
                        Suspect a Hive of containing AFB?
                    </SectionTitle>
                    <SectionContent>
                        If you suspect that a wild hive or even an established/managed hive may contain AFB - contact your local
                        extension office immediately. In Utah you can also contact the Utah Department of Agriculture and Food,
                        Plant Services division and ask for the State Entomologist.
                    </SectionContent>
                </SectionModel>
                <SectionModel>
                    <SectionTitle>
                        Recent Studies of AFBs
                    </SectionTitle>
                    <SectionContent>
                        Field research outside of Mexico City is working to identify and breed gentler Africanized bees. Africanized bee hives are
                        tested for honey output.  Hives with high output are then tested for personality.  Those that get angrier quicker are destroyed,
                        removing the most aggressive genes from the larger bee population.   A third test is then performed for flightiness (swarming).
                        The surviving hives have resulted in an Africanized bee that produces 20% more honey and is 50% less defensive.
                    </SectionContent>
                </SectionModel>
                
                <SectionModel>
                   
                    <SectionContent>

                       <BHeader> How can I prepare?</BHeader>

    When involved in outdoor activities, be aware of your surroundings and 
    keep an eye out for bees.  Don't panic at the sight of a few bees foraging 
    in the flowers. Bees are generally very docile as they go about their work. 
    Unless you do something out of the ordinary, such as step on them, they will 
    generally not bother you.
                    </SectionContent>
                    <SectionContent>
                        <b>
    There are a few things you can do to be prepared:</b>
    <br></br>
    <br></br>

Wear light-colored clothing. Experience has shown that bees tend to attack dark objects such as clothing or hair.
Avoid wearing floral or citrus aftershaves or perfumes when hiking. Bees are sensitive to odors, both pleasant and unpleasant. The smell of newly cut grass has been shown to rile honey bees.
Check around your house and yard at least once a month to see if there are any signs of bees taking up residence. Africanized honey bees will live about anywhere they can find shelter. This means they are more likely to be found in trees, in the sides of buildings, in drain pipes, in water meter boxes, in old abandoned appliances, in piles of junk, and even in holes in the ground.  Sealing or covering cracks and holes in houses is good prevention.
Don't panic if you find an established honey bee colony in your neighborhood. Keep every one away. Check the Yellow Pages for pest control operators, beekeepers or other bee removal experts in your area who will remove the colony. Do not try to remove colonies yourself.
                    </SectionContent>
                    <SectionContent>

What if I am attacked?

The best safety advice is to avoid any encounters with unfriendly honey bees. Be alert for danger especially if bees are acting strangely. Remember that honey bees sting to defend their colony, so be on the look out for honey bee swarms and colonies. Quite often bees will display some preliminary defensive behavior before going into a full-fledged attack. They may fly at your face or buzz around over your head. These warning signs should be heeded, since the bees may be telling you that you have come into their area and are too close to their colony for comfort both theirs and yours!
                    </SectionContent>
                    <SectionContent>

Most people taking part in normal outdoor activities do not have to go to any extraordinary lengths to be prepared, just keep in mind where you would go to escape honey bees, and be on the look out for danger. In the event you are attacked by honey bees here are a few good tips.
                    </SectionContent>
                    <SectionContent>
RUN away as fast as possible! Do not try to retrieve your belongings and do not try to stand still in an attempt to fool the bees.  The more you flail your arms, the madder they will get. Get indoors or in a car as fast as possible. If you can't get indoors, keep running.  A bee can obtain speeds of from 12 to 15 miles per hour, but most healthy humans can outrun them. They will usually follow you for several hundred feet but Africanized honey bees have been known to follow people for more than a quarter mile.
                    </SectionContent>
                    <SectionContent>
    Almost all cases of Africanized honey bee attacks can be traced back to some provocation, such as some noise or vibration, i.e. a lawn mower, weed eater, or tractor. 
    Any covering for your body, and especially for your head and face will help you escape. People who have been attacked say the worst part is having the bees sting your face and eyes. Any impairment of your vision will also make it more difficult to escape. If you do not happen to have a net with you, grab a blanket, a coat, a towel, anything that will give you momentary relief while you look for an avenue of escape. The covering device is not going to protect you for long. The idea is to use it to help you get away. If you have nothing else, pull your shirt up over your face. The stings you may get on your chest and abdomen are far less serious than those to the facial area.
DO NOT JUMP INTO WATER! The bees will wait for you to come up for air.
Once you are away from the bees, take a second and evaluate the situation. If you are stung by one Africanized honey bee, it will be the same as a sting from the common European honey bee. The individual stings are not more powerful or painful. Even one honey bee sting can be dangerous, however, if you are allergic to them. After you are safely away, remove all stingers from your body. Do not pull them out with tweezers or your fingers, as this will only squeeze more venom into the wound. Scrape them out sideways using your fingernails, the edge of a credit card, or with a dull knife.  If you have been stung more than 15 times, are having symptoms other than pain and localized swelling, you should always seek medical attention immediately.
                    </SectionContent>
                </SectionModel>
                <SectionModel>
                    <SectionTitle>
                        Differences between Africanized and European Honey Bees
                    </SectionTitle>
                    <SectionContent>
                    

Africanized honey bees (Apis mellifera scutellata) and European honey bees 
(Apis m. mellifera) are the same species - they look the same, sting in defense 
of themselves or their nest, can only sting once, and have the same venom.   
African bees are 10% smaller than European bees (but because the bees look so much 
alike only a laboratory analysis can tell them apart). Additionally, they are 25%
 lighter, reproduce earlier, produce less honey, and have a shorter lifespan.  
 They also differ in that they respond more quickly and more bees sting, can sense
  a threat from people or animals 50 feet or more from their nest, sense 
  vibrations from power equipment 100 feet or more from their nest, may pursue a
   victim 1/4 to 1/2 mile, remain agitated for 24 hours after an attack, swarm 
   more frequently than the European honey bee to establish new nests, nest in 
   smaller cavities and sheltered areas, and move their entire colony readily 
   (abscond) if food is scarce.  Away from the hive they are no more defensive 
   than other bees or wasps. They will not form large swarms and hunt for you.


                    </SectionContent>


                </SectionModel>
                <SectionModel>
                    <SectionTitle>
                        The African Bee in Africa
                    </SectionTitle>
                    <SectionContent>

                        With all the bad publicity the Africanized bee has had in the western hemisphere, the African honey bee is the preferred bee of
                        African beekeepers.  In its homeland, the AHB is prized as a good honey producer thriving on erratic food supplies in a
                        semi-desert climate with severe droughts.

                        
                    </SectionContent>
                    <SectionContent>
                    Another African bee kept by beekeepers is the Cape honey bee. The Cape bee's native territory was only on the Cape Coast on the
                        tip of South Africa.   The bees did not interbreed until the 90s when beekeepers started moving hives between the two
                        territories.  After moving Cape bees into AHB territory, the Cape bee started invading the hives of AHBs.  Within a year, tens
                        of thousands of hives, equaling 50% of the managed AHB hives, had to be destroyed.
                    </SectionContent>
                    <SectionContent>
                        A Cape worker bee is not like other honey worker bees. She is capable of laying eggs that produce fully functional queens from
                        unfertilized eggs (thelytoky)! (Cape workers do not exhibit this behavior in a queen right Cape colony).  Cape worker bees
                        invade the hives of AHBs. Most are killed by the hive residents, but a few escape detection and are absorbed into the hive,
                        setting off a chain of events that will eventually cause collapse of the hive. Cape bee laying workers emit queen-like
                        pheromones exerting reproductive control. The Cape worker tricks the resident bees into treating her like a queen, with the
                        African bees eventually killing their own queen.   Colonies taken over by Cape bees will no longer accept AHB queens. The eggs
                        laid by the Cape worker develop into females who beg for food, eating more than their African bee nest mates. With less AHB
                        foragers the food supply is soon depleted, the colony collapses, and the Cape bees leave to find another place to freeload.
                        </SectionContent>
                        <SectionContent>
                        Using Cape bees to eradicate the Africanized bee in America is not the solution. They would destroy the European honey bee population just as they are destroying the African honey bee population in Africa.
                        </SectionContent>
                </SectionModel>
            </Container4>



        </Container>

    )
}

export default AfricanHoneyBees