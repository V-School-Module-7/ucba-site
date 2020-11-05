import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"


const FullBackground = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "HomepageBackground.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  const image = placeholderImage.childImageSharp
  return (
  <BackgroundImage fluid={image.fluid} style={{ borderRadius: `15px` }} />
  )
}
const HomepageBackground = styled(FullBackground)`
  width: 100%;
  height: 100px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default HomepageBackground



// import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'
// import styled from 'styled-components'

// import BackgroundImage from 'gatsby-background-image'

// const HomepageBackground = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         desktop: file(relativePath: { eq: "HomepageBackground.png" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//         >
//           <h2>gatsby-background-image</h2>
//         </BackgroundImage>
//       )
//     }}
//   />
// )

