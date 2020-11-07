import React from 'react';
import styled from "styled-components"
import {
    TextHeader,
    ParagraphText,
    ParagraphTextBottomMargin,
    SubHeaderMarginBottom,
} from "../../styles/babstyles.js"

import { Container, FlexContainer, SubHeader } from "../../styles/globalstyles.js"

const SubHeaderUnderline = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;
  text-decoration: underline;

  color: #000000;
`

const BeeBreeds = () => {
    return (
        <Container id="bee-breeds">
            <FlexContainer>
                <TextHeader>bee breeds</TextHeader>
            </FlexContainer>
            <ParagraphTextBottomMargin>
                In the United States, beekeepers work primarily 
                with the Western Honey bee, otherwise known as 
                Apis mellifera (there are four species of honeybees 
                in the world) . There are many BREEDS (or subspecies 
                if you prefer) within the A. mellifera family to 
                choose from and work with. Each better known type 
                is listed below with some brief notes about their 
                characteristics. We recommend you research each to 
                find the type you are interested in BEFORE you 
                purchase. The breeds below are presented with the 
                most commonly used first. (The following information 
                was compiled from many sources but primarily from 
                Wikipedia.com)
            </ParagraphTextBottomMargin>
            <SubHeaderUnderline>
                Golden Italian - Apis Mellifera Ligustica
            </SubHeaderUnderline>
            <ParagraphTextBottomMargin>
                The Italian honeybee is the default bee that 
                beekeepers use. The Italian is generally considered 
                the best general-purpose bee, and thereby is what is 
                most often recommended to the beginner. Italian bees 
                are also the most common stock bee, and likely are 
                the race to be found in packages.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>
                Pros and Cons of the Italian Honey Bee honey bee
            </ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Good beginner bee</ParagraphText>
            <ParagraphText>Readily builds comb</ParagraphText>
            <ParagraphText>Light color worker, with dark queen makes queen locating easier</ParagraphText>
            <ParagraphText>Wonderful foragers </ParagraphText>
            <ParagraphText>Only moderate tendency to swarm</ParagraphText>
            <ParagraphText>Relatively easy and calm to work with</ParagraphText>
            <ParagraphText>Resistant to European Foul Brood </ParagraphText>
            <ParagraphText>Strong cleaning behavior</ParagraphText>
            <ParagraphTextBottomMargin>Lower range propolis producer</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Cons</SubHeaderMarginBottom>
            <ParagraphText>Brood rearing continues after honey flow ceases</ParagraphText>
            <ParagraphText>Builds a great deal of brace and burr comb</ParagraphText>
            <ParagraphText>Highly prone to drifting</ParagraphText>
            <ParagraphText>Head buts beekeeper as defensive action</ParagraphText>
            <ParagraphText>Short distance foragers, causing tendency to rob</ParagraphText>
            <ParagraphText>Slow spring buildup</ParagraphText>
            <ParagraphTextBottomMargin>Susceptible to Disease</ParagraphTextBottomMargin>
            <br/>
            <SubHeaderUnderline>Carnolian - Apis Mellifera Carnica</SubHeaderUnderline>
            <ParagraphTextBottomMargin>
                The Carniolan honeybee (Apis mellifera carnica) is a 
                subspecies of Western honeybee. It originates from 
                Slovenia, but can now be found also in Austria, part 
                of Hungary, Romania, Croatia, Bosnia and Herzegovina 
                and Serbia.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>Pros and Cons of the Carniolan honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Earlier morning forager</ParagraphText>
            <ParagraphText>Forages on colder and wetter days than most other bees</ParagraphText>
            <ParagraphText>Overwinters well on small stores, as queen stops laying in the fall</ParagraphText>
            <ParagraphText>Rapid build up in early spring</ParagraphText>
            <ParagraphText>Exceptionally gentle and easy to work</ParagraphText>
            <ParagraphText>
                Brood production is dependant on availability of 
                supplies, hence more food more forages, less food 
                smaller population
            </ParagraphText>
            <ParagraphText>Less susceptible to brood disease</ParagraphText>
            <ParagraphText>Creates less brace and burr comb</ParagraphText>
            <ParagraphText>Swarms easily when no expansion room is available</ParagraphText>
            <ParagraphTextBottomMargin>If pollen is scarce brood rearing greatly diminishes</ParagraphTextBottomMargin>
            <br/>
            <SubHeaderUnderline>Caucasian - Apis Mellifera Caucasica</SubHeaderUnderline>
            <ParagraphTextBottomMargin>
                The Caucasian honeybee originates from the high 
                valleys of the Central Caucasus.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>Pros and Cons of the Caucasian honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Large and Strong population</ParagraphText>
            <ParagraphText>Calm when on comb</ParagraphText>
            <ParagraphText>Overwinters well by stopping brood production in the fall</ParagraphText>
            <ParagraphText>Forages earlier and on cooler days</ParagraphText>
            <ParagraphText>
                Has a longer tongue than most races and can thereby 
                take advantage or more nectar sources than most.
            </ParagraphText>
            <ParagraphText>Slow spring startup</ParagraphText>
            <ParagraphText>
                Produces an abundance of propolis, which may be 
                beneficial to propolis collectors, but makes the 
                overall hive more difficult to work.
            </ParagraphText>
            <ParagraphText>Makes wet capped comb, which is poor for honey comb sale</ParagraphText>
            <ParagraphText>Once brought to a level of alarm they are difficult to calm and easily stings.</ParagraphText>
            <ParagraphText>Susceptible to nosema</ParagraphText>
            <ParagraphTextBottomMargin>Prone to rob</ParagraphTextBottomMargin>
            <br/>
            <SubHeader>New Minnesota Hygenics - Apis Mellifera Ligustica Hybrid</SubHeader>
            <ParagraphTextBottomMargin>
                Developed by Dr. Marla Spivak at the University of 
                Minnesota Bee Lab. These bees show a strong tendancy 
                to be resistant to American Foulbrood and Chalkbrood.
            </ParagraphTextBottomMargin>
            <SubHeader>Russians - Apis Mellifera</SubHeader>
            <ParagraphTextBottomMargin>
                The Russian honeybee have evolved traits of natural 
                mite resistance due to heavy selection pressures. 
                They have lived for more than 150 years in a region 
                that is home to the varroa mite and the tracheal mites 
                (Acarapis woodi).
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>Pros and Cons of the Russian honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Thought to be naturally resistant to Varroa Mites</ParagraphText>
            <ParagraphText>Resistant Tracheal Mite</ParagraphText>
            <ParagraphText>Quick Spring buildup</ParagraphText>
            <ParagraphText>Winter tolerant</ParagraphText>
            <ParagraphText>Expensive</ParagraphText>
            <ParagraphTextBottomMargin>More prone to swarming (likely every year)</ParagraphTextBottomMargin>
            <br/>
            <SubHeader>SMRs - Apis Mellifera Hybrid</SubHeader>
            <ParagraphTextBottomMargin>
                SMR stands for "Suppression of Mite Reproduction" and 
                this trait was discovered by John Harbo and Jeffery 
                Harris. Apparently, bees with this trait seek out brood 
                cells that contain mites and open them up and then remove 
                the developing brood and mites. The trait, which may be 
                controlled by only two genes, can be bred into any 
                population of bees.
            </ParagraphTextBottomMargin>
            <SubHeader>Buckfast - Apis Mellifera: hybrid</SubHeader>
            <ParagraphTextBottomMargin>
                The Buckfast hybrid was produced by Brother Adam of the 
                Buckfast Abbey. Brother Adam crossed many races of bees 
                (mainly Anatolians with Italians and Carniolans) in hopes 
                of creating a superior breed. The results are what is now 
                know as the Buckfast Bee. While the European variety of 
                Buckfast are considered very gentle, the American variety 
                is far more defensive. There is a debate among beekeepers 
                if this defensiveness is due to breeding for varroa resistance 
                or partial hybridization with the AHB (Africanized Honey Bee) 
                of the Buckfast line in America. The issues are further clouded 
                in that the two leading American queen breeders are breeding for 
                varroa resistance and are also located in AHB territory. AHB are 
                usually considered by most experts to be more resistant to varroa 
                than the European Honey Bee.
            </ParagraphTextBottomMargin>
            <br/>
            <ParagraphTextBottomMargin>Pros and Cons of the Buckfast honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Highly Tracheal Mite Tolerant</ParagraphText>
            <ParagraphText>Extremely gentle, with low sting instinct</ParagraphText>
            <ParagraphText>Resistant to Chalkbrood</ParagraphText>
            <ParagraphText>Low swarm instinct</ParagraphText>
            <ParagraphText>Overwinters well</ParagraphText>
            <ParagraphText>Builds up slowly in spring</ParagraphText>
            <ParagraphTextBottomMargin>Poor early spring pollinators</ParagraphTextBottomMargin>
            <br/>
            <ParagraphTextBottomMargin>
                <SubHeader>Starline</SubHeader>
                - Apis Mellifera: hybrid - The Starline is an Italian hybrid known 
                for its vigor and strong honey production.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>Pros and Cons of the Starline honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Good brood producers</ParagraphText>
            <ParagraphText>Creates large honey crop under correct conditions</ParagraphText>
            <ParagraphText>Minimal propolis buildup</ParagraphText>
            <ParagraphText>Fast spring build up</ParagraphText>
            <ParagraphText>Poor at overwintering due to large population</ParagraphText>
            <ParagraphTextBottomMargin>
                Offspring queen often do not have same traits as mother, 
                may require common requeening
            </ParagraphTextBottomMargin>
            <SubHeaderUnderline>Yugo Honey Bee - Apis mellifera</SubHeaderUnderline>
            <ParagraphTextBottomMargin>Pros and Cons of the Yugo honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Low swarm instinct</ParagraphText>
            <ParagraphText>Overwinters well</ParagraphText>
            <ParagraphText>Not highly tested as it is a newer breed</ParagraphText>
            <ParagraphTextBottomMargin>Long term keeping effects unknown</ParagraphTextBottomMargin>
            <SubHeaderUnderline>Cordovan Honey Bee - Apis Mellifera</SubHeaderUnderline>
            <ParagraphTextBottomMargin>
                Closely related to the Italian race, cordovans are used mainly 
                for tracking the genetic makeup due to the wide variance in color.
            </ParagraphTextBottomMargin>
            <SubHeaderUnderline>Feral Honey Bees - Apis Mellifera</SubHeaderUnderline>
            <ParagraphTextBottomMargin>
                While not technically a race in its own, feral honey bees 
                are more likely to be acclimated to the area in which they 
                are found.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>Pros and Cons of honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Likely acclimated to the area they are present in</ParagraphText>
            <ParagraphText>Often free to acquire</ParagraphText>
            <ParagraphText>Must be captured (or allow for known species to breed with feral drones)</ParagraphText>
            <ParagraphText>Unknown background, may be Africanized</ParagraphText>
            <ParagraphTextBottomMargin>
                Not bred to be disease or mite resistant, but may hold some 
                resistance to local conditions
            </ParagraphTextBottomMargin>
            <SubHeaderUnderline>German Black Honey Bee - Apis Mellifera Mellifera</SubHeaderUnderline>
            <ParagraphTextBottomMargin>
                The German Black bee, also known as the European dark bee, 
                was the first honeybee imported to the Americas. This 
                distinctly marked bee is brown and black in color and over 
                winter well.
            </ParagraphTextBottomMargin>
            <ParagraphTextBottomMargin>Pros and Cons of the Cordovan honey bee</ParagraphTextBottomMargin>
            <SubHeaderMarginBottom>Pros</SubHeaderMarginBottom>
            <ParagraphText>Overwinter Well</ParagraphText>
            <ParagraphText>Aggressive</ParagraphText>
            <ParagraphText>Slow Spring build up</ParagraphText>
            <ParagraphTextBottomMargin>Difficult if not impossible to buy in the US</ParagraphTextBottomMargin>
            <SubHeaderUnderline>Midnight Honey Bee - Apis Mellifera: Hybrid</SubHeaderUnderline>
            <ParagraphTextBottomMargin>
                The Midnight hybrid is a combination of both the 
                Caucasian and Carniolan races.
            </ParagraphTextBottomMargin>
        </Container>
    );
};

export default BeeBreeds;