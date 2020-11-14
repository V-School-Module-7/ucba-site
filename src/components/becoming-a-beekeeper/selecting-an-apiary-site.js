import React from 'react';

import { Paragraph, TextHeader, Container, FlexContainer, SubHeader } from "../../styles/globalstyles.js"

const SelectingAnApiarySite = () => {
    return (
        <Container id="selecting-an-apiary-site">
            <FlexContainer>
                <TextHeader>selecting an apiary site</TextHeader>
            </FlexContainer>
            <Paragraph>
            When selecting a spot to place your hive(s) you should consider 
            the following:
            </Paragraph>
            <Paragraph>
                <SubHeader>Sunlight</SubHeader>
                - full sun or dappled sun work best. Remember, bees need the 
                sunlight to warm up and get going in the morning. If you keep 
                a hive in a shaded area, they may not get started working as 
                early in the morning and in the winter, they may not have the 
                opportunity for cleansing flights.
            </Paragraph>
            <Paragraph>
                <SubHeader>Water</SubHeader>
                - bees need water. They need water for basic biological process
                and to make honey. Bees will go to the easiest source of water 
                - this is where you may run into problems with neighbors. Your 
                bees may go to their swimming pool, dog water or leaky faucet; 
                ensure that you have a ready source of water near your hive that 
                is clean and available for the warm months of the year.
            </Paragraph>
            <Paragraph>
                <SubHeader>Wind</SubHeader>
                - you want to protect your hive from exposure to winds that will 
                blow INTO the hive. Therefore, most hives face south/southeast in 
                Utah County. Keep this in mind when selecting your site.
            </Paragraph>
            <Paragraph>
                <SubHeader>Protection</SubHeader>
                - you need to protect your hive from several key items: flood, fire, 
                snowdrifts, predators and vandalism.
            </Paragraph>
            <Paragraph>
            Most hives are raised off of the ground at least 6" to prevent over exposure 
            to water due to rain or irrigation. Keeping your hive off of the ground will 
            also help keep some predators such as mice and ants out of your hive (more 
            on these later).
            </Paragraph>
            <Paragraph>
            You may not be able to fully protect your hive from fire, but you can minimize 
            the chances by not putting your hive around stacks of old wood or in dry grass 
            fields where a fire could spread quickly. Raising your hive off of the ground 
            will help minimize the build up of snow in the winter; the bees need to be able 
            to exit the hive on warm days in the winter for cleansing flights.
            </Paragraph>
            <Paragraph>
            Predators such as skunks and birds are to be considered and there are steps that 
            can be taken to combat them if you live in an area where they are present; there 
            are many methods and most can be found in beekeeping books or by talking with 
            other local beekeepers.
            </Paragraph>
            <Paragraph>
            Ants can be kept at bay using ground cinnamon, ashes,
            </Paragraph>
            <Paragraph>
            diatomaceous earth or some other means - consult book, journals and beekeepers.
            </Paragraph>
            <Paragraph>
            Vandalism, although rare, must be considered; are you considering placing you 
            hive where the general public may have access to it? Try to put your hive 
            somewhere out of the way or out of sight to reduce or remove the temptation. 
            Make sure your hive is on private property that you either own or have 
            permission to utilize.
            </Paragraph>
        </Container>
    );
};

export default SelectingAnApiarySite;