import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { ActiveScoreBox, Title, ScoreRes, ScoreEnl } from "../components/Styled"
import Scoreboard from "../components/Scoreboard"
import YearScore from "../components/YearScore"
import { ScoreLine } from "../components/Charts"
import SitrepList from "../components/SitrepList"

const ScoreboardTemplate = ({ data, pageContext }) => {
  const [activeCycle, setActiveCycle] = useState({
    cycleYear: 0,
    cycle: 0,
    enl: 0,
    res: 0,
  })
  const { res, enl, cycleYear, cycle } = activeCycle
  const datasetOverall = {
    x: pageContext.scores.map(e => e.year).reverse(),
    res: pageContext.scores.map(p => p.resistancePoints),
    enl: pageContext.scores.map(p => p.enlightenedPoints),
  }

  return (
    <Layout>
      <ActiveScoreBox>
        <Title>{cycleYear + "-" + cycle || "[HOVER OVER A CELL]"}</Title>
        <ScoreRes winner={res > enl}>RES {res || ""}</ScoreRes>
        <ScoreEnl winner={res < enl}>ENL {enl || ""}</ScoreEnl>
      </ActiveScoreBox>
      <Scoreboard data={pageContext.years} setActiveCycle={setActiveCycle} />
      <SitrepList />
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
            enl: enlightened
            res: resistance
          }
        }
      }
    }
  }
`
