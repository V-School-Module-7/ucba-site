import React from "react"
import styled from "styled-components"

import {    Container, 
            GreenLineContainer, 
            BoxTitle, 
            HeaderParagraph, 
            BeeHeader} from "../../styles/edustyles.js"

const BHeader = styled(BeeHeader)`
    display: block;
    margin-bottom: 2%;

    @media (max-width: 500px) {
        margin-top: 8%;
    }
  
`
const HelpfulList = styled.ul`
    margin: 0 0 2% 0 ;
   list-style-type: none;

   @media (max-width: 500px) {
    margin-top: 6%;
}
`
const ListItem = styled.li`
    color: black;
    font-family: Nunito;
`

const StyledLink = styled.a`
word-wrap: break-word;
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
                <ListItem><strong>Cache Valley Beekeepers Association</strong></ListItem>
                <ListItem>Facebook: <StyledLink href="http://www.facebook.com/groups/cachebeekeepers/" target="_blank" rel="noopener noreferrer">http://www.facebook.com/groups/cachebeekeepers/</StyledLink></ListItem>
                <ListItem>
                    website: <StyledLink href="https://utahpests.usu.edu/bees/htm/honey-bees/cache-county-beekeeping-info/cache-beekeepers-association/" target="_blank" rel="noopener noreferrer">https://utahpests.usu.edu/bees/htm/honey-bees/cache-county-beekeeping-info/cache-beekeepers-association/</StyledLink>
                </ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>Carbon County Beekeepers Association</strong></ListItem>
                <ListItem><StyledLink href="tel:+8665791501">(866) 579-1501</StyledLink></ListItem>
                <ListItem>email: <StyledLink href="mailto:llamasmama@hotmail.com">llamasmama@hotmail.com</StyledLink></ListItem>
            </HelpfulList >
            <HelpfulList>
                <ListItem><strong>Grand County</strong></ListItem>
                <ListItem>Jerry Shue <StyledLink href="tel +4352597541">(435) 259-7541</StyledLink></ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>Iron County 4-H Beekeeping Club</strong></ListItem>
                <ListItem>Blaine Nay <StyledLink href="tel:+4355868132">(435) 586-8132</StyledLink></ListItem>
                <ListItem>email: <StyledLink href="mailto:blaine@ironbee.us">blaine@ironbee.us</StyledLink></ListItem>
                <ListItem>website: <StyledLink href="www.ironbeekeeper.org" target="_blank" rel="noopener noreferrer">www.ironbeekeeper.org</StyledLink></ListItem>
                <ListItem>714 South 1175 West</ListItem>
                <ListItem>Cedar City UT 84720</ListItem>


            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>San Juan County</strong></ListItem>
                <ListItem>Dudley Beck <StyledLink href="tel:+4356722361">(435) 672-2361</StyledLink></ListItem>
            </HelpfulList>


            <HelpfulList>
                <ListItem><strong>Southern Utah Beekeepers</strong></ListItem>
                <ListItem>Facebook: <StyledLink href="https://www.facebook.com/groups/227241190622939/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/227241190622939/</StyledLink></ListItem>

            </HelpfulList>
            <HelpfulList>
                <ListItem><strong>USU Beekeeping & Entomology Club</strong></ListItem>
                <ListItem><StyledLink href="http://www.facebook.com/groups/112841172126201/" target="_blank" rel="noopener noreferrer">http://www.facebook.com/groups/112841172126201/</StyledLink></ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>University of Utah</strong></ListItem>
                <ListItem>Chris Rodesch <StyledLink href="tel:+8016336589">(801) 633-6589</StyledLink></ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>Utah Beekeepers Association</strong></ListItem>
                <ListItem> the state association</ListItem>
                <ListItem>website: <StyledLink href="www.utahbeekeepers.com" target="_blank" rel="noopener noreferrer">www.utahbeekeepers.com</StyledLink></ListItem>
                <ListItem><StyledLink href="mailto:taylorhoneyco@yahoo.com">taylorhoneyco@yahoo.com</StyledLink></ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>Utah County Beekeepers Association</strong></ListItem>
                <ListItem>website: <StyledLink href=">http://www.utahcountybeekeepers.org/" target="_blank" rel="noopener noreferrer">http://www.utahcountybeekeepers.org/</StyledLink></ListItem>
                <ListItem>Facebook: <StyledLink href="https://www.facebook.com/groups/332266457945/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/332266457945/</StyledLink></ListItem>
                <ListItem>Email: <StyledLink href="mailto:ut.co.beekeepers@gmail.com">ut.co.beekeepers@gmail.com</StyledLink></ListItem>
            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>Wasatch Beekeepers Association</strong></ListItem>
                <ListItem>serving the Salt Lake area</ListItem>
                <ListItem>website: <StyledLink href="http://www.wasatchbeekeepers.com/" target="_blank" rel="noopener noreferrer">http://www.wasatchbeekeepers.com/</StyledLink></ListItem>
                <ListItem>Facebook: <StyledLink href="https://www.facebook.com/groups/357351232625/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/357351232625/</StyledLink></ListItem>

            </HelpfulList>

            <HelpfulList>
                <ListItem><strong>Weber County Beekeepers Association</strong></ListItem>
                <ListItem>website: <StyledLink href="http://www.weberbeekeepersassociation.com/" target="_blank" rel="noopener noreferrer">http://www.weberbeekeepersassociation.com/</StyledLink></ListItem>
            </HelpfulList>

            <BHeader>Honey Information:</BHeader>
            <HelpfulList>
                <ListItem>National Honey Board - resources for producers and consumers</ListItem>
                <br></br>
                <ListItem>Honey Locator - find a local supplier of honey in your area here</ListItem>
                <br></br>
                <ListItem><StyledLink href="Honey.com" target="_blank" rel="noopener noreferrer">Honey.com</StyledLink></ListItem>
                <br></br>
                <ListItem>Sugar Free Recipes - Including using honey</ListItem>
            </HelpfulList>


            <BHeader>Beekeeping Supplies:</BHeader >
            <HelpfulList>
                <ListItem>Bee Commerce - supplies</ListItem>
                <br></br>
                <ListItem>Mann Lake - supplies</ListItem>
                <br></br>
                <ListItem>Dadant - supplies</ListItem>
                <br></br>
                <ListItem>Jones Bee - local supplier of bees, honey and supplies in Salt Lake City</ListItem>
                <br></br>
                <ListItem>Betterbee - supplies</ListItem>
                <br></br>
                <ListItem>Local Suppliers of beekeeping equipment</ListItem>
            </HelpfulList>



            <BHeader>Africanized Honey Bees:</BHeader>

            <HelpfulList>
                <ListItem> <StyledLink href="http://ag.utah.gov/news/africanmainpage.html" target="_blank" rel="noopener noreferrer">http://ag.utah.gov/news/africanmainpage.html</StyledLink></ListItem>
                <br></br>
                <ListItem><StyledLink href="http://www.westmtnapiary.com" target="_blank" rel="noopener noreferrer">http://www.westmtnapiary.com</StyledLink></ListItem>
            </HelpfulList>

            <BHeader>Beekeeping Information:</BHeader>

            <HelpfulList>
                <ListItem><StyledLink href="http://bushfarms.com/bees.htm" target="_blank" rel="noopener noreferrer">http://bushfarms.com/bees.htm</StyledLink></ListItem>
                <br></br>
                <ListItem>Site for mapping your hive locations:</ListItem>
                <br></br>
                <ListItem><StyledLink href="http://mapmybees.com/" target="_blank" rel="noopener noreferrer">http://mapmybees.com/</StyledLink></ListItem>
            </HelpfulList>

        </Container >
    )
}

export default Links