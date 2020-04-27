import { useState, useEffect } from 'react'




export default function useScoresByYear(years) {
  const [data, setData] = useState(() => years)
  const [points, setPoints] = useState([])

  // on mount or change
  useEffect(() => setData(years), [years])


  useEffect(() => {
    let scores = []
    data.forEach(entry => {
      const year = entry.year
      // points
      const resistancePoints = entry.cycles.map(({ cycle }) => cycle.res).reduce((total, score) => total + score)
      const enlightenedPoints = entry.cycles.map(({ cycle }) => cycle.enl).reduce((total, score) => total + score)
      // win streaks
      const resistanceWins = entry.cycles.map(({ cycle }) => cycle).filter(score => score.res > score.enl).length
      const enlightenedWins = entry.cycles.map(({ cycle }) => cycle).filter(score => score.res < score.enl).length
      // overall winner of entry
      const winner = resistanceWins > enlightenedWins ? "resistance" : "enlightened"
      scores.push({ year, winner, resistancePoints, resistanceWins, enlightenedPoints, enlightenedWins })
    });

    setPoints(scores)

  }, [data])




  const getYear = (year) => points.filter(score => score.year === `${year}`)[0]

  return { points, getYear, data }
}

