import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import {
  Title,
  Subtitle,
  Sitrep,
  ActiveScoreBox,
  ScoreNumber,
  Button,
} from "../components/Styled"
import css from "./cycleTemplate.module.css"

export default function CycleTemplate({ data }) {
  const {
    resistance,
    enlightened,
    cycleYear,
    cell,
    cycle,
  } = data.markdownRemark.frontmatter
  const { sitrep } = data.markdownRemark

  return (
    <Layout>
      <ActiveScoreBox>
        <Title>
          SITREP
          <Subtitle>
            {cell} | {cycle + "-" + cycleYear}
          </Subtitle>
        </Title>
        <ScoreNumber>RES: {resistance}</ScoreNumber>
        <ScoreNumber>ENL: {enlightened}</ScoreNumber>
      </ActiveScoreBox>
      {data.markdownRemark.sitrep && (
        <Sitrep
          className={css.sitrep}
          dangerouslySetInnerHTML={{ __html: sitrep }}
        />
      )}
      <Link to="/">
        <Button>go back</Button>
      </Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      sitrep: html
      frontmatter {
        resistance
        enlightened
        cycleYear
        cell
        cycle
      }
    }
  }
`
