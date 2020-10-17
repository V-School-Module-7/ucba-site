const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `UCBA`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
        sublinks: []
      },
      {
        name: 'report a swarm',
        link: '/report-a-swarm',
        sublinks: []
      },
      {
        name: 'be a beekeeper',
        link: null,
        sublinks: [
          {
            name: 'becoming a beekeeper',
            link: '/becoming-a-beekeeper'
          },
          {
            name: 'about ucba',
            link: '/about-ucba'
          },
              {
                name: 'youth bab program',
                link: '/youth-bab-program'
              },
          // {
          //   name: 'youth bab application form',
          //   link: '/youth-bab-form'
          // }
          {
            name: 'licensing',
            link: '/licensing'
          }
        ]
      },
      {
        name: 'education',
        link: null,
        sublinks: [
          {
            name: 'honey information',
            link: '/honey-information'
          },
          {
            name: 'africanized honey bee',
            link: '/africanized-honey-bee'
          },
          {
            name: 'suggested readings',
            link: '/suggested-readings'
          },
          {
            name: 'helpful links',
            link: '/helpful-links'
          },
          {
            name: 'diseases, pests, etc.',
            link: '/diseases-pests-parasites'
          },
          {
            name: 'beekeeper tasks',
            link: '/beekeeper-tasks'
          },
          {
            name: 'fun facts',
            link: '/fun-facts'
          },
        ]
      },
      {
        name: 'membership',
        link: null,
        sublinks: [
          {
            name: 'become a member',
            link: '/become-a-member'
          },
          {
            name: 'sponsors',
            link: '/sponsors'
          },
          {
            name: 'contact ucba',
            link: '/contact-ucba'
          }
        ]
      },
      {
        name: 'store',
        link: '/store',
        sublinks: []
      },
    ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik`,
          `700` // you can also specify font weights and styles
        ],
        // [
        //   `Nunito`,
        //   `400`
        // ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        logo: `src/images/logo.png`,
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


