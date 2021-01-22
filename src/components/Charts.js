import React, { useState } from "react"
import { Doughnut, Line, defaults } from "react-chartjs-2"
import VisibilitySensor from "react-visibility-sensor"
import { COLOR_RESISTANCE, COLOR_ENLIGHTENED, ChartSpacer } from "./Styled"

defaults.global.animation.duration = 2000

export function ScoreDoughnut({ data }) {
  const [visable, setVisable] = useState(false)

  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  }

  return (
    <VisibilitySensor
      partialVisibility
      onChange={isVisible => setVisable(isVisible)}
    >
      <ChartSpacer height="150px">
        {visable && (
          <Doughnut
            data={{
              labels: ["Resistance", "Enlightened"],
              datasets: [
                {
                  borderColor: "#000",
                  data: [data.resistanceWins, data.enlightenedWins],
                  backgroundColor: [COLOR_RESISTANCE, COLOR_ENLIGHTENED],
                },
              ],
            }}
            options={options}
          />
        )}
      </ChartSpacer>
    </VisibilitySensor>
  )
}

export function ScoreLine({ data }) {
  const [visable, setVisable] = useState(false)
  const style = {
    fill: false,
    lineTension: 0.2,
    backgroundColor: "rgba(75,192,192,0)",
    borderColor: "rgba(75,192,192,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(0,0,0,1)",
    pointBackgroundColor: "#000",
    pointBorderWidth: 3,
    pointHoverRadius: 4,
    pointHoverBackgroundColor: "rgba(255,255,255,1)",
    pointHoverBorderColor: "rgba(0,0,0,1)",
    pointHoverBorderWidth: 4,
    pointRadius: 1,
    pointHitRadius: 10,
  }
  const foo = {
    labels: data.x,
    datasets: [
      {
        ...style,
        label: "RES",
        data: data.res,
        borderColor: COLOR_RESISTANCE,
      },
      {
        ...style,
        label: "ENL",
        data: data.enl,
        borderColor: COLOR_ENLIGHTENED,
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: false
          }

        }
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  }

  return (
    <VisibilitySensor
      partialVisibility
      onChange={isVisible => setVisable(isVisible)}
    >
      <ChartSpacer height="420px">
        {visable && <Line data={foo} options={options} />}
      </ChartSpacer>
    </VisibilitySensor>
  )
}

export function CycleLine({ cycles }) {
  const [visable, setVisable] = useState(false)
  const style = {
    lineTension: 0.2,
    backgroundColor: "rgba(0,0,0,1)",
    borderColor: "rgba(0,0,0,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderWidth: 2,
    pointRadius: 2,
    pointHitRadius: 20,
  }
  const foo = {
    labels: cycles.map(({ cycle }) => cycle.cycle),
    datasets: [
      {
        ...style,
        label: "RES",
        data: cycles.map((c, i) => c.cycle.res),
        borderColor: COLOR_RESISTANCE,
      },
      {
        ...style,
        label: "ENL",
        data: cycles.map((c, i) => c.cycle.enl),
        borderColor: COLOR_ENLIGHTENED,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            // display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  }

  return (
    <VisibilitySensor
      partialVisibility
      onChange={isVisible => setVisable(isVisible)}
    >
      <ChartSpacer>
        {visable && <Line data={foo} options={{ ...options, legend: false }} />}
      </ChartSpacer>
    </VisibilitySensor>
  )
}
