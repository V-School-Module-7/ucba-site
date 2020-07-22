import React, { useState } from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

//look at this on Tuesday: https://www.samjulien.com/gatsby-airtable
//https://www.gatsbyjs.org/packages/gatsby-source-airtable/


export default () => {
    
    const data = useStaticQuery(
        graphql`
            allAirtable {
                edges {
                    node {
                        data {
                            Name
                            Email_address
                            Phone
                            Locations
                        }
                    }
                }
            }
        `
    )
}