module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-theme-codebushi`,
    //   options: {
    //     tailwindConfig: `tailwind.config.js`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'spurfit',
    //     icon: './src/svg/icon.png',
    //   },
    // },
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `${__dirname}/src/common/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/common/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spur.fit`,
        short_name: `Spur.fit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:300,400,500,600,700,900'
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingId: 'UA-204577123-1', // Google Analytics / GA,
        head: true,
        anonymize: true,
      },
    },
  ],
  siteMetadata: {
    title: 'Spur.fit',
    titleTemplate: '%s · Welcome to Spur.fit',
    description: 'Spur.fit motivates you to stay on track and meet your fitness goals',
    url: 'https://www.spur.fit', // No trailing slash allowed!
    image: './src/svg/icon.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@spur_fit',
    author: `@BeBetter Technologies Inc.`,
  },
};
