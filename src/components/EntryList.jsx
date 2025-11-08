// import React from "react";

// // 🖼️ Import weather icons
// import sunny from "../assets/weather-icons/sunny.png";
// import cloudy from "../assets/weather-icons/cloudy.png";
// import rainy from "../assets/weather-icons/rainy.png";
// import storm from "../assets/weather-icons/storm.png";
// import mist from "../assets/weather-icons/mist.png";
// // import snow from "../assets/weather-icons/snow.png";

// export default function EntryList({ entries }) {
//   if (entries.length === 0) {
//     return <p className="text-gray-500 mt-4">No entries yet. Add one above!</p>;
//   }

//   // 🧠 Helper: decide icon based on weather
//   const getWeatherIcon = (main) => {
//     const lower = main.toLowerCase();
//     if (lower.includes("clear")) return sunny;
//     if (lower.includes("cloud")) return cloudy;
//     if (lower.includes("rain")) return rainy;
//     if (lower.includes("storm") || lower.includes("thunder")) return storm;
//     if (lower.includes("mist") || lower.includes("fog")) return mist;
//     // if (lower.includes("snow")) return snow;
//     return sunny;
//   };

//   // 🎨 Helper: background color for each entry
//   const getWeatherBg = (main) => {
//     const lower = main.toLowerCase();
//     if (lower.includes("clear")) return "bg-yellow-200";
//     if (lower.includes("cloud")) return "bg-gray-200";
//     if (lower.includes("rain")) return "bg-blue-300";
//     if (lower.includes("storm") || lower.includes("thunder")) return "bg-purple-300";
//     if (lower.includes("mist") || lower.includes("fog")) return "bg-gray-300";
//     // if (lower.includes("snow")) return "bg-blue-100";
//     return "bg-teal-200";
//   };

//   return (
//     <div className="w-full max-w-md mt-8 space-y-4">
//       <h2 className="text-2xl font-semibold text-blue-600 mb-2">📖 Past Entries</h2>

//       {entries.map((entry, index) => (
//         <div
//           key={index}
//           className={`${getWeatherBg(
//             entry.weather
//           )} flex items-center justify-between p-4 rounded-xl shadow transition-all duration-300`}
//         >
//           {/* Left: Weather icon */}
//           <img
//             src={getWeatherIcon(entry.weather)}
//             alt="weather icon"
//             className="w-12 h-12"
//           />

//           {/* Middle: Weather + mood details */}
//           <div className="flex-1 ml-4 text-left">
//             <h3 className="font-bold text-lg">{entry.city}</h3>
//             <p className="capitalize text-sm text-gray-700">{entry.weather}</p>
//             <p className="text-sm text-gray-600">{entry.date}</p>
//           </div>

//           {/* Right: Mood + temperature */}
//           <div className="text-right">
//             <p className="font-semibold text-lg">{entry.temp}°C</p>
//             <p className="italic text-sm text-gray-800">Mood: {entry.mood}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// ====================================================================================

import React from "react";

// 🖼️ Import weather icons
import sunny from "../assets/weather-icons/sunny.png";
import cloudy from "../assets/weather-icons/cloudy.png";
import rainy from "../assets/weather-icons/rainy.png";
import storm from "../assets/weather-icons/storm.png";
import mist from "../assets/weather-icons/mist.png";
import snow from "../assets/weather-icons/snow.png";

export default function EntryList({ entries, onDelete }) {
    if (entries.length === 0) {
        return <p className="text-gray-500 mt-4">No entries yet. Add one above!</p>;
    }

    // 🧠 Helper: decide icon based on weather
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

    // 🎨 Helper: background color for each entry
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

    return (
        <div className="w-full max-w-md mt-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">📖 Past Entries</h2>

            {entries.map((entry, index) => (
                <div
                    key={index}
                    className={`${getWeatherBg(
                        entry.weather
                    )} flex items-center justify-between p-4 rounded-xl shadow transition-all duration-300`}
                >
                    {/* Left: Weather icon */}
                    <img
                        src={getWeatherIcon(entry.weather)}
                        alt="weather icon"
                        className="w-12 h-12"
                    />

                    {/* Middle: Weather + mood details */}
                    <div className="flex-1 ml-4 text-left">
                        <h3 className="font-bold text-lg">{entry.city}</h3>
                        <p className="capitalize text-sm text-gray-700">{entry.weather}</p>
                        {/* <p className="text-sm text-gray-600">{entry.date}</p> */}
                        <p className="text-sm text-gray-600">
                            {entry.date}
                            {entry.time ? ` • ${entry.time}` : ""}
                        </p>

                    </div>

                    {/* Right: Mood + temperature + delete */}
                    <div className="text-right">
                        <p className="font-semibold text-lg">{entry.temp}°C</p>
                        <p className="italic text-sm text-gray-800">Mood: {entry.mood}</p>

                        {/* 🗑️ Delete button */}
                        <button
                            onClick={() => onDelete(index)}
                            className="mt-2 text-red-600 hover:text-red-800 text-sm font-semibold"
                        >
                            Delete ❌
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}


