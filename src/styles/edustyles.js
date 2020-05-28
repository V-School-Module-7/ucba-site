import styled from 'styled-components'


//container for the whole page
export const Container = styled.div`
position: relative;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Work Sans;
    margin: auto;
    margin-top: 64px;
    // margin: 0 12% 5% 12%;

    @media (max-width: 900px) {
      width: 100%;
      margin-top: 10%;
    }
`

//text container with green border at top of pages
export const GreenLineContainer = styled.div`
  position: relative;
  height: auto;
 
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 4%;
  margin-bottom: 2%;
  margin  : auto;   

  border: 6px solid #63966a;
  box-sizing: border-box;

  @media (max-width: 900px) {
    // margin-top: 12%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 550px) {
    max-width: 350px;
    width: 100%;
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
font-size: 38px;


@media (max-width: 900px){
  margin: 2%;
  font-size: 24px;
}
`

//the paragraph that goes inside the GreenLineContainer
export const HeaderParagraph = styled.p`
margin-bottom: 0;
font-size: 24px;
line-height: 24px;

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
  border-bottom: 6px solid #63966a;
  padding: 0 0 2px 0 ;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 2%;
  margin-left: 5%;

  @media (max-width: 900px) {
      font-size: 16px;
  }
`
export const Paragraph = styled.p`
  font-size: 24px;
  line-height: 28px;
  // margin: 2% 0 4% 4%;
  // margin-left: 100px; 
  padding: auto;

  @media (max-width: 900px) {
      width: 100%;
      // overflow-x:hidden;
    font-size: 16px;
    margin: 2px;
    line-height: 24px;
}
  @media (max-width: 500px) {
      font-size: 12px;
  }
`