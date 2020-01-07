/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "Thisis the description of the website",
    keywords: "gatsby, gatsbyjs, gatsby project",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}

/**
 *       
      <Helmet>
        <title>Gatsby-Bootstrap</title>
        <meta
          name="description"
          content="Thisis the description of the website"
        />
        <meta name="keywords" content="gatsby, gatsbyjs, gatsby project" />
        <meta name="robots" content="index,follow" />
      </Helmet>
 */
