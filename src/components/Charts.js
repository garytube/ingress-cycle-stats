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
    lineTension: 0.3,
    backgroundColor: "rgba(75,192,192,0)",
    borderColor: "rgba(75,192,192,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(75,192,192,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
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
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
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
      <ChartSpacer height="400px">
        {visable && <Line data={foo} options={options} />}
      </ChartSpacer>
    </VisibilitySensor>
  )
}

export function CycleLine({ cycles }) {
  const [visable, setVisable] = useState(false)
  const style = {
    fill: false,
    lineTension: 0.3,
    backgroundColor: "rgba(75,192,192,0)",
    borderColor: "rgba(75,192,192,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(75,192,192,0)",
    pointBackgroundColor: "#000",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,0)",
    pointHoverBorderWidth: 2,
    pointRadius: 0,
    pointHitRadius: 10,
  }
  const foo = {
    labels: cycles.map((c, i) => c.cycle.cycleDate),
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
            display: false,
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
