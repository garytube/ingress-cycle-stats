import React from "react"
import { Doughnut, Line } from "react-chartjs-2"
import { COLOR_RESISTANCE, COLOR_ENLIGHTENED } from "./Styled"

export function ScoreDoughnut({ data }) {
  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  }

  return (
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
  )
}

export function ScoreLine({ data }) {
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

  return <Line data={foo} options={options} />
}

export function CycleLine({ cycles, height = "100px" }) {
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
    <div
      style={{ height: "100px", width: "100%", margin: "10px auto 5px auto" }}
    >
      <Line
        data={foo}
        options={{ ...options, legend: false, animation: false }}
      />
    </div>
  )
}
