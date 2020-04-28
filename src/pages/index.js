import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { ActiveScoreBox, Title, ScoreNumber } from "../components/Styled"
import Scoreboard from "../components/Scoreboard";
import YearScore from "../components/YearScore";


const ScoreboardPage = ({ data }) => {
  const [activeCycle, setActiveCycle] = useState(null)

  return (
    <Layout>
      <ActiveScoreBox>
        <Title>{activeCycle?.cycleDate || "[HOVER OVER A CELL]"}</Title>
        <ScoreNumber>RES {activeCycle?.res || ''}</ScoreNumber>
        <ScoreNumber>ENL {activeCycle?.enl || ''}</ScoreNumber>
      </ActiveScoreBox>
      <Scoreboard data={data} setActiveCycle={setActiveCycle} />
      <YearScore data={data} />
    </Layout>
  )
}

export default ScoreboardPage


export const query = graphql`
{
  allMarkdownRemark {
    group(field: frontmatter___cycleYear) {
      year: fieldValue
      cycles: nodes {
        cycle: frontmatter {
          cycleDate
          enl: enlightened
          res: resistance
        }
      }
    }
  }
}
`

