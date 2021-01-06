import React from "react"
import styled from "styled-components"

import { BeeHeader, Container, Paragraph } from "../../styles/globalstyles.js"

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

           <br></br>
           <br></br>
</Container>

    )
}

export default ContactUCBA