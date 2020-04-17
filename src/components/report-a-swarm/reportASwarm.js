import React from 'react';

import styled from "styled-components"
import Swarm1 from "../../images/SwarmImg1.png"
import HornetTypes from "../../images/RAStypesOfHornets.png"
import CombBox from "../../images/RASbeeCombBox.png"
import CombTree from "../../images/RASbeeCombTree.png"
import HoneyBee from "../../images/RAShoneyBee.png"
import BumbleBee from "../../images/RASbumbleBee.png"


const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height auto;
  text-align: center;
  padding-bottom: 80px;

@media (max-width: 800px) {
  display: block;
  text-align: center;
}
`

const TextContainer = styled.div`
  position: relative;
  width: 80vw;
  height: auto;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 102px;
  padding: 60px;
  border: 6px solid #63966a;
  box-sizing: border-box;
`


export const ParagraphText = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  color: #000000;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 16px;
  }
`

const SwarmContact = styled.h1`
  width: 60%;
  border: 2px solid #63966a;
  margin-bottom: 60px;
  display: inline-block;
  padding: 10px;
  & > a {
    color: #63966a;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    padding-top: 20px
  }
`

export const TextHeader = styled.h1`
  position: relative;
  height: 33px;
  margin: auto;
  display: inline-block;
  border-bottom: 6px solid #63966a;
  padding-bottom: 16px;
  margin-bottom:60px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 42px;
  text-transform: uppercase;
  color: #000000;
  

  @media (max-width: 800px) {
    font-size: 10px;
    margin-bottom: 0;
    width: 90%;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`

export const TextHeader2 = styled.h1`
  position: relative;
  height: 33px;
  margin: auto;
  display: inline-block;
  border-bottom: 6px solid #63966a;
  padding-bottom: 16px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 42px;
  text-transform: uppercase;
  color: #000000;


  @media (max-width: 800px) {
    font-size: 20px;
  }
//   @media (min-width: 1000px) {
//     font-size: 24px;
//   }
`

const TextHeader3 = styled.h1`

`

const TextHeader4 = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 42px;
  font-size: 22px;
  position: relative;
  height: 53px;
  margin: auto;
  display: inline-block;
  color: #63966a;
`

const AnswerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 80px;
    
    @media (max-width: 800px) {
        display: inline-block;
        width: 80%;

      }
    @media (max-width: 1000px) {
        display: inline-block;
        width: 100%;
      } 
`

const AnswerContainer2 = styled.div`
    display: grid;
    grid-template-columns: 50% 25% 25%;
    padding-top: 100px;
    
    @media (max-width: 1000px) {
        display: inline-block;
        width: 80%;
        
      }
    @media (max-width: 600px) {
        display: inline-block;
        width: 80%;
         
      }
`

const AnswerQuestion = styled.div`
    justify-self: center;
    display:block;
    width: 75%;
    text-align: left;

    @media (max-width: 1000px) {
        width: 80%;
        display:inline-block;
        text-align: center;
        padding-bottom: 60px;

      }   
`

const AnswerImg = styled.div`
 width: 100%;
    @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    padding-top: 40px;
  }
`

const SwarmImg = styled.img`
  width: 75%;
`

const reportASwarm = () => {
    return (
        <HomeContainer>
            <TextContainer id="general">
                <ParagraphText>
                    It is very important to capture/rescue honey bee swarms in our area so that they are not lost to parasites, disease, or exterminators. The members of the Utah County Beekeepers Association have put together the lists of available beekeepers who will remove swarms at no charge. Please select your city/area below on the interactive map to locate a beekeeper near you. If there is not a beekeeper listed, look at surrounding cities/areas.
                </ParagraphText>
            </TextContainer>

            <SwarmContact>
                Swarm Cordiantor Contact Info: <br />
                Mike Shaffer <br />
                <a href="tel:+18016331887">801-633-1887</a><br />
                <a href="mailto:mike@carnibuilders.com">mike@carnibuilders.com</a>
            </SwarmContact>

            <TextHeader>
                Be prepared to answer the questions below to help the beekeeper:
            </TextHeader>

            <AnswerContainer>
                <AnswerQuestion>
                    <TextHeader2>
                        What does the swarm look like?
                    </TextHeader2>
                    <ParagraphText>
                        If the swarm has a “nest” then it is not honey bees but more likely is hornets or wasps especially if it is “papery” looking.  A swarm of honey bees will cluster into a roughly round shape on an object like a tree branch.
                    </ParagraphText>
                    <TextHeader4>
                        Where is the swarm (physical address)?
                    </TextHeader4>
                    <TextHeader4>
                        Your name and phone number.
                    </TextHeader4>
                    <TextHeader4>
                        What has the swarm landed on?
                    </TextHeader4>
                    <TextHeader4>
                        How high up is the swarm?
                    </TextHeader4>
                    <TextHeader4>
                        Are there any special concerns in the area?
                        (lots of children, water hazards, bees in the house etc)
                    </TextHeader4>
                </AnswerQuestion>
                <AnswerImg>
                    <SwarmImg src={Swarm1}></SwarmImg>
                </AnswerImg>
            </AnswerContainer>

            <AnswerContainer>
                <AnswerQuestion>
                    <TextHeader3>
                        Here are some images of the kinds of "bees" that beekeepers do not remove:
                    </TextHeader3>
                </AnswerQuestion>
                <AnswerImg>
                    <SwarmImg src={HornetTypes}></SwarmImg>
                </AnswerImg>
            </AnswerContainer>

            <AnswerContainer2>
                <AnswerQuestion>
                    <ParagraphText>
                        When a honey bee swarm can not find an appropriate enclosed cavity, be it in a tree or in the walls of your house, they build their comb outside exposed to the elements.  This is rare, and if it happens where there is winter, they will not survive.  A wasp nest (upper left) is a half round umbrella shape.  Honey bee comb is comprised of parallel paddles, of which six can be seen in the tree.  Eight can be seen in the hive box.
                    </ParagraphText>
                </AnswerQuestion>
                <AnswerImg>
                    <SwarmImg src={CombBox}></SwarmImg>
                </AnswerImg>
                <AnswerImg>
                    <SwarmImg src={CombTree}></SwarmImg>
                </AnswerImg>
            </AnswerContainer2>

            <AnswerContainer2>
                <AnswerQuestion>
                    <ParagraphText>
                        A note on Bumblebees (Bombus spp.).  Bumblebees dwarf their honey bee cousins. These bees are not aggressive and will not disturb you unless you are bothering their nest or blocking the entrance to it. Some beekeepers may remove bumblebee nests to protect their declining populations.
                    </ParagraphText>
                </AnswerQuestion>
                <AnswerImg>
                    <SwarmImg src={BumbleBee}></SwarmImg>
                </AnswerImg>
                <AnswerImg>
                    <SwarmImg src={HoneyBee}></SwarmImg>
                </AnswerImg>
            </AnswerContainer2>

        </HomeContainer>
    );
};

export default reportASwarm;