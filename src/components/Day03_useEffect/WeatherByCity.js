import { useEffect, useState } from "react";

import "./WeatherByCity.css";

import searchIcon from "./images/search.png";
import clearIcon from "./images/clear.png";
import cloudIcon from "./images/cloud.png";
import snowIcon from "./images/snow.png";
import humidityIcon from "./images/humidity.png";
import windIcon from "./images/wind.png";
import drizzleIcon from "./images/drizzle.png";
import rainIcon from "./images/rain.png";

const api_key = process.env.REACT_APP_WEATHER_API;

export default function WeatherByCity() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("Chennai");
  const [text, setText] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [icon, setIcon] = useState();
  const [country, setCountry] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [temp, setTemp] = useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`
      );
      console.log(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=Metric`
      );
      const data = await response.json();
      if (data.cod == "404") {
        console.error("City Not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setWeather(data);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLong(data.coord.lon);

      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);
      setCityNotFound(false);
    } catch (error) {
      console.error("An error occured", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const changeCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      fetchWeather();
    }
  };

  const WeatherDetails = (props) => {
    return (
      <>
        <div className="image">
          <img src={props.icon} alt="Image" />
        </div>
        <div className="temp">{props.temp}°C</div>
        <div className="location">{props.city}</div>
        <div className="country">{props.country}</div>
        <div className="cord">
          <div>
            <span className="lat">latitude</span>
            <span>{props.lat}</span>
          </div>
          <div>
            <span className="long">longitude</span>
            <span>{props.long}</span>
          </div>
        </div>
        <div className="data-container">
          <div className="element">
            <img src={humidityIcon} className="icon" alt="humidity" />
            <div className="data">
              <div className="humidity-percent">{props.humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windIcon} className="icon" alt="wind" />
            <div className="data">
              <div className="wind-percent">{props.wind} km/hr</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="cityInput"
            placeholder="Search City"
            onChange={changeCity}
            onKeyDown={handleKeyDown}
            value={text}
          />
          <div className="search-icon">
            <img src={searchIcon} alt="Search" onClick={() => fetchWeather()} />
          </div>
        </div>
        {loading && <div className="loading-message"></div>}
        {error && <div className="error-message">{error}</div>}
        {cityNotFound && <div className="city-not-found">City Not Found</div>}

        {!loading && !cityNotFound && (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            long={long}
            humidity={humidity}
            wind={wind}
          />
        )}
      </div>
    </>
  );
}
