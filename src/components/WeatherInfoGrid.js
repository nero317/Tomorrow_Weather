import React from "react";
import { Droplet, Wind, CloudRain } from "lucide-react";

const WeatherInfoGrid = ({ humidity, windSpeed, precipitation }) => {
  return (
    <div className="info-grid">
      <div className="info-item">
        <Droplet className="info-icon" />
        <span>습도</span>
        <span>{humidity}%</span>
      </div>
      <div className="info-item">
        <Wind className="info-icon" />
        <span>풍속</span>
        <span>{windSpeed}m/s</span>
      </div>
      <div className="info-item">
        <CloudRain className="info-icon" />
        <span>강수확률</span>
        <span>{precipitation}%</span>
      </div>
    </div>
  );
};

export default WeatherInfoGrid;
