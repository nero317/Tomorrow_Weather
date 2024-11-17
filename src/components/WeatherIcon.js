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
  const iconStyle = {width: "48px", height: "48px"};

  switch (condition) {
    case "clear":
      return <Sun style={{ ...iconStyle, color: "gold" }} />;
    case "clouds":
      return <Cloud style={{ ...iconStyle, color: "gray" }} />;
    case "rain":
      return (
        <CloudRain style={{ ...iconStyle, color: "blue" }} />
      );
    case "drizzle":
      return (
        <CloudDrizzle
          style={{ ...iconStyle, color: "lightblue" }}
        />
      );
    case "fog":
    case "mist":
      return (
        <CloudFog
          style={{ ...iconStyle, color: "lightgray" }}
        />
      );
    case "thunderstorm":
      return (
        <CloudLightning
          style={{ ...iconStyle, color: "purple" }}
        />
      );
    default:
      return <Sun style={{ ...iconStyle, color: "gold" }} />;
  }
};

export default WeatherIcon;
