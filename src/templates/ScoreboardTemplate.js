import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { ActiveScoreBox, Title, ScoreRes, ScoreEnl } from "../components/Styled"
import Scoreboard from "../components/Scoreboard"
import YearScore from "../components/YearScore"
import { ScoreLine } from "../components/Charts"

const ScoreboardTemplate = ({ data, pageContext }) => {
  const [activeCycle, setActiveCycle] = useState({
    cycleDate: null,
    enl: 0,
    res: 0,
  })
  const { res, enl, cycleDate } = activeCycle

  const datasetOverall = {
    x: pageContext.scores.map(e => e.year).filter(y => y !== "2020"),
    res: pageContext.scores.map(p => p.resistancePoints),
    enl: pageContext.scores.map(p => p.enlightenedPoints),
  }

  return (
    <Layout>
      <ActiveScoreBox>
        <Title>{cycleDate || "[HOVER OVER A CELL]"}</Title>
        <ScoreRes winner={res > enl}>RES {res || ""}</ScoreRes>
        <ScoreEnl winner={res < enl}>ENL {enl || ""}</ScoreEnl>
      </ActiveScoreBox>
      <Scoreboard data={pageContext.years} setActiveCycle={setActiveCycle} />

      <div style={{ margin: "2em auto", textAlign: "center" }}>
        <Title>MINDUNITS YEAR TOTAL</Title>
        <ScoreLine data={datasetOverall} />
      </div>
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
          sitrep: html
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
