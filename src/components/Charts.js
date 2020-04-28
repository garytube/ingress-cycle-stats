import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { COLOR_RESISTANCE, COLOR_ENLIGHTENED } from './Styled';


export function ScoreDoughnut({ data }) {
  const [state, setState] = useState(data)
  useEffect(() => setState(data), [data])

  const options = {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  }

  return (
    <Doughnut data={
      {
        labels: ['Resistance', 'Enlightened'],
        datasets: [{
          borderColor: '#000',
          data: [state?.resistanceWins || 0, state?.enlightenedWins || 0],
          backgroundColor: [
            COLOR_RESISTANCE,
            COLOR_ENLIGHTENED,
          ],
        }]
      }
    } options={options} />
  )
}



