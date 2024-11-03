import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "../styles/WeatherForecast.css";
import WeatherInfoGrid from "./WeatherInfoGrid";
import { ThermometerSun } from "lucide-react";

const WeatherForecast = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CITY = "Seongbuk-gu"; //성북구 기준
  const COUNTRY_CODE = "KR";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTRY_CODE}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("날씨 데이터를 불러오는데 실패했습니다.");
        }

        const data = await response.json();

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(12, 0, 0, 0);

        const tomorrowNoonForecast = data.list.find((item) => {
          const forecastDate = new Date(item.dt * 1000);
          return (
            forecastDate.getDate() === tomorrow.getDate() &&
            forecastDate.getHours() === 12
          );
        });

        if (tomorrowNoonForecast) {
          setWeather({
            date: tomorrow.toLocaleDateString(),
            temperature: Math.round(tomorrowNoonForecast.main.temp),
            humidity: tomorrowNoonForecast.main.humidity,
            windSpeed: tomorrowNoonForecast.wind.speed,
            condition: tomorrowNoonForecast.weather[0].main.toLowerCase(),
            precipitation: Math.round(tomorrowNoonForecast.pop * 100), // 강수확률
          });
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="weather-card">날씨 정보를 불러오는 중</div>;
  }

  if (error) {
    return <div className="weather-card error">{error}</div>;
  }

  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="header">
        <h2 className="title">내일의 날씨</h2>
        <p className="date">{weather.date}</p>
      </div>
      <div className="content">
        <WeatherIcon condition={weather.condition} />
        <div className="temperature">
          <ThermometerSun className="thermometer-sun" size={30} />
          &nbsp;
          <span>{weather.temperature}°C</span>
        </div>
        <WeatherInfoGrid
          humidity={weather.humidity}
          windSpeed={weather.windSpeed}
          precipitation={weather.precipitation}
        />
      </div>
    </div>
  );
};

export default WeatherForecast;
