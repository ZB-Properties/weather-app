import React from 'react'
import './Weather.css'

const TopButton = ({setQuery}) => {

    const cities = [
      {
        id: 1,
        name: "New York",
      },
      {
        id: 2,
        name: "Tokyo",
      },
      {
        id: 3,
        name: "London",
      },
      {
        id: 4,
        name: "Lagos",
      },
      {
        id: 5,
        name: "Doha",
      },
    ]

  return (
    <div className='top'>
        {
            cities.map(city => (
                <button key={city.id} className='top-buttons'
                onClick={() => setQuery({ q: city.name })}>

                  {city.name}
                  </button>
            ))
        }
      
    </div>
  )
}

export default TopButton
