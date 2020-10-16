import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const HomepageBackground = () => {
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
  return <Img fluid={image.fluid} style={{ borderRadius: `15px` }} />
}
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

// const HomepageBackground = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

// export default HomepageBackground