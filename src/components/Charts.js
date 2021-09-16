import React, { useState } from "react"
import { Doughnut, Line } from "react-chartjs-2"
import VisibilitySensor from "react-visibility-sensor"
import { COLOR_RESISTANCE, COLOR_ENLIGHTENED, ChartSpacer } from "./Styled"



export function ScoreDoughnut({ data }) {
  const [visable, setVisable] = useState(false)

  const options = {
    responsive: true,
          maintainAspectRatio: false,
    legend: {
      display: true,
    },
    tooltips: {
      enabled: true,
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
          height={250}
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
          type: 'time',
          distribution: 'series',
          display: true,
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: false,
            drawOnChartArea: true,
            drawTicks: false,
            color: '#04e9f51e'
          },
          ticks: {
            callback: (value) => number_format(value)
          },
          display: true,
        }]
    },
  }

  function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
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
