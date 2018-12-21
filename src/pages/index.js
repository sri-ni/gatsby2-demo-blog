import React from "react"
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'
import '../components/layout.css'

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
      }}>
        {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div
              key={frontmatter.path}
              style={{marginBottom: '1rem'}}
            >
                <h2>
                  <Link to={frontmatter.path}> 
                    {frontmatter.title}
                  </Link>
                </h2>
                <br></br>
                <h4>
                  {frontmatter.excerpt}
                </h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            path
            date
          }
        }
      }
    } 
  }
`

export default Layout 