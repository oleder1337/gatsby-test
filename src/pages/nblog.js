import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            {/* <p>My cool Posts wiasdfasdll go here</p> */}

            {data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                </article>
            ))}

        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        excerpt
      }
    }
  }`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage