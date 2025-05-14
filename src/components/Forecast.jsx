import React from 'react'
import './Weather.css'



const Forecast = ({title, data}) => {

  return (
    <div>
      
     <div className='forecast-top'>
        <p>{title}</p>
     </div>
     <hr />

     <div className='forecast-details'>
        {
            data.map((d, index) => (
                <div key={index} className='data-detail'>
                    <p>{d.title}</p>
                    <img src={d.icon} alt='' />
                    <p>{`${d.temp.toFixed()}°`}</p>
                </div>
            ))
        }
     </div>

    </div>
  )
}

export default Forecast
