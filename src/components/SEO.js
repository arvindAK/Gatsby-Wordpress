import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = () => {
  ;<StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, keywords },
      },
    }) => {
      const seo = {
        title: defaultTitle,
        description: defaultDescription,
        keywords,
      }
      return (
        <Helmet>
          <title>Gatsby-Bootstrap</title>
          <meta
            name="description"
            content="Thisis the description of the website"
          />
          <meta name="keywords" content="gatsby, gatsbyjs, gatsby project" />
          <meta name="robots" content="index,follow" />
        </Helmet>
      )
    }}
  />
}

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        keywords
      }
    }
  }
`
