import React from "react"
import styled from "styled-components"


const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 56px;
`

const BeekeepersCalendar = () => {
  return (


    <CalendarContainer>
      <iframe src="https://calendar.google.com/calendar/embed?src=jpjrv0fve1h6n9sgf3aafvh6eg%40group.calendar.google.com&ctz=America%2FDenver" style={{ border: 0, width: 800, height: 600, frameborder: 0, scrolling: "no" }}></iframe>
    </CalendarContainer>

  )
}

export default BeekeepersCalendar