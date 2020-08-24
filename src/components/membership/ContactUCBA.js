import React from "react"
import styled from "styled-components"

import { BeeHeader, Container, Paragraph } from "../../styles/edustyles.js"

const BHeader = styled(BeeHeader)`
display: block;
margin-bottom: 2%;
padding-bottom: 1.5%;

@media (max-width: 500px) {
    margin-top: 8%;
}
`
const Url = styled.a`
    color:  #63966A;
`

const ContactUCBA = () => {
    return (
        <Container>
            <BHeader>General Contact Information</BHeader>
            <Paragraph>Mailing Address:</Paragraph>
            <Paragraph>Utah County Beekeepers Association<br></br>
            185 North 1300 East<br></br>
            Pleasant Grove, UT, 84062</Paragraph>
            <Paragraph>Email:</Paragraph>

            <Paragraph><Url href="mailto:ut.co.beekeepers@gmail.com">ut.co.beekeepers@gmail.com</Url></Paragraph>

            <Paragraph>You can also contact us through our <Url href="https://www.facebook.com/groups/332266457945" target="_blank" rel="noopener noreferrer">Facebook!</Url></Paragraph>

            <BHeader>Presidency Contact Information for 2020:</BHeader>

            <Paragraph>President: Ron Peterson - <Url href="mailto:president@utahcountybeekeepers.org">president@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Vice President 1: Terry Berger -<Url href="mailto:vicepresident1@utahcountybeekeepers.org">vicepresident1@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Vice President 2: Michelle Buswell -<Url href="mailto:vicepresident2@utahcountybeekeepers.org">vicepresident2@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Finance & Treasurer: Jenn White -<Url href="mailto:treasurer@utahcountybeekeepers.org">treasurer@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Publicity & Membership Coordinator: Daniel Webster -<Url href="mailto:publicity@utahcountybeekeepers.org">publicity@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Newsletter: Gary Jones -<Url href="mailto:newsletter@utahcountybeekeepers.org">newsletter@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Swarm Coordinator: Charlie Sigler -<Url href="mailto:swarm@utahcountybeekeepers.org">swarm@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Bee a Beekeeper Program Coordinator: Janelle Evans -<Url href="mailto:bab@utahcountybeekeepers.org">bab@utahcountybeekeepers.org</Url></Paragraph>
            <Paragraph>Assistant Bee a Beekeeper Program Coordinator: Lon Lewis - <Url href="mailto:bab2@utahcountybeekeepers.org">bab2@utahcountybeekeepers.org</Url></Paragraph>
        <Paragraph>Ben Matheson -<Url href="mailto:web@utahcountybeekeepers.org">web@utahcountybeekeepers.org</Url></Paragraph>
        <Paragraph style={{fontWeight: "bold"}}>Board of Directors:</Paragraph>
        <Paragraph>Sam Wimpfheimer -<Url href="mailto:swimpy99@utahcountybeekeepers.org">swimpy99@utahcountybeekeepers.org</Url></Paragraph>
        <Paragraph>Charlie Sigler -<Url href="mailto:charlie@utahcountybeekeepers.org">charlie@utahcountybeekeepers.org</Url></Paragraph>
        <Paragraph>Stephen Briles -<Url href="mailto:sbriles@utahcountybeekeepers.org">sbriles@utahcountybeekeepers.org</Url></Paragraph>
        <Paragraph>Knight -<Url href="mailto:lee@knightfamilyhoney.com">lee@knightfamilyhoney.com</Url></Paragraph>
        <Paragraph>Mike Shaffer -<Url href="mailto:mike@utahcountybeekeepers.org">mike@utahcountybeekeepers.org</Url></Paragraph>
</Container>

    )
}

export default ContactUCBA