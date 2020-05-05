import React from "react"
import useScoresByYear from "../hooks/useScoresbyYear"
import {
  ActiveScoreBox,
  Title,
  ScoreRes,
  ScoreEnl,
  Chart,
  ChartGrid,
} from "./Styled"
import { ScoreDoughnut } from "./Charts"

const YearScore = ({ scores }) => {
  const { points } = useScoresByYear(scores)

  const withoutCurrentYear = points.filter(point => point.year !== "2020")

  return (
    <ChartGrid>
      {withoutCurrentYear &&
        withoutCurrentYear.map(stat => (
          <ActiveScoreBox key={stat.year}>
            <Title>CYCLES WON {stat.year}</Title>
            <ScoreRes winner={stat.resistanceWins > stat.enlightenedWins}>
              RES {stat.resistanceWins || ""}
            </ScoreRes>
            <ScoreEnl winner={stat.resistanceWins < stat.enlightenedWins}>
              ENL {stat.enlightenedWins || ""}
            </ScoreEnl>
            <Chart>
              <ScoreDoughnut data={stat} />
            </Chart>
          </ActiveScoreBox>
        ))}
    </ChartGrid>
  )
}

export default React.memo(YearScore)
