import React from 'react'
import styled from 'styled-components'

import {
    Paragraph,
    BeeHeader,
    DiseaseContainer,
    CenteringContainer,
    BoxTitle
} from '../../styles/edustyles.js'

const CalendarContainer = styled(DiseaseContainer)`
margin-top: 0;

 @media (max-width: 900px){
    margin: 0 0 0 5% ;
}
@media (max-width: 500px){
    padding-right: 3%;
    margin-left: 0;
}

`

const Subtitle = styled(BoxTitle)`
    display: inline-block;
    margin-left: 0;
    font-size: 24px;

    @media (max-width: 900px){
        margin: 2%;
        font-size: 20px;
      }

      @media (max-width: 500px){
        font-size: 16px;
    }
`

const Para = styled(Paragraph)`
    line-height: 27px;
`

const List = styled.ul`
    font-size: 20px;
    line-height: 27px;
    font-family: Nunito;
    display: block;
    padding: 0;
    list-style: none;

@media (max-width: 900px) {
  font-size: 16px;
  line-height: 24px;
}
`

const Item = styled.li`
    display: block;
`



const AnnualCalendar = () => {
    return (
        <CalendarContainer>
            <CenteringContainer>
                <BeeHeader id="january">January</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>
            <Para>The bees really aren't doing much this month other than just staying alive. They are clustered up on the frames but will move around when temperatures are above 40F. When they do move, it is to go as a cluster to a new area of the hive with honey stores. The cluster may cover 4-8 frames from top to bottom. During the month of January, the bees may consume 20- 25 ounces of food per day to maintain the hive's temperature.</Para>

            <Subtitle>The Beekeeper</Subtitle>
            <Para>Order package bees or nukes for next year. There is actually quite a bit that you can be doing this time of year. Below is a suggested list of "to do" items. If they make sense to you, try them.</Para>

            <List>
                <Item>- Keep the hive entrances clear. Brush away snow and dead bees to ensure adequate ventilation.</Item>
                <Item>- Check that your hive has enough food to last until spring. On a mild day when there is no wind and bees are taking cleansing flights, take a quick peak inside the hive. Don't remove any frames, just look under the cover and make sure there are bees. They should be loosely clustered in the top box and slightly active. Also look for sealed honey stores; if you don't notice any, you may need to start feeding, but remember, if you start to feed, you cannot stop until spring.</Item>
                <Item>- Check mouse blocks (if you use them) to ensure that they are still in place and secure.</Item>
                <Item>- Clean and repair your other equipment in anticipation of the spring.</Item>
                <Item>- Read bee related literature - hardcopy or on the web</Item>
                <Item>- Think about exploring new honey markets for next year - what products could you offer but don't? Is there a market for you?</Item>
            </List>

            <CenteringContainer>
                <BeeHeader id="february">February</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>
            <Para>The queen will start to lay eggs in a small grouping again late in this month as the temperatures begin to slowly rise. It will be small and in the center of the cluster but will grow over time as the season progresses. The size of the brood cluster depends directly on temperature; as it gets warmer, the bees inside the hive are able to move around and utilize their honey stores for the new brood. During February the bees may consume as much as 2 pounds per day - so make sure you have plenty of honey still store or you will need to start feeding to build up for the spring.</Para>
            <Para></Para>
            <Para></Para>

            <Subtitle>The Beekeeper</Subtitle>
            <Para>As the weather warms and the bees start flying, you may want to take the opportunity to talk with your neighbors about the cleansing flights your bees are taking. Suggest that they don't hang any laundry out on those first warm days to prevent the inevitable staining. Explaining the need of the bees to take cleansing flights may earn you a sympathetic neighbor, especially if presented with a little honey or honey baked goody.</Para>
            <Para>Identify your needs for the upcoming season - how many supers, frames, bee packages etc will you need to meet your needs? Order with plenty of time to pickup, assemble and paint your new equipment BEFORE new packages arrive. When purchasing paint, remember to ask for returned cans of miss mix paints, you can usually get these for a better price than new cans and they work just as well.</Para>
            <Para>Make sure the hives have enough honey or feed to survive until spring. Either carefully lift the hive and see if it feels heavy or carefully check the hive on a warm day when the bees are flying.</Para>


            <CenteringContainer>
                <BeeHeader id="march">March</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>
            <Para>As the weather warms and early blooming flowers appear, the hive comes to life. There will be a greater density of brood throughout the combs in the brood chamber. The upward curve of growth begins this month but beware sudden cold weather that can cause the queen to stop laying or cause food shortages. It is possible for the bees to consume up to 3 pounds of food per day as the brood increases; be prepared to supplement feed if needed.



</Para>
            <Para></Para>
            <Para></Para>

            <Subtitle>The Beekeeper</Subtitle>
            <Para>Finish those preparations for new colonies - make absolutely sure that you the right number of packages on order; now is also the time to re-evaluate your honey supers and make sure they are in good condition for the new year.</Para>

            <Para>On a warm day when the bees are actively flying, open the hive to check the status of the colony. Look for the following:</Para>
            <List>
                <Item>* Check that the hive is queen right - are there eggs in the brood chamber? You my need to combine weak colonies or equalize all the hives in the bee yard for spring survival.</Item>
                <Item>* Add pollen substitutes for rapid hive growth - either in patty form (in the hive during inclement weather) or dry substitute (given outside the hive) if you so desire.</Item>
                <Item>* Check the hive weight and make sure that there is enough honey to last if there is a sudden cold spell or nectar/pollen shortage in the area around your colonies.</Item>
                <Item>Don't hesitate to supplement with syrup or pollen if you are worried - you don't want to loose that hive if they made it through the winter!</Item>
            </List >

            <CenteringContainer>
                <BeeHeader id="april">April</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>
            <Para>If you have been feeding through the winter or early spring, keep doing it; changing weather can force the bees to stay in the hive limiting their ability to forage. If your hive is weak, you may need to give pollen substitute to ensure brood growth. The warm weather is bringing out the early blooming plants and the bees are now desperately seeking pollen for the brood. Dandelions, willows, fruit trees and some berries are now in bloom and are the major source of pollen for the first part of the season.</Para>


            <Subtitle>The Beekeeper</Subtitle>
            <Para>Now is the first real month of work for the year. You will need to check your hives on the first warm day for eggs, signs of diseases and to reverse the brood supers. If the colony is strong and is already covering much of both boxes, there is no need to reverse the boxes. If you find a strong colony, consider splitting as the weather warms.  Clean the bottom board either way.</Para>
            <Para>Estimate how strong the colony is; if weak, consider combining with another colony. Check for brood at several stages of development; the chance of dwindling (where old bees die off faster than new bees emerge) can happen if temperatures, weather and food sources are less than ideal.</Para>
            <Para>When you are looking in the hive, check for mites or signs of disease. If you find signs of disease or parasites, take immediate steps to treat and prevent the problem from becoming epidemic.Towards the end of the month, begin looking for colony growth or swarm cells. Add supers if needed to prevent swarming.</Para>
            <Para>For those of you starting new this year, make sure all of your equipment is assembled and painted. By now, you should have at lease one deep brood box and 10 frames ready, along with a bottom board, inner cover, cover and feeding mechanism for when packages arrive. You must have a place for those bees when they arrive.</Para>

            <CenteringContainer>
                <BeeHeader id="may">May</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>
            <Para>The hive population is growing quickly; for existing hives from last year, they may already be at 80% of their strength, new hives will be building comb as fast as they can.</Para>
            <Para>For new hives, keep feeding the bees (either honey or sugar syrup) as they need all the feed they can get to draw out the comb. Without the feed, you hive won't be able to produce any surplus honey keep feeding them till they stop taking it or until you put the first honey super on.</Para>
            <Para>For existing hives from last year, it is critical that you monitor and add supers as needed otherwise your hive will swarm. When inspecting, look for swarm cells on the bottom of frames. Remove them if you can but your best bet is to monitor and add supers before they feel congested. Also check your ventilation; inadequate ventilation (too hot) can cause them to swarm.</Para>

            <Subtitle>The Beekeeper</Subtitle>
            <Para>Monitor your hives to prevent swarming on existing hives. For new hives check every other week or so to ensure that the queen is laying and the bees are drawing out the foundation completely. If you have been feeding, be sure to keep feeding until you place a honey super on the hive or when it appears the bees are no longer taking the feed. For existing hives, you may be able to put a honey super on now or by mid-month. Even new packages should have the second brood box on by the end of the month.</Para>
            <Para>If you haven't already, consider treatment options for both Varrora and tracheal mites BEFORE putting honey supers on the hive, you cannot have medications in the hive when the bees are collecting honey for human consumption. New hives probably don’t need to be treated until the fall so don't worry until after the first harvest about treating. All beekeepers need to research and pursue treatment options before a problem arises.</Para>

            <CenteringContainer>
                <BeeHeader id="june">June</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>
            <Para>The bee population in your hive(s) should be increasing greatly at this time, even in new packages. This population increase should coincide with the honey flow which should be starting about mid month and continue through July.</Para>
            <Para>Your bees will be at their busiest for the next several weeks as they take full advantage of the season and gather all of the honey, pollen and propolis they can. Encourage your bees to grow and increase as this will help you have a larger honey harvest.</Para>
            <Para>Check the hive population, you want it to be steadily growing and strong. To check the population, observe the bees flying in and out of the hive; if you can easily count the number of bees the colony may be weak or compromised A strong hive will have between 30 and 90 bees arriving/leaving the landing board per minute.</Para>

            <Subtitle>The Beekeeper</Subtitle>

            <Para> Watch for signs of honey flows and ensure the bees have plenty of room to grow and store honey. If you do see signs of disease or parasites remember to NOT medicate until the honey has been pulled off.</Para>
            <Para>Other tasks to consider: keep adding supers as needed to prevent swarming (remember to reverse honey supers) and don't add too many to soon or they may not fill completely; check for diseases; check for a strong queen (eggs and brood) - requeen if needed; make sure you have enough honey supers and frames to last through the summer.</Para>
            <Para>There is much for you to do this month. One of the key items for this time of year is to keep the hives cool; there are many ways to do this:</Para>
            <List>
                <li>a)shade the hive from noonday sun with fencing, boards, shrubs or shade breaks</li>
                <li>b) stagger the supers slightly to increase air flow throught the hive</li>
                <li>c) make sure fresh water is available at all times,</li>
                <li>d) bore 3/4" holes into honey supers (upper corners) or</li>
                <li>e) space the inner cover up off of the top super by a little (not too much or they make make burr comb).</li>
            </List>


            <CenteringContainer>
                <BeeHeader id="july">July</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>


            <Para>The population of the hive should start to peak near the end of the month provided they are a strong hive. Some colonies this year have struggled to boost numbers and this may be due to the late packages and the bad weather in California. Some queens may not have been mated well and it is best to combine weak colonies to ensure winter survival.</Para>
            <Para>All hives should be taking advantage of the nectar flows happening this month (and going forward) and nectar flows are indicated by the following: fresh white wax on comb and top bars, bees are easy to work, foundation is drawn out quickly, bees fanning at the entrance, large amounts of nectar ripening in the cells of honey supers.  With luck, you may be able to harvest an early crop!</Para>
            <Para></Para>

            <Subtitle>The Beekeeper</Subtitle>

            <Para>Continue to watch your hives for late swarms; although most swarming behavior stops in late June, some hives may swarm late. Swarms that appear in July are, as the adage goes, "not worth a fly" as they may not have the time to build up enough strength and stores to survive the winter.</Para>
            <Para>Keep an open eye for robbing wasps, hornets and other honey bees. During the summer there may be dearths periods of no nectar flow) that cause other honey bees to look for week hives to rob. A strong colony can usuallyContinue to watch your hives for late swarms; although most swarming behavior stops in late June, some hives may swarm late. Swarms that appear in July are, as the adage goes, "not worth a fly" as they may not have the time to build up enough strength and stores to survive the winter.</Para>
            <Para>Make sure your hives have some shade or access to easy water so that they can cool the hive effectively. Too much heat can cause the bees to spend more time cooling the hive than gathering nectar to make honey. Add supers as needed to alleviate crowding and to encourage the bees to store more honey than they need.repel invasion by wasps and hornets but watch for signs of struggle, locate the offending nest and destroy it.</Para>

            <CenteringContainer>
                <BeeHeader id="august">August</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>

            <Para>The colony is now at or near it's peak population. You will probably notice bees bearding up on the front entrace of the hive in the evenings. This is simply the bees way of cooling the hive on these hot summer days. However, too many bees may be an indication of poor ventiliation or a lack of room in the hive. If needed, add a super (there is still time to fill it up) or give more ventilation by propping the cover up about a 1/4".</Para>
            <Para>Add supers as needed but keep in mind that harvest time is fast approaching. If needed, harvest full supers now to make room. Use shallow or medium supers instead of deep or provide the supers with drawn out foundation.</Para>
            <Para>The mite population will also be booming at this time (in 2nd year colonies) so don't forget to check mite counts and be prepared to treat AFTER the honey comes off.</Para>

            <Subtitle>The Beekeeper</Subtitle>

            <Para> Be prepared for harvest time next month; order bottles & caps, buckets and whatever else you may need for the harvest season. You don't want to wait until last minute and have full supers setting around with nowhere to put the honey.</Para>
            <Para>Watch for robbing acitivity from other bees or wasps. The end of summer is when other, stronger hives or wasps/hornets will attempt to steal honey from weaker hives. If necessary, reduce the entrace of the hive being robbed to help them defend the hive more easily.</Para>
            <Para>This is the month when the winter bees are being laid; near the end of the month. Ensure a strong winter colony by checking the food stores starting at the end of this month; there should be plenty of food in the brood boxes. Remember that a strong hive going into winter with plenty of food will ensure a strong hive coming out in the spring and that means more honey next year.</Para>
            <Para>Now is the time to ensure that your bees will have enough room to last the summer but not so much that they can't fill the supers before harvest time. Follow the rule of 7/10; if 7 of the 10 frames are fully capped, add another super (early in the month). If it is later in the month, leave them be as they can begin to fill the bottom brood chambers with winter stores.</Para>

            <CenteringContainer>
                <BeeHeader id="september">September</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>

            <Para>The population of the hive is beginning to decrease; older bees that die off are not replaced in the same numbers by the new brood. Drones are being removed in numbers from the hives by the workers to conserve winter stores. Nectar and pollen sources are becoming more scarce as the cooler weather moves in and plants begin to die off or go dormant.</Para>
            <Para>The worker bees will begin to bring in large amounts of propolis to seal the hive against drafts for the winter and on cold nights they will begin to cluster inside the hive. There may be intense robbing activity if you have a weak hive in your apiary - take steps to equalize colonies or prevent robbing.</Para>
            <Para>Remove all honey supers before the end of month (if not sooner) to allow the bees to fill the brood chambers with the winter honey/pollen stores.</Para>

            <Subtitle>The Beekeeper</Subtitle>

            <Para>You have a lot to do this month. First, you should be pulling off all honey supers and be either securely storing them or extracting them. This will prevent the bees from wasting nectar/energy filling a super/frames incompletely and allows them to build up their stores for winter survival.</Para>
            <Para>Secondly, you should check your hive for honey stores; if the hive does not feel heavy or the bottom brood supers are not (75- 80%) full of honey you will need to consider feeding them. A 2:1 ratio (sugar/water) is used in the fall to assist the bees in deyhydrating the syrup.</Para>
            <Para>Thirdly, treat for mites - both tracheal and varrora. This is the best time as the colony is going broodless and any mites present will be exposed to your removal method. Also treat for diseases such as foulbrood or nosema.</Para>
            <Para>Fourthly, ensure that your hive has adequate ventilation for the winter - a lack of ventilation can result in a build up of moisture which can then condense on the inner cover and then turn cold and drop back onto the colony chilling and possibly killing them. Too much moisture can also result in mildew, mold and possibly spoil any uncapped honey stores.</Para>
            <Para>Lastly, protect the hive from the worst of wind and snow/rain to help the colony maintain temperature in the cluster.</Para>

            <CenteringContainer>
                <BeeHeader id="october">October</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>

            <Para>The bees are busy gathering the last bits of nectar and pollen they can find. There are a few late blooming flowers that provide both of these (asters, rabbit brush etc) to help the hive prepare for the coming winter. They are also busy gathering propolis to seal the hive against drafts which can harm the colony while in cluster formation, drafts/cracks allow cold air to blow into the hive and can chill and kill the outer cluster bees and reduce the overall population which keeps the queen and colony warm.</Para>
            <Para>The workers are now starting to kick out almost all of the drones to help reserve the honey stores for those bees that will actually help the colony survive. A few drones may be retained throughout the winter for reasons not completely understood so if you see them flying on warm days don't be concerned (unless you see lots of them, then you could have a drone laying queen or an egg laying worker).</Para>
            <Para></Para>

            <Subtitle>The Beekeeper</Subtitle>

            <Para>Although the work load is lessening, the work you do this month is critical. Check that your hives have enough honey stores to survive the winter; you need 60-100lbs of honey for your colony to survive. Check your hive by carefully lifting from the bottom back of the landing board; if the hive feels heavy and you can barely move it, you should be fine. If the hive moves easily and feels light, start emergency feeding so that the bees can store the food for winter use. Remember that winter feed is different from spring feed in that it is a 2:1 ratio (sugar/water). Feed until the first hard frost when the bees form a cluster or until they stop taking the feed, whichever comes first.</Para>
            <Para>Take steps to prevent mice from getting into your hives, mouse guards or entrance reducers should do the trick. Add a windbreak to protect your hives if they are located in an area where winter winds are prevalent.</Para>
            <Para>Ensure that the bees do have some ventilation at the top of the hive for the release of the moisture produced throughout the winter - if the moisture does not leave the hive, it will collect on the inside of the cover/inner cover where it will condense, chill and drip on the cluster causing sudden drops in temperature and will cause the bees to struggle. Another affect of poor ventilation is mildewing and molding on the frames which can sour the honey and give the bees nosema (dysentery) which can destroy a hive quickly.</Para>

            <CenteringContainer>
                <BeeHeader id="november">November</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>


            <Para>The queen's egg laying comes to a stop in this month. The bees begin forming their cluster for the winter. There will be some flight activity on the warmer days, mostly cleasning flights as there is almost no food/nectar/pollen for the bees to gather at this point.</Para>
            <Para>At this time almost all of the drones in the hive have been kicked out. A small population may remain but it is more likely that all have been eliminated from the hive. As you may know, the worker bees remove the drones from the hive since they are a drain on the hives winter resources.</Para>


            <Subtitle>The Beekeeper</Subtitle>

            <Para> There is not much to be done for the bees at this time. Remove all medication treatments (if remaining) on a warm day with little or no wind. Ensure that entrance reducers are on the hive to help maintain temperature. This is the time of year when mice will try to enter the hive, check that your entrance reducers are on properly to keep mice out. Check that your hives have enough ventilation to help remove moisture from the hive; excess moisture can seriously harm your colonies. Catch up on some reading in books or trade magazines (see the Bulk Book Purchase feature). Identify additional markets for your bee related products for the next year. Make plans to attend the next association meeting in December. Take a well deserved rest and enjoy the upcoming holidays. Think about workshops and meeting agendas that you would like to see for the next year - share those ideas with the presidency of the association. Spread the word about the UCBA and lets see if we can't find some new members to share the joy with!</Para>

            <CenteringContainer>
                <BeeHeader id="december">December</BeeHeader>
            </CenteringContainer>

            <Subtitle>The Bees</Subtitle>
            <Para>The bees really aren't doing much this month other than just staying alive. They are clustered up on the frames but will move around when temperatures are above 40F. When they do move, it is to go as a cluster to a new area of the hive with honey stores. The cluster may cover 4-8 frames from top to bottom</Para>

            <Subtitle>The Beekeeper</Subtitle>
            <Para>Now's a good time for a year end review.  Go over your record book, supplies, and equipment.  If your record book isn't up to date, write down all those things you forgot to write down when you were supposed to.  Even if you don't get the month right, you'll have them entered, and maybe can straighten them out later.  Especially important are medication dates, splits, harvest dates, and amount per colony.</Para>


        </CalendarContainer>

    )
}

export default AnnualCalendar