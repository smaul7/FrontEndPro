import React from "react";

export const EmojiButton = ({ emoji, count, onClick }) => (
  <button
    onClick={() => onClick(emoji)}
    style={{
      fontSize: "2rem",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      background: "#f9f9f9",
      cursor: "pointer",
    }}
  >
    {emoji}
    <div style={{ fontSize: "0.8rem" }}>Кліків: {count}</div>
  </button>
);