import React from "react"
import styled from "styled-components"
import { BeeHeader, Container, CenteringContainer } from "../../styles/globalstyles.js"

const Title = styled(BeeHeader)`
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 50px;
`

const Calendar = styled.iframe`
  width: 75vw;
  height: 80vh;
  margin-top: 3%;
`

const BeekeepersCalendar = () => {
  return (

    <Container>
      <CenteringContainer>
        <Title>Beekeeper Schedule of Events</Title>
      </CenteringContainer>

      <Calendar src="https://calendar.google.com/calendar/embed?src=jpjrv0fve1h6n9sgf3aafvh6eg%40group.calendar.google.com&ctz=America%2FDenver" style={{

      }}></Calendar>
    </Container>
  )
}

export default BeekeepersCalendar