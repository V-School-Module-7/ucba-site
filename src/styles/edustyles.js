import styled from 'styled-components'

//text container with green border at top of pages
export const GreenLineContainer = styled.div`
  position: relative;
  height: auto;
  margin-top: 64px;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 4%;
  margin-bottom: 2%;

  border: 6px solid #63966a;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 550px) {
    width: 350px;
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

@media (max-width: 900px){
  margin: 2%;
  
}
`

//the paragraph that goes inside the GreenLineContainer
export const HeaderParagraph = styled.p`
margin-bottom: 0;
font-size: 24px;
line-height: 24px;

  @media(max-width: 500px) {
      font-size: 12px;
  }
`
//paragraph headers with green underlining the letters
export const BeeHeader = styled.h1`
  display: inline-block;
  border-bottom: 6px solid #63966a;
  padding: 16px 0 2px 0 ;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 2%;

  @media (max-width: 900px) {
      font-size: 16px;
  }
`