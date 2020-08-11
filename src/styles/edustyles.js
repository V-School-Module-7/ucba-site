import styled from 'styled-components'



//container for the whole page
export const Container = styled.div`
    font-family: Work Sans;
    margin: 64px 12% 5% 12%;
    box-sizing: border-box;
    // background-image: url(../images/BeeBackground.png);

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
export const DiseaseContainer = styled.div`
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

//text container with green border at top of pages
export const GreenLineContainer = styled.div`
  position: relative;
  height: auto;
 
  // padding-left: 4%;
  // padding-right: 4%;
  // padding-bottom: 4%;
  padding: 4% 6%;
  margin-bottom: 2%;
  margin: auto;   

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


//for the header inside the green box (above)
export const BoxTitle = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
margin: 30px;
font-size: 28px;


@media (max-width: 900px){
  margin: 2%;
  font-size: 24px;
}
`

//the paragraph that goes inside the GreenLineContainer
export const HeaderParagraph = styled.p`
margin: 2% 0;
font-size: 20px;
line-height: 27px;
font-family: Nunito;

  @media (max-width: 900px){
    font-size: 16px;
  }

  @media(max-width: 500px) {
      font-size: 12px;
  }
`
//paragraph headers with green underlining the letters
export const BeeHeader = styled.h1`
  display: inline-block;
  border-bottom: 4px solid #63966A;
  padding: 0 0 2px 0 ;
  font-size: 24px;
  // line-height: 42px;
  color: #000000;
  margin-top: 5%;
  margin-bottom: 3%;

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


export const Paragraph = styled.p`
font-size: 20px;
line-height: 21px;
margin: 2% 0 4% 0;
font-family: Nunito;

@media (max-width: 900px) {
    width: 100%;
  font-size: 16px;
  margin: 2%;
  line-height: 24px;
}
`
//centered, all caps, green underlined headers
export const TextHeader = styled.h1`
  position: relative;
  height: 33px;
  margin: auto;
  margin-top: 10%;
  display: inline-block;
  border-bottom: 4px solid #63966a;
  padding-bottom: 16px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 42px;
  text-transform: uppercase;
  color: #000000;
  

  @media (max-width: 900px) {
    font-size: 24px;
    text-decoration: underline;
    text-decoration-color: #63966A;
    border-bottom: none;
    // margin: 10% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

    @media (max-width: 500px) {
      font-size: 20px;
      text-decoration: underline;
      text-decoration-color: #63966A;
      border-bottom: none;
    }

  }
`
//container for items you want centered
export const CenteringContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BeeLink = styled.a`
  word-wrap: break-word;
  color: black;
  font-style: normal;
`

export const BoldParagraph = styled(Paragraph)`
font-weight: bold;
font-size: 22px;
font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
letter-spacing: -0.5px;
`