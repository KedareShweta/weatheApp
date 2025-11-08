import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import EntryList from "./components/EntryList";

export default function App() {
  const [entries, setEntries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // 🔹 New flag

  // 🧩 1️⃣ Load saved entries once on mount
  useEffect(() => {
    const saved = localStorage.getItem("weatherEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
    setIsLoaded(true); // Mark that initial load is done
  }, []);

  // 💾 2️⃣ Save entries to localStorage ONLY after initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("weatherEntries", JSON.stringify(entries));
    }
  }, [entries, isLoaded]);

  // ➕ Add new mood/weather entry
  const addEntry = (newEntry) => {
    setEntries((prev) => [newEntry, ...prev]);
  };

  // ❌ Delete a specific entry (with confirmation)
  const deleteEntry = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const filtered = entries.filter((_, index) => index !== indexToDelete);
      setEntries(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 drop-shadow-sm">
        🌤️ Weather & Mood Journal
      </h1>

      {/* Weather search + mood entry */}
      <WeatherCard onAddEntry={addEntry} />

      {/* Saved past entries list with delete support */}
      <EntryList entries={entries} onDelete={deleteEntry} />
    </div>
  );
}

// ========================================================================================================================


// import React, { useState, useEffect } from "react";
// import WeatherCard from "./components/WeatherCard";
// import EntryList from "./components/EntryList";

// export default function App() {
//   const [entries, setEntries] = useState([]);

//   // 🔹 Load saved entries from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("weatherEntries");
//     if (saved) {
//       setEntries(JSON.parse(saved));
//     }
//   }, []);

//   // 🔹 Save entries to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("weatherEntries", JSON.stringify(entries));
//   }, [entries]);

//   // ➕ Add new mood/weather entry
//   const addEntry = (newEntry) => {
//     setEntries((prev) => [newEntry, ...prev]); // newest first
//   };

//   // ❌ Delete a specific entry
//   // const deleteEntry = (indexToDelete) => {
//   //   const updatedEntries = entries.filter((_, index) => index !== indexToDelete);
//   //   setEntries(updatedEntries);
//   // };

//   // ❌ Delete a specific entry (with confirmation)
//   const deleteEntry = (indexToDelete) => {
//     if (window.confirm("Are you sure you want to delete this entry?")) {
//       const filtered = entries.filter((_, index) => index !== indexToDelete);
//       setEntries(filtered);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center py-10">
//       <h1 className="text-3xl font-bold mb-6 text-blue-700 drop-shadow-sm">
//         🌤️ Weather & Mood Journal
//       </h1>

//       {/* Weather search + mood entry */}
//       <WeatherCard onAddEntry={addEntry} />

//       {/* Saved past entries list with delete support */}
//       <EntryList entries={entries} onDelete={deleteEntry} />
//     </div>
//   );
// }

