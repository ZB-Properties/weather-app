import React from 'react';
import './Weather.css';


const LocationAndTime = ({ 
  weather: { formattedTime, name, country },
 }) => {
  return (
    <div>
      
      <div className='location-time'>
      <p>{formattedTime}
      </p>
      </div>

     <div className='location'>
        <p>{`${name}, ${country}`}</p>
     </div>

    </div>
  )
};

export default LocationAndTime;
