/* eslint-disable no-unused-vars */
import React from 'react'
import './Weather.css'
import { FaThermometerQuarter } from "react-icons/fa";
import { TbDropletHalfFilled } from "react-icons/tb";
import { BsWind } from "react-icons/bs";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";



const TempDetails = ({
  weather: {
  details, 
  icon, 
  temp, 
  temp_min, 
  temp_max, 
  speed,
  sunrise, 
  sunset, 
  humidity, 
  feels_like
  },
  units
 }) => {

    const detailIcons = [
        {
            id: 1,
            IconType: FaThermometerQuarter,
            title: "Temp Feel",
            value: `${feels_like.toFixed()}°`,
        },
        {
            id: 2,
            IconType: TbDropletHalfFilled,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id: 3,
            IconType: BsWind,
            title: "Wind",
            value: `${speed.toFixed()} ${ units === 'metric' ? 'km/h' : 'm/s' }`
        }

    ]

  const tempIcon = [
    {
        id: 1,
        IconType: GiSunrise,
        title: "Sunrise",
        value: sunrise,
    },
    {
        id: 2,
        IconType: GiSunset,
        title: "Sunset",
        value: sunset,
    },
    {
        id: 3,
        IconType: MdKeyboardDoubleArrowUp,
        title: "High",
        value: `${temp_max.toFixed()}°`
    },
    {
        id: 4,
        IconType: MdKeyboardDoubleArrowDown,
        title: "Low",
        value: `${temp_min.toFixed()}°`
    }

]


  return (
    <div>
      
     <div className='first-temp'>
        <p>{details}</p>
     </div>

     <div className= 'temp-img'>
        <img src={icon} alt='' />
        <p> {`${temp.toFixed()}°`}</p>

        <div className='details'>

          { detailIcons.map(({ id, IconType, title, value}) => (
              <div key={id} className='detail-one'>
               < IconType className='detail-icon1' />   
                {`${title}: `} <span>{value}</span>         
              </div>

            ))
          }
    </div>
     </div>

      <div className='second-temp'>

        { tempIcon.map(({id, IconType, title, value}) => (
                <div key={id} className='detail-two'>
                    <IconType className='detail-icon1' />
                     <p>
                      {`${title}: `} <span>{value}</span>
                     </p>  
                </div>
        ))
        }         
      </div>


    </div>
  )

};

export default TempDetails
