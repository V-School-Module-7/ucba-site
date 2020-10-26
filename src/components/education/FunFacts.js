import React from "react"
import styled from "styled-components"

import { BeeHeader, Container } from "../../styles/globalstyles.js"

const FactsContainer = styled(Container)`
  margin-top: 5px;
  margin-left: 100px;
`
const List = styled.ul`
  font-weight: 400;
  list-style-type: none;
  font-size: 24px;
  line-height: 32px;
  color: #000000;

  @media(max-width: 1000px){
    font-size: 16px;
}
`
const ListItem = styled.li`
  margin-top: 15px;
`
const FunBeeFacts = () => {
  return (
    <FactsContainer>

      <BeeHeader>Honey Bees</BeeHeader>

      <List>
        <ListItem>- There are three types of bees in the hive – Queen, Worker and Drone. </ListItem>
        <ListItem>- The queen may lay 600-800 or even 1,500 eggs each day during her 3 or 4 year lifetime. This daily egg production may equal her own weight. She is constantly fed and groomed by attendant worker bees. </ListItem>
        <ListItem>- Honey bees fly at 15 miles per hour. </ListItem>
        <ListItem>- Honey bees' wings stroke 11,400 times per minute, thus making their distinctive buzz. </ListItem>
        <ListItem>- Honeybees are the only insect that produce food for humans. </ListItem>
        <ListItem>- Honeybees will usually travel approximately 3 miles from their hive. </ListItem>
        <ListItem>- Honeybees are the only bees that die after they sting. </ListItem>
        <ListItem>- Honeybees are responsible for pollinating approx 80% of all fruit, vegetable and seed crops in the U.S. </ListItem>
        <ListItem>- Honeybees have five eyes, 3 small ones on top of the head and two big ones in front. They also have hair on their eyes! </ListItem>
        <ListItem>- Bees communicate with each other by dancing and by using pheromones (scents). </ListItem>
        <ListItem>- Honeybees never sleep!</ListItem>
      </List>


      <BeeHeader>Honey</BeeHeader>

      <List>
        <ListItem>- Honey is 80% sugars and 20% water.</ListItem>
        <ListItem>- To make one pound of honey, the bees in the colony must visit 2 million flowers, fly over 55,000 miles and will be the lifetime work of approximately 768 bees. </ListItem>
        <ListItem>- A single honeybee will only produce approximately 1/12 teaspoon of honey in her lifetime. </ListItem>
        <ListItem>- A single honey bee will visit 50-100 flowers on a single trip out of the hive. </ListItem>
        <ListItem>- Bees produce honey as food stores for the hive during the long months of winter when flowers aren't blooming and therefore little or no nectar is available to them. </ListItem>
        <ListItem>- Honey is the ONLY food that includes all the substances necessary to sustain life, including water. </ListItem>
        <ListItem>- A typical beehive can make up to 400 pounds of honey per year. </ListItem>
        <ListItem>- Honey never spoils. </ListItem>
        <ListItem>- It would take about 1 ounce of honey to fuel a honeybee's flight around the world. </ListItem>
        <ListItem>- Flowers and other blossoming plants have nectarines that produce sugary nectar. Worker bees suck up the nectar and water and store it in a special honey stomach. When the stomach is full the bee returns to the hive and puts the nectar in an empty honeycomb. Natural chemicals from the bee's head glands and the evaporation of the water from the nectar change the nectar into honey. </ListItem>
        <ListItem>- Out of 20,000 species of bees, only 4 make honey.</ListItem>
        <ListItem>- Although Utah enjoys the title "The Beehive State," the top honey-producing states include California, Florida, and South Dakota.</ListItem>
      </List>

      <BeeHeader>Beehives</BeeHeader>

      <List>
        <ListItem>- A populous colony may contain 40,000 to 60,000 bees during the late spring or early summer. </ListItem>

        <ListItem>- A honeycomb cell has six sides.  </ListItem>
        <ListItem>- Bees maintain a temperature of 92-93 degrees Fahrenheit in their central brood nest regardless of whether the outside temperature is 110 or -40 degrees.</ListItem>
      </List>
      <br></br><br></br>
    </FactsContainer >
  )
}

export default FunBeeFacts