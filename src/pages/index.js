import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import { ActiveScoreBox, Title, ScoreNumber } from "../components/Styled"
import Scoreboard from "../components/Scoreboard";
import YearScore from "../components/YearScore";


const ScoreboardPage = () => {
  const [activeCycle, setActiveCycle] = useState(null)
  const data = useStaticQuery(graphql`
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
`)





  return (
    <Layout>
      <ActiveScoreBox>
        <Title>{activeCycle?.cycleDate || "[HOVER OVER A CELL]"}</Title>
        <ScoreNumber>RES {activeCycle?.res || ''}</ScoreNumber>
        <ScoreNumber>ENL {activeCycle?.enl || ''}</ScoreNumber>
      </ActiveScoreBox>
      <YearScore data={data} />
      <Scoreboard data={data} setActiveCycle={setActiveCycle} />
    </Layout>
  )
}

export default ScoreboardPage

