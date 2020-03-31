import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: #e8e8e8;
  margin: 0;
  display: grid;
  grid-template-columns: 10fr 45fr 10fr 20fr 15fr;
  font-weight: 800;
  font-size: 20px;
  padding: 15px;
  text-decoration: ${props => props.textDecor};
  color: ${props => props.color}; 
  min-height: 300px;

  @media (max-width: 500px) {
    display: block;
}
`
const MailBox = styled.div`
  margin: 0;
  width: 100%;
  grid-column-start: 2;
  gird-column-end: 3;
  color: black;
  display: inline-block

`

const ContactBox = styled.div`
  margin: 0;
  width: 100%;
  grid-column-start: 4;
  gird-column-end: 5;
  color: black;
  padding-top: 20px;
  /* text-decoration: none; */
`

const UnderLine = styled.hr`
    border: 1px solid green
`

const MailTitle = styled.p`
display: inline-block,
margin: 0,
`

const AddressBox = styled.p`
    margin: 0,
    padding: 0px
    display: inline-block
`



const Footer = () => (
  <FooterContainer bgColor="lavender">
        <MailBox textDecor="textDecor">
             
            <MailTitle> 
                Mailing Address: 
            <UnderLine />
            </MailTitle>
            
            <AddressBox>
                Utah County Beekeeper Association <br />
                185 North 1300 East <br />
                Pleasant Grove, UT <br />
                84062
            </AddressBox>
        </MailBox>
        <ContactBox>
            <p style={{
            display: `inline-block`,
            margin: `0`,
            }}>
                Contact us at: 
                <UnderLine />
            </p>
            <AddressBox>
                <p>ut.co.beekeepers@gmail.com</p>
                
                <a  href="https://www.facebook.com/groups/332266457945/" >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEW0lEQVRoQ92aXWgcVRTH/+e2Sh5WFKsgFUQQ9t6ZCKIpVlSqVPyq6IMI+uCL4Fdj2zRWKlWqEaoWxTaxbdJHwSeVvqgYfdMoWoWFvMg9syQlCCJUBcXERtydI3fZ2WY3m85kcidtnLdlz/2f/2/OnblfQ1jjF6X5D8OwVK/Xbyaim4joMgClOI5Lae3y/K+UmhWRMwB+j+P4x3q9Xpmenj59Lq0lAcrl8u1KqVcAbAWwLo8hD21qAD4BMMLMX3XTWwTQ19d30ezs7CgRPenBgDcJERkulUp7K5XKvwtF2wCa5seJ6C5vmf0Kfc7MDwCIE9k2AK31YSLa7TenXzUR2R9F0YFFAMaYOwB86TddIWp1AFuY+Vun3qqAMeYEgIcLSelZVEQ+iKLosRZAuVy+Qin1C4D1nnMVJTc7Pz9/5czMzHyjAsaYewB8UVS2InTjON5WrVbHGwBBEAyKyKEiEhWlKSL9URSNJRV4HcBLRSUrSPc1Zh5KKjAsIgMFJSpK9h1mfqEBoLU+RkT9RWXqovtX85n7HkAEQDpi7gSwJ8XP+QEQkdF6vT40NTX161IGtdaPE9H7KQCHmHnPaldgHzMfTKv0BQlAROPW2m1p5ptdOksFDjPz86tZgU3MXFmrAKeZ+aouD2uDJwzDa0RkYwInIvcCGDoXrJteR1E0mLxGR0Vke5a7kyeGiD601j7ara0x5k0ALy6cl2XJsaoAAN5g5pc7jRljrgVwarnmnQ4RjVhrd69KBQA0Rs1OgCAIbhGR77Lc8c6YNQ8A4F1mHlizFegEGBORZ/OUMmMb710IwBFm3pVUwCfACSL6pgPspLX2ZCdsb2/v5bVazW3btF1ENAjg1pSbUxjATmY+mrEyXcOMMW4PaEuKxlFm3llEBVYMEATBlIhct2YBjDFue7EnBeAYM++44CpgjNkA4LcMXfAsgDHmOIBnMjTKErKiLlQul29QSk2mJXLriiiKnkvWxD4BPhURt9JqXUqpCWvtRKcprfV9Sqm2B15EXNe5+nwCdMvddRzQWj9CRB+lme32PxGNWWv7i6jAagEct9Zu/98AjADYlaeUGdt470IAzg5kxhg31X01o5k8YUUAHGTmfcmaeICIhvM4y9jGO4CbL1lrh5Nn4EEAH2c0kyfMO0Db5m5z9HOngSqPuwxtfAOc6enp2Tg5OflH64AjCILPROT+DGbyhPgGeI+Zn3BGWgBa69uI6Os8C+wMRF4B4jjeXK1Wf2gDcD+MMUcA7MhgaLkh3gCI6IC1dn9ioO2UMgzDi+M4dkP7Q8t1mBLvBcBNO5r7S63d7K4H3XNzc26C9bRHiJUCuJPJt2u1mtvV/mehryU/NdBabyWivQDu9vB2ygvwN4DxOI7fSvp8501N/dhDa32JUmozgOsBbBCRS4lovYisExH32k3VcGNMFEWLxpkwDG8UkadExJ28x0QUi8ifAH4WkZ9KpdJEpVJxEEteWZJ77En+pf4DjmVUT3G515wAAAAASUVORK5CYII=" alt=""/>
                </a>
                <br />
                <p>Design and Developed by []</p>
            </AddressBox>
            
            
        </ContactBox>
  </FooterContainer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer