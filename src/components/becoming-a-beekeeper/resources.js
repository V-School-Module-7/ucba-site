import React from 'react';

import { SubHeader, Paragraph,TextHeader, Container, FlexContainer } from "../../styles/globalstyles.js"

const resources = () => {
    return (
        <Container id="resources">
            <FlexContainer>
                <TextHeader>resources</TextHeader>
            </FlexContainer>
            <SubHeader>Book</SubHeader>
            <Paragraph>
                There are many excellent books on beekeeping, bees 
                and honey. As a beginner, we strongly recommend that 
                you read at least one of the top two before you begin 
                keeping bees; the others are for further or more 
                detailed information. More books and articles can be 
                found on the Suggested Reading page.
            </Paragraph>
            <Paragraph>Title Author Published By Comments</Paragraph>
            <Paragraph>Beekeeping for Dummies Howland Blakiston Hungry Minds</Paragraph>
            <Paragraph>One of the best books for beginners</Paragraph>
            <Paragraph>
                First Lessons in Beekeeping C. P. Dadant Dadant Publishing 
                A very good and detailed book for beginners.
            </Paragraph>
            <Paragraph>
                The Beekeepers Handbook Diana Sammataro Peach Mountain Press 
                Magazines - there are two main beekeeping themed magazines 
                available: American Bee Journal and Bee Culture. Neither of 
                these magazines has a primary focus on beginner; instead they 
                cover a broad spectrum of topics of interest to beekeepers of 
                all sizes and levels of knowledge. If you join the Utah County 
                Beekeepers Association, we can help you get a reduced 
                subscription rate for either or both of these magazines.
            </Paragraph>
            <SubHeader>Classes</SubHeader>
            <Paragraph>
                A beginner’s class is strongly recommended. The Utah County 
                Beekeepers Association offers a beginners class early in each 
                spring; typically it is 6 hours long and covers all of the 
                information presented here in detail as well as further 
                information with hands on manipulation of hive parts and tools.
            </Paragraph>
            <SubHeader>Associations</SubHeader>
            <Paragraph>
                There are other associations of beekeepers out there! If you 
                don't live in Utah County, you can find a listing of beekeeping 
                groups by using a search engine for your area. Keep in mind that 
                there may not be a group right in your area, if that is the case, 
                join the nearest association. If there isn't an association in your 
                area/county, consider starting one! They are very helpful and can 
                be a lot of fun. You can also visit the Who's Who of Beekeeping In 
                America page sponsored by Bee Culture Magazine to find associations 
                in other states.
            </Paragraph>
            <SubHeader>Finding a Mentor</SubHeader>
            <Paragraph>
                For beginners in Utah County, the Utah County Beekeepers Association 
                offers a mentoring program that allows you to work with one specific 
                beekeeper as your mentor. They can give you lots of practical 
                information on keeping bees that you may never get out of a book or 
                may not fully comprehend from just reading. There are times when 
                learning is doing. If you are interested in latching on to a mentor, 
                please email the association.
            </Paragraph>
        </Container>
    );
};

export default resources;