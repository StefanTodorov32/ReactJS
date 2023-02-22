import React from 'react'
import { Movie } from './components/Movie'
import { Timer } from './components/Timer'
export default function App() {
  const movies = [
    { title: "The Matrix", year: "2000", rating: 6 },
    { title: "Undercover", year: "2014", rating: 8 }
  ]
  return (
    <div className='app'>
      {/* <Timer/> */}
      {movies.map(m =>
        <Movie
          title={m.title}
          year={m.year}
          rating={m.rating}
        />
      )}

    </div>
  )
}
