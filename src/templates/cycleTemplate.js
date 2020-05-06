import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Title, ActiveScoreBox, ScoreNumber } from "../components/Styled"

const Subtitle = styled.div`
  color: #777;
  font-weight: 300;
`
const SitrepWrapper = styled.div`
  background: rgba(51, 122, 183, 0.05);
  padding: 1em 2em;
  font-size: 14px;
  color: #dadada;
  line-height: 1.6em;
  margin-bottom: 2rem;
`

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
      <SitrepWrapper>
        {data.markdownRemark.sitrep ? (
          <div dangerouslySetInnerHTML={{ __html: sitrep }} />
        ) : (
          "NO SITREP IN DATABASE - WRITE ONE!"
        )}
      </SitrepWrapper>
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
