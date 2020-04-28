import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Title, ActiveScoreBox, ScoreNumber } from "../components/Styled";


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

  const { resistance, enlightened, cell, cycleDate, sitrep } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <ActiveScoreBox>
        <Title>
          SITREP
          <Subtitle>{cell} | {cycleDate}</Subtitle>
        </Title>
        <ScoreNumber>RES: {resistance}</ScoreNumber>
        <ScoreNumber>ENL: {enlightened}</ScoreNumber>
      </ActiveScoreBox>
      <SitrepWrapper>
        {sitrep ? 'danger...fooo' : 'NO SITREP IN DATABASE - WRITE ONE!'}
      </SitrepWrapper>
    </Layout>
  )
}


export const pageQuery = graphql`
    query ($cycleDate: String!) {
      markdownRemark(frontmatter: {cycleDate: {eq: $cycleDate}}) {
        sitrep: html,
        frontmatter {
          resistance
          enlightened
          cycleYear
          cell
          cycleDate
        }
      }
    }
`