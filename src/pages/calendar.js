import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
// import AnnualCalendar from "../components/calendar/AnnualCalendar"
import EducationBee from "../images/EducationBee.png"





function Calendar() {
    return (
        <Layout>
            <SEO title="Calendar" />
            <HeroHeader img={EducationBee} text={"beekeepers' calendar"} />
            {/* <AnnualCalendar /> */}


        </Layout>
    )
}

export default Calendar