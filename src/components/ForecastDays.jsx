import React from "react";
import { forecastTextDays } from "../logic";
import "../App.css";
function ForecastDays(weather) {
  const days = weather.weather?.forecast.forecastday;
  return (
    <>
      <article className="weather_body">
        <section>
          {forecastTextDays(days)?.map((day, index) => (
            <div
              className="content_forecast_days"
              // className={`collapseButton ${
              //   collapseButton[index] ? "expanded" : "collapsed"
              // }`}
              key={index}
              // onClick={() => handleClick(index)}
            >
              {/* <div className="content_forecast_days">
              <h1>{day.dayOfWeek}</h1>
              {collapseButton[index] && (
                <>
                  <p>
                    {index === 0
                      ? weather.forecast.forecastday[index].day.condition.text
                      : index === 1
                      ? weather.forecast.forecastday[index].day.condition.text
                      : weather.forecast.forecastday[index].day.condition.text}
                  </p>
                  <img
                    src={weather.forecast.forecastday[index].day.condition.icon}
                    alt="forecast weather icon"
                  />
                </>
              )}
              </div> */}

              <h1>{day.dayOfWeek}</h1>
              <img
                src={
                  weather?.weather.forecast.forecastday[index].day.condition
                    .icon
                }
                alt="forecast weather icon"
              />
              <h5>
                {
                  weather?.weather.forecast.forecastday[index].day.condition
                    .text
                }
              </h5>
              <aside className="forecast_information">
                <p>
                  <span>Maximum temperature:&nbsp;</span>
                  {weather?.weather.forecast.forecastday[index].day.maxtemp_c} °
                  C
                </p>
                <p>
                  <span>Minimum temperature:&nbsp;</span>
                  {weather?.weather.forecast.forecastday[index].day.mintemp_c} °
                  C
                </p>

                <p>
                  <span>Total precipitation:&nbsp;</span>
                  {
                    weather?.weather.forecast.forecastday[index].day
                      .totalprecip_mm
                  }
                  mm
                </p>
              </aside>
            </div>
          ))}
        </section>
      </article>
    </>
  );
}

export default ForecastDays;
