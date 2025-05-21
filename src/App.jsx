import React, { useEffect, useState } from 'react'
import TopButton from './components/TopButton'
import Inputs from './components/Inputs'
import LocationAndTime from './components/LocationAndTime'
import TempDetails from './components/TempDetails'
import Forecast from './components/Forecast'
import getFormattedData from './services/forecastServices'



const App = () => {

  const [query, setQuery] = useState({ q: "Abu Dhabi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

   const getWeather = async () => {
     await getFormattedData({ ...query, units }).then((data) => {
      setWeather(data);
     });
     
   };

  useEffect(() => {
    getWeather();
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return "bg-sky-300";
  const threshold = units === "metric" ? 30 : 60;

  return weather.temp <= threshold ? "bg-sky-500" : "bg-amber-600";
  };


  return (
    <div className={`app  ${formatBackground()} transition duration-500 `}>

      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      { weather && (
      <>
       <LocationAndTime weather={weather} />
       <TempDetails weather={weather} units={units}/>
       <Forecast title='3-hour forecast' data={weather.hourly} />
       <Forecast title='daily forecast' data={weather.daily} />
      </>
      )}

    </div>
  );


};

export default App;
