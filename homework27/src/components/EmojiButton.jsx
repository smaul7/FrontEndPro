import React from "react";
import "../styles/emojiStyles.css";

export const EmojiButton = ({ emoji, count, onClick }) => {
  return (
    <button onClick={() => onClick(emoji)} className="emoji-btn">
      {emoji}
      <div className="counter">Кліків: {count}</div>
    </button>
  );
};

