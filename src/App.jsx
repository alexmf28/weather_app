import { React, useState, useEffect } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { BEFORE_WEATHER_API, options } from "./constants";
import { currentTextDay } from "./logic";
import ForecastDays from "./components/ForecastDays";
const App = () => {
  const [city, setCity] = useState("Lima");
  const [weather, setWeather] = useState();
  const ICON_URL = weather?.current.condition.icon;

  // const [collapseButton, setCollapseButton] = useState([false]);

  const handleChange = (event) => {
    const newCity = event.target.value;
    setCity(newCity);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && city.length > 3) {
      fetchData();
    }
  };

  useEffect(() => fetchData(), []);
  const fetchData = () => {
    try {
      fetch(`${BEFORE_WEATHER_API}q=${city}&days=5&lang=spanish`, options)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    } catch (error) {
      console.error(error);
    }
  };

  // const setLogicButton = (index) => {
  //   // Se copia el estado actual de collapseButton
  //   const updatedCollapseButton = [...collapseButton];

  //   // Se cambia el estado solo del elemento en el índice proporcionado
  //   updatedCollapseButton[index] = !updatedCollapseButton[index];

  //   // Actualiza el estado con el nuevo valor
  //   setCollapseButton(updatedCollapseButton);
  // };

  // const handleClick = (id) => {
  //   setLogicButton(id);
  // };

  return (
    <>
      <article className="weather_head">
        <section className="input_wrapper">
          <FaSearch id="search_icon" />
          <input
            type="text"
            value={city}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a city"
          />
        </section>
        <section className="current_day_and_hour_section">
          <aside>
            <div className="day_part">
              {weather && <h1>{currentTextDay(weather).dayOfWeek}</h1>}
            </div>
          </aside>

          <aside>
            <div className="first_header_part">
              {weather && <h1>{currentTextDay(weather).monthOfYear}</h1>}
              {weather && <h1>{currentTextDay(weather).numberDay}</h1>}
            </div>
            <div className="current_hour">
              {weather && <h1>{currentTextDay(weather).currentDateHour}</h1>}
            </div>
          </aside>
        </section>
        <section className="second_header_part">
          <div>
            {weather && <h1>{weather.location.name}</h1>}
            {weather && <h1>{weather.current.temp_c} ° C</h1>}
            {weather && <p>{weather.current.condition.text}</p>}
          </div>

          <img src={ICON_URL} alt="weather icon" />
        </section>
      </article>
      <article className="forecast_header">
        <div>
          <h1>Forecast</h1>
        </div>
      </article>
      <ForecastDays weather={weather} />
    </>
  );
};

export default App;
