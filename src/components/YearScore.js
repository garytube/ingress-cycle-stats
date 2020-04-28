import React, { useEffect } from "react"
import useScoresByYear from "../hooks/useScoresbyYear"
import { ActiveScoreBox, Title, ScoreNumber } from "./Styled"
import styled from "styled-components"

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  grid-gap: 20px 30px;
`
const Chart = styled.div`
  display: block;
`

const YearScore = ({ data }) => {
  const { points, getYear } = useScoresByYear(data.allMarkdownRemark.group)
  const [year, setYear] = React.useState(2015)

  useEffect(() => {
    const ticker = setInterval(() => {
      if (year >= 2020) return setYear(2014)
      setYear(year + 1)
    }, 2000);

    return () => {
      clearInterval(ticker)
    }
  }, [year])


  return (
    <div>
      <pre>{JSON.stringify(getYear(year), null, 2)}</pre>
      <hr />
      <ChartGrid>
        {points && points.map(stat => (
          <ActiveScoreBox key={stat.year}>
            <Title>CYCLES WON {stat.year}</Title>
            <ScoreNumber res>RES {stat.resistanceWins}</ScoreNumber>
            <ScoreNumber enl>ENL {stat.enlightenedWins}</ScoreNumber>
            <Chart>
              todo...
            </Chart>
          </ActiveScoreBox>

        ))
        }
      </ChartGrid>
    </div>

  )
}

export default React.memo(YearScore)