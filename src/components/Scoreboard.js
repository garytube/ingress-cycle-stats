import React, { useState, useEffect } from 'react'
import { ScoreBlock, YearWrapper, Title } from './Styled'

function Scoreboard({ data, setActiveCycle }) {
  const [state, setState] = useState([])

  useEffect(() => setState(data.allMarkdownRemark.group.reverse()), [data])


  return (
    <div>
      {
        state.map(({ year, cycles }) => (
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


