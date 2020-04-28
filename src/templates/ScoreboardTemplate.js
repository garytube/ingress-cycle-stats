import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { ActiveScoreBox, Title, ScoreRes, ScoreEnl } from "../components/Styled"
import Scoreboard from "../components/Scoreboard";
import YearScore from "../components/YearScore";


const ScoreboardTemplate = ({ data, pageContext }) => {
  const [activeCycle, setActiveCycle] = useState({ cycleDate: null, enl: 0, res: 0 })
  const { res, enl, cycleDate } = activeCycle

  return (
    <Layout>
      <ActiveScoreBox>
        <Title>{cycleDate || "[HOVER OVER A CELL]"}</Title>
        <ScoreRes winner={res > enl}>RES {res || ''}</ScoreRes>
        <ScoreEnl winner={res < enl}>ENL {enl || ''}</ScoreEnl>
      </ActiveScoreBox>
      <Scoreboard data={data} setActiveCycle={setActiveCycle} />
      <YearScore scores={pageContext.scores} />
    </Layout>
  )
}

export default ScoreboardTemplate


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

