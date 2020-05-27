import styled from 'styled-components'

export const GreenLineContainer = styled.div`
  position: relative;
  height: auto;
  margin: 0 8%;
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