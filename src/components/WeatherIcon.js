import React from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
} from "lucide-react";

const WeatherIcon = (condition) => {
  switch (condition) {
    case "clear":
      return <Sun style={{ width: "48px", height: "48px", color: "yellow" }} />;
    case "clouds":
      return <Cloud style={{ width: "48px", height: "48px", color: "gray" }} />;
    case "rain":
      return (
        <CloudRain style={{ width: "48px", height: "48px", color: "blue" }} />
      );
    case "drizzle":
      return (
        <CloudDrizzle
          style={{ width: "48px", height: "48px", color: "lightblue" }}
        />
      );
    case "fog":
    case "mist":
      return (
        <CloudFog
          style={{ width: "48px", height: "48px", color: "lightgray" }}
        />
      );
    case "thunderstorm":
      return (
        <CloudLightning
          style={{ width: "48px", height: "48px", color: "purple" }}
        />
      );
    default:
      return <Sun style={{ width: "48px", height: "48px", color: "yellow" }} />;
  }
};

export default WeatherIcon;
