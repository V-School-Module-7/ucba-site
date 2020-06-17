import React from "react"
import styled from "styled-components"

import { Container, GreenLineContainer, BoxTitle, HeaderParagraph, BeeHeader, Paragraph, TextHeader, CenteringContainer } from "../../styles/edustyles.js"

const BHeader = styled(BeeHeader)`
    display: block
`
const HelpfulList = styled.ul`
    margin: 5% 0;
   list-style-type: none;
`
const ListItem = styled.li`
    color: black;
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
                <ListItem>Facebook: <a href="http://www.facebook.com/groups/cachebeekeepers/" target="_blank" rel="noopener noreferrer">http://www.facebook.com/groups/cachebeekeepers/</a></ListItem>
                <ListItem>
                    website: <a href="https://utahpests.usu.edu/bees/htm/honey-bees/cache-county-beekeeping-info/cache-beekeepers-association/" target="_blank" rel="noopener noreferrer">https://utahpests.usu.edu/bees/htm/honey-bees/cache-county-beekeeping-info/cache-beekeepers-association/</a>
                </ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem>Carbon County Beekeepers Association</ListItem>
                <ListItem>(866) 579-1501</ListItem>
                <ListItem>email: <a href="mailto:llamasmama@hotmail.com">llamasmama@hotmail.com</a></ListItem>
            </HelpfulList >
            <HelpfulList>
                <ListItem>Grand County</ListItem>
                <ListItem>Jerry Shue(435) 259 - 7541</ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem>Iron County 4 - H Beekeeping Club</ListItem>
                <ListItem>Blaine Nay(435) 586 - 8132</ListItem>
                <ListItem>email: blaine@ironbee.us</ListItem>
                <ListItem>website: www.ironbeekeeper.org</ListItem>
                <ListItem>714 South 1175 West</ListItem>
                <ListItem>Cedar City UT 84720</ListItem>


            </HelpfulList>

            <HelpfulList>
                <ListItem>San Juan County</ListItem>
                <ListItem>Dudley Beck(435) 672 - 2361</ListItem>
            </HelpfulList>


            <HelpfulList>
                <ListItem>Southern Utah Beekeepers</ListItem>
                <ListItem>Facebook: <a href="https://www.facebook.com/groups/227241190622939/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/227241190622939/</a></ListItem>

            </HelpfulList>
            <HelpfulList>
                <ListItem>USU Beekeeping & Entomology Club</ListItem>
                <ListItem><a href="http://www.facebook.com/groups/112841172126201/" target="_blank" rel="noopener noreferrer">http://www.facebook.com/groups/112841172126201/</a></ListItem>
                <ListItem>University of Utah</ListItem>
                <ListItem>Chris Rodesch (801) 633-6589</ListItem>
            </HelpfulList>
            <HelpfulList>
                <ListItem>Utah Beekeepers Association</ListItem>
                <ListItem> the state association</ListItem>
                <ListItem>website: <a href="www.utahbeekeepers.com" target="_blank" rel="noopener noreferrer">www.utahbeekeepers.com</a></ListItem>
                <ListItem>taylorhoneyco@yahoo.com</ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem>Utah County Beekeepers Association</ListItem>
                <ListItem>website: <a href=">http://www.utahcountybeekeepers.org/" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/</a></ListItem>
                <ListItem>Facebook: <a href="https://www.facebook.com/groups/332266457945/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/332266457945/</a></ListItem>
                <ListItem>Email: ut.co.beekeepers@gmail.com</ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem>Wasatch Beekeepers Association</ListItem>
                <ListItem>serving the Salt Lake area</ListItem>
                <ListItem>website: <a href="http://www.wasatchbeekeepers.com/" target="_blank" rel="noopener noreferrer">http://www.wasatchbeekeepers.com/</a></ListItem>
                <ListItem>Facebook: <a href="https://www.facebook.com/groups/357351232625/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/357351232625/</a></ListItem>

            </HelpfulList>

            <HelpfulList>
                <ListItem>Weber County Beekeepers Association</ListItem>
                <ListItem>website: <a href="http://www.weberbeekeepersassociation.com/" target="_blank" rel="noopener noreferrer">http://www.weberbeekeepersassociation.com/</a></ListItem>
            </HelpfulList>

            <BHeader>Honey Information:</BHeader>

National Honey Board - resources for producers and consumers

Honey Locator - find a local supplier of honey in your area here

Honey.com

Sugar Free Recipes - Including using honey

            <BHeader>Beekeeping Supplies:</BHeader >

        Bee Commerce - supplies

Mann Lake - supplies

Dadant - supplies

Jones Bee - local supplier of bees, honey and supplies in Salt Lake City

Betterbee - supplies

Local Suppliers of beekeeping equipment

            <BHeader>Africanized Honey Bees:</BHeader>

            <a href="http://ag.utah.gov/news/africanmainpage.html" target="_blank" rel="noopener noreferrer">http://ag.utah.gov/news/africanmainpage.html</a>

            <a href="http://www.westmtnapiary.com" target="_blank" rel="noopener noreferrer">http://www.westmtnapiary.com</a>

            <BHeader>Beekeeping Information:</BHeader>

            <a href="http://bushfarms.com/bees.htm" target="_blank" rel="noopener noreferrer">http://bushfarms.com/bees.htm</a>

Site for mapping your hive locations:

            <a href="http://mapmybees.com/" target="_blank" rel="noopener noreferrer">http://mapmybees.com/</a>

        </Container >
    )
}

export default Links