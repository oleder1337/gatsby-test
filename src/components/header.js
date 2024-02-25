import { useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'

const Header = () => {
  const data = useStaticQuery(graphql`query data{
        site {
          siteMetadata {
            title
            description
          }
        }
      }`)

  return (<header>
    {data.site.siteMetadata.title}
  </header>)
}

export default Header