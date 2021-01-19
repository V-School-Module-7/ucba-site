import styled from 'styled-components'
import background from "../images/BeeBackground.jpg"

//container for the whole page
export const Container = styled.div`
    font-family: Work Sans;
    margin: 64px 12% 5% 12%;
    box-sizing: border-box;


    @media (max-width: 900px) {
      // margin-top: 10%;
      margin: 10%;
      width: 80%;
    }
    @media (max-width: 500px) {
      margin: 10%;
    }
`

//the margins on the media queries work differently on the page with the guide container. hence this container, which is almost identical to the above Container
export const GuidePageContainer = styled.div`
    font-family: Work Sans;
    margin: 64px 12% 5% 12%;
    box-sizing: border-box;

    @media (max-width: 900px) {
      margin-top: 10%;
      margin: 10% 0 0 0;
      width: 80vw;
    }
    @media (max-width: 500px) {
      margin: 10% 0 0 0;
    }
`

//container for items you want centered
export const CenteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
//centering container with bottom margin added
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 72px;
`

//text container with green border at top of pages
export const GreenLineContainer = styled.div`
  position: relative;
  height: auto;
  padding: 4% 6%;
  margin: auto;  
  margin-bottom: 6%; 

  border: 6px solid #63966a;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4%;
  }

  @media (max-width: 550px) {
    max-width: 350px;
    width: 100%;
    margin-bottom: 4%;
  }

  @media (max-width: 400px) {
    max-width: 350px;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
`


//for the header inside the green box (above)
export const BoxTitle = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
margin: 30px;
font-size: 28px;
line-height: 32.84px;


@media (max-width: 900px){
  margin: 2%;
  font-size: 24px;
}
`

//the paragraph that goes inside the GreenLineContainer. Basically identical to Paragraph, with the main difference being the margins and line spacing, which are smaller in the header paragraph than in the body.
export const HeaderParagraph = styled.p`
  margin: 2% 0;
  font-size: 20px;
  line-height: 27px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.5px;

  @media (max-width: 900px){
    font-size: 16px;
    line-height: 24px;
  }

  @media(max-width: 500px) {
      font-size: 12px;
  }
`

//H1.  Paragraph headers with green underlining the letters. 
//PUT INTO "CENTERING CONTAINER" IF YOU WANT IT TO BE CENTERED, NOT LEFT-JUSTIFIED.
export const BeeHeader = styled.h1`
  display: inline-block;
  font-family: Work Sans;
  border-bottom: 4px solid #63966A;
  padding: 0 0 2px 0 ;
  font-size: 24px;
  color: #000000;
  margin-top: 5%;
  margin-bottom: 3%;
  font-weight: 700;
  line-height: 28.15px; 
  margin: 5% 0 2% 0;
  font-size: 28px;

  @media (max-width: 900px) {
      font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: #63966A;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
//H1. Centered, all caps, green underlined headers
export const TextHeader = styled.h1`
  position: relative;
  height: 33px;
  margin: auto;
  margin: 5%;
  display: inline-block;
  border-bottom: 4px solid #63966a;
  padding-bottom: 2px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  // line-height: 42px;
  line-height: 28.15px; 
  text-transform: uppercase;
  color: #000000;
  

  @media (max-width: 900px) {
    font-size: 24px;
    text-decoration: underline;
    text-decoration-color: #63966A;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

    @media (max-width: 500px) {
      font-size: 20px;
    }

  }
`
//H2.  green underlined H2 where the line goes all the way across the page, not just under the letters.
export const BHeader = styled.h2`
border-bottom: 4px solid #63966A;
padding: 0 0 2px 0 ;
margin-top: 5%;
margin-bottom: 3%;
font-weight: 700;
display: block;
margin-bottom: 2%;
font-family: Work Sans;
font-style: normal;
font-size: 24px;
line-height: 38px;

@media (max-width: 500px) {
  font-size: 20px;
  text-decoration: underline;
  text-decoration-color: #63966A;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
  margin-bottom: 4%;
}
`

//H2 left-aligned small headers in bold but not underlined in green
export const SubHeader = styled.h2`

  font-family: Work Sans;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  padding-right: 10px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;

  color: #000000;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`
//regular paragraph that appears throughout the site
export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 21px;
  margin: 2% 0 4% 0;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.5px;

@media (max-width: 900px) {
    width: 100%;
  font-size: 16px;
  margin: 2%;
  line-height: 24px;
}
@media(max-width: 500px) {
      font-size: 12px;
  }
`

//use this for links so that the links will word-wrap rather than running off the page
export const BeeLink = styled.a`
  word-wrap: break-word;
  color: black;
  font-style: normal;
`

export const BeeButton = styled.button`
  display: block;
  background-color: #FFCB00;
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 700;
  width: 569px;
  height: 72px;
  border: none;
  box-shadow: 18px 22px #FFE994;
  margin: 3% 0 5% 0;
  cursor: pointer;
  :hover {
    box-shadow: 8px 12px #FFE994;
  }

  @media (max-width: 900px) {
    width: 400px;
    font-size: 16px;
    box-shadow: 18px 22px #FFE994;
  }

  @media (max-width: 550px) {
    width: 300px;
    font-size: 16px;
    box-shadow: 12px 12px #FFE994;
  }

  @media (max-width: 400px) {
    width: 270px;
    box-shadow: none;
    font-size: 16px;
  }
`

export const StoreButton = styled.button`
  display: block;
  background-color: #FFE994;
  font-family: Work Sans;
  font-size: 20px;
  font-weight: 700;
  width: auto;
  padding: 0 10%;
  text-transform: uppercase;
  height: 72px;
  border: 5px solid #FFCB00;;
  margin: 3% 0 5% 0;
  cursor: pointer;

@media (max-width: 900px) {
  font-size: 16px;
}
`


// export const CornerContainer = styled.div`

//   position: relative;
//   width: 100px;
//   height: 100px;
//   margin: 20px;
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: blue;
//   padding: 0;
//   box-sizing: content-box;
//   border: 2px solid orange;


// `
//this might help: https://stackoverflow.com/questions/42816074/css-for-border-in-corners-only/42816202
