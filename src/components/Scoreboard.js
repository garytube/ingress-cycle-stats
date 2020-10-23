import React from "react"
import { ScoreBlock, YearWrapper, Title } from "./Styled"
import { CycleLine } from "./Charts"

function Scoreboard({ data, setActiveCycle }) {
  console.log(data)
  return (
    <div>
      {data.map(({ year, cycles }) => (
        <Year key={year} year={year}>
          {cycles
            .sort((a, b) => a.cycle.cycle - b.cycle.cycle)
            .map(({ cycle }, i) => (
              <ScoreBlock
                key={`${year}+${cycle.cycle}-${i}`}
                onFocus={() => setActiveCycle(cycle)}
                onMouseOver={() => setActiveCycle(cycle)}
                winner={cycle.enl < cycle.res ? "res" : "enl"}
              />
            ))}
          <CycleLine cycles={cycles} />
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
