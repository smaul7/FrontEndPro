import React, { useState, useEffect } from "react";
import { EmojiList } from "./EmojiList";
import {
  loadVotes,
  saveVotes,
  clearVotes,
  getInitialCounts,
} from "../utils/storage";

const emojiList = ["😀", "😂", "😍", "😎", "🤯"];

export function EmojiCounter() {
  const [counts, setCounts] = useState({});
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const stored = loadVotes();
    setCounts(stored || getInitialCounts(emojiList));
  }, []);

  useEffect(() => {
    if (Object.keys(counts).length > 0) {
      saveVotes(counts);
    }
  }, [counts]);

  const handleEmojiClick = (emoji) => {
    setCounts((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...Object.values(counts));
    const topEmojis = Object.keys(counts).filter(
      (emoji) => counts[emoji] === maxVotes
    );
    setWinner(topEmojis.join(" "));
  };

  const handleReset = () => {
    clearVotes();
    setCounts(getInitialCounts(emojiList));
    setWinner(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Натисни на смайлик:</h2>
      <EmojiList emojiList={emojiList} counts={counts} onEmojiClick={handleEmojiClick} />

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={handleShowResults}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            background: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Show Results
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            background: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Очистити результати
        </button>
      </div>

      {winner && (
        <div style={{ marginTop: "15px", fontSize: "1.2rem" }}>
          Переможець: <strong>{winner}</strong>
        </div>
      )}
    </div>
  );
}
