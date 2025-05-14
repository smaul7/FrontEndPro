import React from "react";
import { EmojiButton } from "./EmojiButton";

export const EmojiList = ({ emojiList, counts, onEmojiClick }) => (
  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    {emojiList.map((emoji) => (
      <EmojiButton
        key={emoji}
        emoji={emoji}
        count={counts[emoji] || 0}
        onClick={onEmojiClick}
      />
    ))}
  </div>
);