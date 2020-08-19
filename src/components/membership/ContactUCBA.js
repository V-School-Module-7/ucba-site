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

const ContactUCBA = () => {
    return (
        <Container>
            <BHeader>General Contact Information</BHeader>
            <Paragraph>Mailing Address:</Paragraph>
            <Paragraph>Utah County Beekeepers Association</Paragraph>
            <Paragraph>185 North 1300 East</Paragraph>
            <Paragraph>Pleasant Grove, UT, 84062</Paragraph>
            <Paragraph>Email:</Paragraph>

            <Paragraph><a href="mailto:ut.co.beekeepers@gmail.com">ut.co.beekeepers@gmail.com</a></Paragraph>

            <Paragraph>You can also contact us through our Facebook!</Paragraph>

            <BHeader>Presidency Contact Information for 2020:</BHeader>

            <Paragraph>President: Ron Peterson - <a href="mailto:president@utahcountybeekeepers.org">president@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Vice President 1: Terry Berger -<a href="mailto:vicepresident1@utahcountybeekeepers.org">vicepresident1@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Vice President 2: Michelle Buswell -<a href="mailto:vicepresident2@utahcountybeekeepers.org">vicepresident2@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Finance & Treasurer: Jenn White -<a href="mailto:treasurer@utahcountybeekeepers.org">treasurer@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Publicity & Membership Coordinator: Daniel Webster -<a href="mailto:publicity@utahcountybeekeepers.org">publicity@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Newsletter: Gary Jones -<a href="mailto:newsletter@utahcountybeekeepers.org">newsletter@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Swarm Coordinator: Charlie Sigler -<a href="mailto:swarm@utahcountybeekeepers.org">swarm@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Bee a Beekeeper Program Coordinator: Janelle Evans -<a href="mailto:bab@utahcountybeekeepers.org">bab@utahcountybeekeepers.org</a></Paragraph>
            <Paragraph>Assistant Bee a Beekeeper Program Coordinator: Lon Lewis - <a href="mailto:bab2@utahcountybeekeepers.org">bab2@utahcountybeekeepers.org</a></Paragraph>
        <Paragraph>Ben Matheson -<a href="mailto:web@utahcountybeekeepers.org">web@utahcountybeekeepers.org</a></Paragraph>
        <Paragraph>Board of Directors:</Paragraph>
        <Paragraph>Sam Wimpfheimer -<a href="mailto:swimpy99@utahcountybeekeepers.org">swimpy99@utahcountybeekeepers.org</a></Paragraph>
        <Paragraph>Charlie Sigler -<a href="mailto:charlie@utahcountybeekeepers.org">charlie@utahcountybeekeepers.org</a></Paragraph>
        <Paragraph>Stephen Briles -<a href="mailto:sbriles@utahcountybeekeepers.org">sbriles@utahcountybeekeepers.org</a></Paragraph>
        <Paragraph>Knight -<a href="mailto:lee@knightfamilyhoney.com">lee@knightfamilyhoney.com</a></Paragraph>
        <Paragraph>Mike Shaffer -<a href="mailto:mike@utahcountybeekeepers.org">mike@utahcountybeekeepers.org</a></Paragraph>
</Container>

    )
}

export default ContactUCBA