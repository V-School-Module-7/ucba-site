import React from "react"
import styled from "styled-components"
import AfricanPara1 from "../../images/africanizedbeespt1.png"
import Africanpt2 from "../../images/africanpt2.png"
import AfricanbeeMap from "../../images/Africanbeemap.png"
import AfricanUtahMap from "../../images/AfricanUtahMap.png"
import Africanpt3 from "../../images/africanpt3.png"


const AfricanBeeContainer = styled.div`
    // display: block;
    // text-align: center;
    // border: 5px solid #63966a;
    // margin: 10vw;
    // padding: 5vw;
    // font-family: Work Sans;
    // padding-top: 5vh;
    // // padding-bottom: 100px;
`

const Container1 = styled.div`
    display: block;
    text-align: center;
    border: 5px solid #63966a;
    margin: 10vw;
    margin-bottom: 10vh;
    padding: 5vw;
    font-family: Work Sans;
    padding-top: 5vh;
`

const Container2 = styled.div`
text-align: center;
margin: 10vw;
margin-top: 5vh;
`

const Container3 = styled.div`
display: grid;
grid-template-columns: 35% 5% 60%; 
text-align: center;
margin: 10vw;
margin-top: 5vh;
`

const Container4 = styled.div`
text-align: center;
margin: 10vw;
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
border-bottom: 4px solid #63966a;   
margin-bottom: 20px;
padding-bottom: 10px;
line-height: 28px;
font-size: 36px;
`
const SectionContent = styled.p`
text-align: left;
margin-bottom:50px;
font-size: 22px;
line-height: 28px;
font-family: Nunito;
`


const BeeHeader = styled.h1`
  padding-bottom: 5vh;
  font-size: 48px;
  color: #000000;
`

const BeeTitle = styled.h1`
  border-bottom: 6px solid #63966a;
  padding-bottom: 14px;
  margin-bottom: 5vh;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
`

const ParaImg = styled.img`
  width: 100%;
`

const AfricanHoneyBees = () => {
    return (
        <AfricanBeeContainer>
            <Container1>
                <BeeHeader>History of Africanized Honey Bees</BeeHeader>
                <ParaImg src={AfricanPara1}></ParaImg>
            </Container1>

            <Container2>
                <BeeTitle>Spread of Africanized Honey Bees in the United States</BeeTitle>
                <ParaImg src={Africanpt2}></ParaImg>
                <ParaImg src={AfricanbeeMap}></ParaImg>
            </Container2>

            <Container3>
                <ParaImg src={AfricanUtahMap}></ParaImg>
                <div></div>
                <Section3>
                    <ParaImg src={Africanpt3}></ParaImg>
                </Section3>

            </Container3>
            <Container4>
                <SectionModel>
                    <SectionTitle>
                        Stopping the spread of AFB
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
                    <SectionTitle>
                        Other Facts About AFBs
                    </SectionTitle>
                    <SectionContent>

                        How can I prepare?

    When involved in outdoor activities, be aware of your surroundings and 
    keep an eye out for bees.  Don't panic at the sight of a few bees foraging 
    in the flowers. Bees are generally very docile as they go about their work. 
    Unless you do something out of the ordinary, such as step on them, they will 
    generally not bother you.
                    </SectionContent>
                    <SectionContent>
    There are a few things you can do to be prepared:

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



        </ AfricanBeeContainer>

    )
}

export default AfricanHoneyBees