import React from 'react'
import { ScoreBlock, YearWrapper, Title } from './Styled'

function Scoreboard({ data, setActiveCycle }) {
  return (
    <div>
      {
        data.allMarkdownRemark.group.reverse().map(({ year, cycles }) => (
          <Year key={year} year={year}>
            {cycles.map(({ cycle }) => (
              <ScoreBlock
                key={cycle.cycleDate}
                to={`/cycle/${cycle.cycleDate}`}
                onFocus={() => setActiveCycle(cycle)}
                onMouseOver={() => setActiveCycle(cycle)}
                winner={cycle.enl < cycle.res ? 'res' : 'enl'} />
            ))}
          </Year>
        ))
      }
    </div>
  )
}


export default React.memo(Scoreboard)


export const Year = ({ year, children }) =>
  <YearWrapper>
    <Title>{year}</Title>
    {children}
  </YearWrapper>


