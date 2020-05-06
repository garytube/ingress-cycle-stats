import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Title, Button } from "./Styled"

const SitrepList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { html: { ne: "" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Title>SITREPS</Title>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.fields.slug} to={node.fields.slug}>
          <Button color="warning">
            SITREP {node.fields.slug.replace(/\/+/g, "")}
          </Button>
        </Link>
      ))}
      <Link to="/submit">
        <Button>SUBMIT SITREP *soon*</Button>
      </Link>
    </div>
  )
}

export default SitrepList
