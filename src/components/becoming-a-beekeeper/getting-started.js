import React from 'react';


import { Paragraph, TextHeader, Container, FlexContainer } from "../../styles/globalstyles.js"

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
            <Paragraph>
                New Packages - bees are sold in packages which 
                are sold in sizes indicated by pounds. Typical 
                sizes are 2lb, 2-1/2lb & 3lb. There may be other 
                sizes in other areas; 3lb is the most common in 
                Utah County. The advantage of a new package is 
                that you start with all new hive equipment 
                (bodies, frames and foundation) which greatly 
                reduces the incident rate of disease and parasites. 
                The disadvantage is that the bees have to work to 
                draw out the foundation and this will consume large 
                amounts of honey (bees excrete the wax from special 
                glands on their abdomen when their stomach is full 
                of honey, hence the need to eat to produce wax).
            </Paragraph>
            <Paragraph>Pros Cons</Paragraph>
            <Paragraph>
                Young queen of known genetics Lower honey yield 
                due to new foundation and wax requirements
            </Paragraph>
            <Paragraph>
                Lower incident of parasitism and disease (specifically 
                for the first year) Hive is not installed until mid to 
                late April, missing early spring pollen and honey flows
            </Paragraph>
            <Paragraph>
                New beekeepers have the ability to learn easier from new 
                packages/hives versus established hives (fewer problems) 
                Hive needs to be fed for the first month or so (to produce 
                wax)
            </Paragraph>
            <Paragraph>
                Swarms - many beekeepers begin by capturing a swarm of bees. 
                This process is quite simple, provided the swarm lands in a 
                convenient spot, and you have boxes. If you have equipment 
                (new or used)
            </Paragraph>
            <Paragraph>Pros Cons</Paragraph>
            <Paragraph>
                Potentially, a swarm will be larger than a new package 
                (number of bees) Queen of unknown age or genetics
            </Paragraph>
            <Paragraph>
                Swarms create/draw out wax very quickly. Unknown parasite or disease history
            </Paragraph>
            <Paragraph>
                Depending on the equipment used (new or old), you will either 
                have to feed the bees (new equipment) or you may have residual 
                pesticides or disease loads such as foulbrood (old equipment).
            </Paragraph>
            <Paragraph>Complete hive purchase</Paragraph>
            <Paragraph>Pros Cons</Paragraph>
            <Paragraph>
                Fully established hive with drawn foundation and typically strong 
                colony Queen of unknown age or genetics (it is possible for the 
                selling beekeeper to know for sure)
            </Paragraph>
            <Paragraph>
                Larger potential honey harvest Unknown medication, parasite or 
                disease history unless beekeeper has kept records
            </Paragraph>
            <Paragraph>Equipment - this is a pro and a con: a new beekeeper 
                should assemble equipment to fully understand how to prepare 
                and repair all hive parts. Older equipment used on an existing 
                hive may need maintenance sooner (at a minimum a paint job); 
                conversely, you may get some great equipment.
            </Paragraph>
        </Container>
    );
};

export default GettingStarted;