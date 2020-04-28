import React, { useEffect } from "react"
import useScoresByYear from "../hooks/useScoresbyYear"
import { ActiveScoreBox, Title, ScoreRes, ScoreEnl, Chart, ChartGrid } from "./Styled"


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
        {points && points.map(({ year, winner, resistanceWins, enlightenedWins }) => (
          <ActiveScoreBox key={year}>
            <Title>CYCLES WON {year}</Title>
            <ScoreRes
              winner={resistanceWins > enlightenedWins}>
              RES {resistanceWins || ''}
            </ScoreRes>
            <ScoreEnl
              winner={resistanceWins < enlightenedWins}>
              ENL {enlightenedWins || ''}
            </ScoreEnl>
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