import React, { useState } from "react";

export default function MoodTracker({ weather, onSaveMood }) {
  const [selectedMood, setSelectedMood] = useState("");

  const moods = ["😊 Happy", "😔 Sad", "😴 Tired", "😎 Excited", "😐 Calm"];

  const handleSave = () => {
    if (!selectedMood) return alert("Please select a mood!");
    onSaveMood(selectedMood);
    setSelectedMood("");
    // alert("Mood saved successfully! 🌈");
  };

  return (
    <div className="mt-4">
      <h3 className="font-medium mb-2">How do you feel today?</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            className={`px-3 py-2 rounded-full border ${
              selectedMood === mood ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
      <button
        onClick={handleSave}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Save Mood
      </button>
    </div>
  );
}
