import { useState } from "react";

const Weather = ({ city, weather, onClick }) => {
  const[city_,setCity_]=useState()
    function CF(v1){
        let x=(v1-32)/1.8;
        return `${Math.round(x)}°C`
    }
    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        onClick(city_)
      }
    }
 
  
    return (
     <div className="all">
       <div className="main_">
       <div className="city">
        <input className="city_IS" type="text" name="city_" id="city_"  placeholder='Enter city name' 
          onChange={event => setCity_(event.target.value)}
          onKeyPress={handleKeyPress}/>
        <select className="city_IS" onChange={(e) => onClick(e.target.value)}>
        {city.data.map((city, key) => {
            return (
              <option  key={key} >
                {city.capital}
              </option>
            );
          })}
        </select>
         <ul className="CitiesUl">
          {city.data.map((city, key) => {
            return (
              <li  key={key} onClick={() => onClick(city.capital)}>
                {city.capital}
              </li>
            );
          })}
        </ul>
        </div>
           <div className="cityWeather">
           {weather.weather?<img width="150px" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />:null}
           {weather.main?<div class="C_temp">{CF(weather.main.temp)}</div>:null}
           {(weather && weather.sys)?<div>{weather.sys.country} / { weather.name}</div>:null}
           {weather.weather? <div>{weather.weather[0].description}</div>:null}
           </div>
      </div>
      <div className="bottom">
      
        
        
        <div class="minMx">
        {weather.main? <div class="MX">     
        <img width="50px" src={('/Images/high-temperature.png')} />
                  {CF(weather.main.temp_max)}</div>:null}
      {weather.main? <div class="MX"> <img width="50px" src={('/Images/temperature.png')} /> {CF(weather.main.temp_min)}</div>:null}
        
       </div>

       {weather.main?  <div><img width="50px" src={('/Images/humidity.png')} />  {weather.main.humidity}%</div>:null}
       {weather.wind?<div><img width="50px" src={('/Images/wind.png')} /> {weather.wind.speed} MPH</div>:null}

      </div>

      </div>
    );
  };
  
  export default Weather;