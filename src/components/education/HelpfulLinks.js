import React from "react"
import styled from "styled-components"

import { Container, GreenLineContainer, BoxTitle, HeaderParagraph, BeeHeader, Paragraph, TextHeader, CenteringContainer } from "../../styles/edustyles.js"

const BHeader = styled(BeeHeader)`
    display: block
`
const HelpfulList = styled.ul`
   list-style-type: none;
`
const ListItem = styled.li`
    color: red;
`

const Links = () => {
    return (
        <Container>
            <GreenLineContainer>
                <BoxTitle>Helpful Links</BoxTitle>

                <HeaderParagraph>We are pleased to provide the follow links for your use. If you should find that a link is no longer valid, or if you would like to suggest a link, please contact us at webmaster@utahcountybeekeepers.org</HeaderParagraph>
            </GreenLineContainer>


            <BHeader>Utah Bee Associations:</BHeader>

            <HelpfulList>
                <ListItem>Cache Valley Beekeepers Association</ListItem>
                <ListItem>Facebook: http://www.facebook.com/groups/cachebeekeepers/</ListItem>
                <ListItem>
                    website: https://utahpests.usu.edu/bees/htm/honey-bees/cache-county-beekeeping-info/ cache-beekeepers-association/
                </ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem>Carbon County Beekeepers Association
                </ListItem>
                <ListItem>Carbon County Beekeepers Association</ListItem>
                <ListItem>(866) 579-1501</ListItem>
                <ListItem>email: llamasmama@hotmail.com</ListItem>
                </HelpfulList >
                <HelpfulList>
                    <ListItem>Grand County</ListItem>
                    <ListItem>Jerry Shue(435) 259 - 7541</ListItem>
                    </HelpfulList>
    
    < Paragraph >
    Iron County 4 - H Beekeeping Club
Blaine Nay(435) 586 - 8132
email: blaine@ironbee.us
website: www.ironbeekeeper.org
714 South 1175 West
Cedar City UT 84720
San Juan County
Dudley Beck(435) 672 - 2361</Paragraph >

    <Paragraph>
        Southern Utah Beekeepers
Facebook: https://www.facebook.com/groups/227241190622939/</Paragraph>

    <Paragraph>
        USU Beekeeping & Entomology Club
        http://www.facebook.com/groups/112841172126201/
        University of Utah
        Chris Rodesch  (801) 633-6589
</Paragraph>

    <Paragraph>
        Utah Beekeepers Association
        the state association
        website: www.utahbeekeepers.com
taylorhoneyco@yahoo.com</Paragraph>

    <Paragraph>
        Utah County Beekeepers Association
        website: http://www.utahcountybeekeepers.org/
        Facebook: https://www.facebook.com/groups/332266457945/
Email: ut.co.beekeepers@gmail.com</Paragraph>

    <Paragraph>
        Wasatch Beekeepers Association
        serving the Salt Lake area
        website: http://www.wasatchbeekeepers.com/
Facebook: https://www.facebook.com/groups/357351232625/</Paragraph>

    <Paragraph>
        Weber County Beekeepers Association
website: http://www.weberbeekeepersassociation.com/</Paragraph>

    <BHeader>
        Honey Information:</BHeader>

National Honey Board - resources for producers and consumers

Honey Locator - find a local supplier of honey in your area here

Honey.com

Sugar Free Recipes - Including using honey

    < BHeader >
    Beekeeping Supplies:</BHeader >

        Bee Commerce - supplies

Mann Lake - supplies

Dadant - supplies

Jones Bee - local supplier of bees, honey and supplies in Salt Lake City

Betterbee - supplies

Local Suppliers of beekeeping equipment

    < BHeader >
    Africanized Honey Bees:</BHeader >

        http://ag.utah.gov/news/africanmainpage.html

http://www.westmtnapiary.com

<BHeader>
    Beekeeping Information:</BHeader>

http://bushfarms.com/bees.htm

Site for mapping your hive locations:

    http://mapmybees.com/






        </Container >
    )
}

export default Links