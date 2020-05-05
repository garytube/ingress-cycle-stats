import { useState, useEffect } from "react"

export default function useScoresByYear(data) {
  const [points, setPoints] = useState(data)

  // on mount or change
  useEffect(() => setPoints(data), [data])

  const getYear = year => points.filter(score => score.year === `${year}`)[0]

  return { points, getYear }
}
