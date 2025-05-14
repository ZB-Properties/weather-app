import React, { useState } from 'react'
import './Weather.css'
import { CgSearch } from "react-icons/cg";
import { BiCurrentLocation } from "react-icons/bi";


const Inputs = ({setQuery, setUnits}) => {

  const [city, setCity] = useState('');

  const searchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  
  const locationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
      })
    }
  }

  return (
    <div className='input'>
      
      <div className='input-search'>
        <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type='text' placeholder='search city...' />

        <CgSearch className='search-icon' 
        onClick={searchClick} />
        <BiCurrentLocation className='search-icon' 
        onClick={locationClick} />
      </div>

    <div className='input-button'>
      <button className='input-button1'
      onClick={() => setUnits("metric")}>
        °C</button>
      <p>|</p>
      <button className='input-button1'
      onClick={() => setUnits("imperial")}>
        °F</button>

    </div>
    </div>
  )
}

export default Inputs;
