// import React from "react";

// export default function Timeline({ entries }) {
//   if (entries.length === 0)
//     return <p className="text-gray-600 mt-6">No past entries yet 📝</p>;

//   const getMoodColor = (weather) => {
//     switch (weather.toLowerCase()) {
//       case "clear":
//         return "bg-yellow-200";
//       case "rain":
//         return "bg-blue-200";
//       case "clouds":
//         return "bg-gray-200";
//       default:
//         return "bg-green-200";
//     }
//   };

//   return (
//     <div className="w-full max-w-md mt-8">
//       <h2 className="text-2xl font-semibold mb-4">Past Entries</h2>
//       <div className="space-y-4">
//         {entries.map((entry, index) => (
//           <div
//             key={index}
//             className={`p-4 rounded-xl shadow-md ${getMoodColor(
//               entry.weather
//             )}`}
//           >
//             <p className="font-bold">
//               {entry.date} - {entry.city}
//             </p>
//             <p>{entry.weather} • {entry.temp}°C</p>
//             <p>Mood: {entry.mood}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
