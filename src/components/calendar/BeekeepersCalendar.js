import React from "react"
import styled from "styled-components"
import { BeeHeader } from "../../styles/edustyles.js"


const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 56px 60px 56px;
`

const Title = styled(BeeHeader)`
  text-transform: uppercase;
  font-size: 36px;
  margin-bottom: 50px;
`

const BeekeepersCalendar = () => {
  return (

    <div>


      <CalendarContainer>
        <Title>Beekeeper Schedule of Events</Title>
        <iframe src="https://calendar.google.com/calendar/embed?src=jpjrv0fve1h6n9sgf3aafvh6eg%40group.calendar.google.com&ctz=America%2FDenver" style={{ border: 0, width: 800, height: 600, frameborder: 0, scrolling: "no" }}></iframe>
      </CalendarContainer>
    </div>
  )
}

export default BeekeepersCalendar