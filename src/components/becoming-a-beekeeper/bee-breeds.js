import React from 'react';
import styled from "styled-components"

import { SubHeader, Paragraph, TextHeader,Container, FlexContainer } from "../../styles/globalstyles.js"

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
            <Paragraph>
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
            </Paragraph>
            <SubHeaderUnderline>
                Golden Italian - Apis Mellifera Ligustica
            </SubHeaderUnderline>
            <Paragraph>
                The Italian honeybee is the default bee that 
                beekeepers use. The Italian is generally considered 
                the best general-purpose bee, and thereby is what is 
                most often recommended to the beginner. Italian bees 
                are also the most common stock bee, and likely are 
                the race to be found in packages.
            </Paragraph>
            <Paragraph>
                Pros and Cons of the Italian Honey Bee honey bee
            </Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Good beginner bee</Paragraph>
            <Paragraph>Readily builds comb</Paragraph>
            <Paragraph>Light color worker, with dark queen makes queen locating easier</Paragraph>
            <Paragraph>Wonderful foragers </Paragraph>
            <Paragraph>Only moderate tendency to swarm</Paragraph>
            <Paragraph>Relatively easy and calm to work with</Paragraph>
            <Paragraph>Resistant to European Foul Brood </Paragraph>
            <Paragraph>Strong cleaning behavior</Paragraph>
            <Paragraph>Lower range propolis producer</Paragraph>
            <SubHeader>Cons</SubHeader>
            <Paragraph>Brood rearing continues after honey flow ceases</Paragraph>
            <Paragraph>Builds a great deal of brace and burr comb</Paragraph>
            <Paragraph>Highly prone to drifting</Paragraph>
            <Paragraph>Head buts beekeeper as defensive action</Paragraph>
            <Paragraph>Short distance foragers, causing tendency to rob</Paragraph>
            <Paragraph>Slow spring buildup</Paragraph>
            <Paragraph>Susceptible to Disease</Paragraph>
            <br/>
            <SubHeaderUnderline>Carnolian - Apis Mellifera Carnica</SubHeaderUnderline>
            <Paragraph>
                The Carniolan honeybee (Apis mellifera carnica) is a 
                subspecies of Western honeybee. It originates from 
                Slovenia, but can now be found also in Austria, part 
                of Hungary, Romania, Croatia, Bosnia and Herzegovina 
                and Serbia.
            </Paragraph>
            <Paragraph>Pros and Cons of the Carniolan honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Earlier morning forager</Paragraph>
            <Paragraph>Forages on colder and wetter days than most other bees</Paragraph>
            <Paragraph>Overwinters well on small stores, as queen stops laying in the fall</Paragraph>
            <Paragraph>Rapid build up in early spring</Paragraph>
            <Paragraph>Exceptionally gentle and easy to work</Paragraph>
            <Paragraph>
                Brood production is dependant on availability of 
                supplies, hence more food more forages, less food 
                smaller population
            </Paragraph>
            <Paragraph>Less susceptible to brood disease</Paragraph>
            <Paragraph>Creates less brace and burr comb</Paragraph>
            <Paragraph>Swarms easily when no expansion room is available</Paragraph>
            <Paragraph>If pollen is scarce brood rearing greatly diminishes</Paragraph>
            <br/>
            <SubHeaderUnderline>Caucasian - Apis Mellifera Caucasica</SubHeaderUnderline>
            <Paragraph>
                The Caucasian honeybee originates from the high 
                valleys of the Central Caucasus.
            </Paragraph>
            <Paragraph>Pros and Cons of the Caucasian honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Large and Strong population</Paragraph>
            <Paragraph>Calm when on comb</Paragraph>
            <Paragraph>Overwinters well by stopping brood production in the fall</Paragraph>
            <Paragraph>Forages earlier and on cooler days</Paragraph>
            <Paragraph>
                Has a longer tongue than most races and can thereby 
                take advantage or more nectar sources than most.
            </Paragraph>
            <Paragraph>Slow spring startup</Paragraph>
            <Paragraph>
                Produces an abundance of propolis, which may be 
                beneficial to propolis collectors, but makes the 
                overall hive more difficult to work.
            </Paragraph>
            <Paragraph>Makes wet capped comb, which is poor for honey comb sale</Paragraph>
            <Paragraph>Once brought to a level of alarm they are difficult to calm and easily stings.</Paragraph>
            <Paragraph>Susceptible to nosema</Paragraph>
            <Paragraph>Prone to rob</Paragraph>
            <br/>
            <SubHeader>New Minnesota Hygenics - Apis Mellifera Ligustica Hybrid</SubHeader>
            <Paragraph>
                Developed by Dr. Marla Spivak at the University of 
                Minnesota Bee Lab. These bees show a strong tendancy 
                to be resistant to American Foulbrood and Chalkbrood.
            </Paragraph>
            <SubHeader>Russians - Apis Mellifera</SubHeader>
            <Paragraph>
                The Russian honeybee have evolved traits of natural 
                mite resistance due to heavy selection pressures. 
                They have lived for more than 150 years in a region 
                that is home to the varroa mite and the tracheal mites 
                (Acarapis woodi).
            </Paragraph>
            <Paragraph>Pros and Cons of the Russian honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Thought to be naturally resistant to Varroa Mites</Paragraph>
            <Paragraph>Resistant Tracheal Mite</Paragraph>
            <Paragraph>Quick Spring buildup</Paragraph>
            <Paragraph>Winter tolerant</Paragraph>
            <Paragraph>Expensive</Paragraph>
            <Paragraph>More prone to swarming (likely every year)</Paragraph>
            <br/>
            <SubHeader>SMRs - Apis Mellifera Hybrid</SubHeader>
            <Paragraph>
                SMR stands for "Suppression of Mite Reproduction" and 
                this trait was discovered by John Harbo and Jeffery 
                Harris. Apparently, bees with this trait seek out brood 
                cells that contain mites and open them up and then remove 
                the developing brood and mites. The trait, which may be 
                controlled by only two genes, can be bred into any 
                population of bees.
            </Paragraph>
            <SubHeader>Buckfast - Apis Mellifera: hybrid</SubHeader>
            <Paragraph>
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
            </Paragraph>
            <br/>
            <Paragraph>Pros and Cons of the Buckfast honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Highly Tracheal Mite Tolerant</Paragraph>
            <Paragraph>Extremely gentle, with low sting instinct</Paragraph>
            <Paragraph>Resistant to Chalkbrood</Paragraph>
            <Paragraph>Low swarm instinct</Paragraph>
            <Paragraph>Overwinters well</Paragraph>
            <Paragraph>Builds up slowly in spring</Paragraph>
            <Paragraph>Poor early spring pollinators</Paragraph>
            <br/>
            <Paragraph>
                <SubHeader>Starline</SubHeader>
                - Apis Mellifera: hybrid - The Starline is an Italian hybrid known 
                for its vigor and strong honey production.
            </Paragraph>
            <Paragraph>Pros and Cons of the Starline honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Good brood producers</Paragraph>
            <Paragraph>Creates large honey crop under correct conditions</Paragraph>
            <Paragraph>Minimal propolis buildup</Paragraph>
            <Paragraph>Fast spring build up</Paragraph>
            <Paragraph>Poor at overwintering due to large population</Paragraph>
            <Paragraph>
                Offspring queen often do not have same traits as mother, 
                may require common requeening
            </Paragraph>
            <SubHeaderUnderline>Yugo Honey Bee - Apis mellifera</SubHeaderUnderline>
            <Paragraph>Pros and Cons of the Yugo honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Low swarm instinct</Paragraph>
            <Paragraph>Overwinters well</Paragraph>
            <Paragraph>Not highly tested as it is a newer breed</Paragraph>
            <Paragraph>Long term keeping effects unknown</Paragraph>
            <SubHeaderUnderline>Cordovan Honey Bee - Apis Mellifera</SubHeaderUnderline>
            <Paragraph>
                Closely related to the Italian race, cordovans are used mainly 
                for tracking the genetic makeup due to the wide variance in color.
            </Paragraph>
            <SubHeaderUnderline>Feral Honey Bees - Apis Mellifera</SubHeaderUnderline>
            <Paragraph>
                While not technically a race in its own, feral honey bees 
                are more likely to be acclimated to the area in which they 
                are found.
            </Paragraph>
            <Paragraph>Pros and Cons of honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Likely acclimated to the area they are present in</Paragraph>
            <Paragraph>Often free to acquire</Paragraph>
            <Paragraph>Must be captured (or allow for known species to breed with feral drones)</Paragraph>
            <Paragraph>Unknown background, may be Africanized</Paragraph>
            <Paragraph>
                Not bred to be disease or mite resistant, but may hold some 
                resistance to local conditions
            </Paragraph>
            <SubHeaderUnderline>German Black Honey Bee - Apis Mellifera Mellifera</SubHeaderUnderline>
            <Paragraph>
                The German Black bee, also known as the European dark bee, 
                was the first honeybee imported to the Americas. This 
                distinctly marked bee is brown and black in color and over 
                winter well.
            </Paragraph>
            <Paragraph>Pros and Cons of the Cordovan honey bee</Paragraph>
            <SubHeader>Pros</SubHeader>
            <Paragraph>Overwinter Well</Paragraph>
            <Paragraph>Aggressive</Paragraph>
            <Paragraph>Slow Spring build up</Paragraph>
            <Paragraph>Difficult if not impossible to buy in the US</Paragraph>
            <SubHeaderUnderline>Midnight Honey Bee - Apis Mellifera: Hybrid</SubHeaderUnderline>
            <Paragraph>
                The Midnight hybrid is a combination of both the 
                Caucasian and Carniolan races.
            </Paragraph>
        </Container>
    );
};

export default BeeBreeds;