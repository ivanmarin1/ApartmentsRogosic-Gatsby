module.exports = {
  siteMetadata: {
    title: `Apartments Rogošić`,
    description: `Enjoy your stay with us.`,
    author: `Ivan Marin`,
    menuItems: [
      {
        text: "POČETNA",
        link: "/",
        number: "one",
        iconName: "home.png",
      },
      {
        text: "O NAMA",
        link: "/about/",
        number: "two",
        iconName: "aboutus.png",
      },
      {
        text: "APARTMANI",
        link: "/apartments/",
        number: "three",
        iconName: "apartments.png",
      },
      {
        text: "REZERVACIJE",
        link: "/reservation/",
        number: "four",
        iconName: "reservation.png",
      },
      {
        text: "KONTAKT",
        link: "/contact/",
        number: "five",
        iconName: "contact.png",
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/components/layout.js`,
      },
    },
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
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
        icon: `src/images/sun.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
