import React from "react"
import { ScoreBlock, YearWrapper, Title } from "./Styled"
import { CycleLine } from "./Charts"

function Scoreboard({ data, setActiveCycle }) {
  return (
    <div>
      {data.map(({ year, cycles }) => (
        <Year key={year} year={year}>
          {cycles.map(({ cycle }) => (
            <ScoreBlock
              key={cycle.cycleDate}
              to={`/cycle/${cycle.cycleDate}`}
              onFocus={() => setActiveCycle(cycle)}
              onMouseOver={() => setActiveCycle(cycle)}
              winner={cycle.enl < cycle.res ? "res" : "enl"}
            />
          ))}
          {/* <CycleLine cycles={cycles} /> */}
          {year !== "2020" && <CycleLine cycles={cycles} />}
        </Year>
      ))}
    </div>
  )
}

export default React.memo(Scoreboard)

export const Year = React.memo(({ year, children }) => (
  <YearWrapper>
    <Title>{year}</Title>
    {children}
  </YearWrapper>
))
