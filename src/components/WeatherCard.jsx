import React, { useState } from "react";
import axios from "axios";
import MoodTracker from "./MoodTracker";

import sunny from "../assets/weather-icons/sunny.png";
import cloudy from "../assets/weather-icons/cloudy.png";
import rainy from "../assets/weather-icons/rainy.png";
import storm from "../assets/weather-icons/storm.png";
import mist from "../assets/weather-icons/mist.png";
import snow from "../assets/weather-icons/snow.png";

export default function WeatherCard({ onAddEntry }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [time, setTime] = useState("");


  // You must include the parameter if you plan to use it inside.
  // The(main) part declares a local variable for that function.
// Whatever value you pass when calling it will be stored inside that variable.
// API data:        getWeatherIcon(response.data.weather[0].main);
  // "weather": [
  //   {
  //     "main": "Rain",
  //     "description": "light rain"
  //   }
// ]

  const getWeatherIcon = (main) => {
    const lower = main.toLowerCase();
    if (lower.includes("clear")) return sunny;
    if (lower.includes("cloud")) return cloudy;
    if (lower.includes("rain")) return rainy;
    if (lower.includes("storm") || lower.includes("thunder")) return storm;
    if (lower.includes("mist") || lower.includes("fog")) return mist;
    if (lower.includes("snow")) return snow;
    return sunny;
  };

  const getWeatherBg = (main) => {
    const lower = main.toLowerCase();
    if (lower.includes("clear")) return "bg-yellow-200";
    if (lower.includes("cloud")) return "bg-gray-200";
    if (lower.includes("rain")) return "bg-blue-300";
    if (lower.includes("storm") || lower.includes("thunder")) return "bg-purple-300";
    if (lower.includes("mist") || lower.includes("fog")) return "bg-gray-300";
    if (lower.includes("snow")) return "bg-blue-100";
    return "bg-teal-200";
  };

  const fetchWeather = async () => {
    if (!city) return alert("Please enter a city name!");

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b28ec704af0d2c9131a84ea7da791eb5&units=metric`
      );
      setWeather(res.data);
      setError("");

      // ⏰ Store current time
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      
    } catch (error) {
      console.error("Error fetching weather:", error.response?.data || error.message);
      setError("City not found 😢");
      setWeather(null);
    }
  };

  const weatherBgClass = weather ? getWeatherBg(weather.weather[0].main) : "bg-white/80";

  return (
    <div
      className={`${weatherBgClass} p-6 rounded-2xl shadow-md w-full max-w-md text-center mb-8 transition-all duration-500`}
    >
      <input
        type="text"
        placeholder="Enter city..."
        className="p-2 border rounded-lg w-3/4"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={fetchWeather}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {weather && (
        <div className="mt-6 flex flex-col items-center">
          <img
            src={getWeatherIcon(weather.weather[0].main)}
            alt="Weather icon"
            className="w-24 h-24 mb-2"
          />
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-lg capitalize">{weather.weather[0].description}</p>
          <p className="text-2xl font-bold">{weather.main.temp}°C</p>

          {/* ⏰ Show current time */}
          <p className="text-sm text-gray-700 mt-1">
            Time: {time || new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>

          <MoodTracker
            weather={weather}
            onSaveMood={(mood) => {
              const now = new Date();
              const entry = {
                city: weather.name,
                mood,
                temp: weather.main.temp,
                weather: weather.weather[0].main,
                date: now.toLocaleDateString(),
                time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              };
              onAddEntry(entry);

              // 🧹 Clear input and weather after saving
              setCity("");
              setWeather(null);
              setError("");

            }}
          />
        </div>
      )}
    </div>
  );
}
