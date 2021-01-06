import React from 'react';
import styled from "styled-components"

import { Paragraph, TextHeader, Container, FlexContainer, SubHeader } from "../../styles/globalstyles.js"

const GettingStarted = () => {
    return (
        <Container id="getting-started">
            <FlexContainer>
                <TextHeader>getting started</TextHeader>
            </FlexContainer>
            <Paragraph>
                There are three ways to get started with bees. 
                Each is detailed below.
            </Paragraph>

            <SubHeader>New Packages</SubHeader>
            <Paragraph>
                Bees are sold in packages which 
                are sold in sizes indicated by pounds. Typical 
                sizes are 2lb, 2-1/2lb & 3lb. There may be other 
                sizes in other areas; 3lb is the most common in 
                Utah County. The advantage of a new package is 
                that you start with all new hive equipment 
                (bodies, frames and foundation) which greatly 
                reduces the incident rate of disease and parasites. The disadvantage is that the bees have to work to draw out the foundation and this will consume large amounts of honey (bees excrete the wax from special glands on their abdomen when their stomach is full of honey, hence the need to eat to produce wax).
            </Paragraph>

            <h3>Pros:</h3>
            <Paragraph>
                New beekeepers have the ability to learn more easily from new packages/hives versus established hives (fewer problems). Hive needs to be fed for the first month or so (to produce wax).
            </Paragraph>
            <Paragraph>
                Young queen of known genetics.
            </Paragraph>

            <h3>Cons:</h3>
            <Paragraph>Lower honey yield due to new foundation and wax requirements.  Lower incidence of parasitism and disease (specifically for the first year). Hive is not installed until mid to late April, missing early spring pollen and honey flows.</Paragraph>
                      
            <SubHeader>Swarms</SubHeader>
            <Paragraph>
                Many beekeepers begin by capturing a swarm of bees. This process is quite simple, provided the swarm lands in a convenient spot, and you have boxes. If you have equipment (new or used).
            </Paragraph>

            <h3>Pros:</h3>
            <Paragraph>
                Potentially, a swarm will be larger than a new package (number of bees).   </Paragraph>
                <Paragraph>
                Queen of unknown age or genetics.
            </Paragraph>
            <Paragraph>
                Swarms create/draw out wax very quickly. 
            </Paragraph>   
          
            <h3>Cons:</h3>
           <Paragraph>Unknown parasite or disease history. Depending on the equipment used (new or old), you will either have to feed the bees (new equipment) or you may have residual pesticides or disease loads such as foulbrood (old equipment).
            </Paragraph>

            <SubHeader>Complete hive purchase</SubHeader>
            <br></br>
            <br></br>
            <h3>Pros:</h3>
            <Paragraph>
                Fully established hive with drawn foundation and typically strong colony. Queen of unknown age or genetics (it is possible for the selling beekeeper to know for sure)
            </Paragraph>
            <Paragraph>
                Larger potential honey harvest 
            </Paragraph>

            <h3>Cons:</h3>
            <Paragraph>
                Unknown medication, parasite or 
                disease history unless beekeeper has kept records
            </Paragraph>

            <h3>Equipment</h3>
            <Paragraph>this is a pro and a con: a new beekeeper 
                should assemble equipment to fully understand how to prepare and repair all hive parts. Older equipment used on an existing hive may need maintenance sooner (at a minimum a paint job); 
                conversely, you may get some great equipment.
            </Paragraph>
        </Container>
    );
};

export default GettingStarted;