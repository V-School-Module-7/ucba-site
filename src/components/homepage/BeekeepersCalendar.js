import React from "react"
import styled from "styled-components"
import { BeeHeader } from "../../styles/edustyles.js"


const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0 56px 60px 56px;
    // padding-top: 56.26%;
    // position: relative;
    // overflow: hidden;
    grid-row: 1/3;

    @media (max-width: 900px) {
      width: 60vw;

    }
`

const Title = styled(BeeHeader)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 50px;
`

const Calendar = styled.iframe`
  // position: absolute;
  // top: 0;
  // left: 0;
  // border: 0;
  // width: 100vw;
  // height: 100%;
  // frameborder: 0;
  // scrolling: no;
  // grid-row: 1/3;
`

const BeekeepersCalendar = () => {
  return (


    <CalendarContainer>
      <Title>Beekeeper Schedule of Events</Title>
      <Calendar src="https://calendar.google.com/calendar/embed?src=jpjrv0fve1h6n9sgf3aafvh6eg%40group.calendar.google.com&ctz=America%2FDenver" style={{

      }}></Calendar>
    </CalendarContainer>

  )
}

export default BeekeepersCalendar