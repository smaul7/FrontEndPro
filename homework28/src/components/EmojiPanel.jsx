import React from "react";
import { EmojiButton } from "./EmojiButton";

export const EmojiPanel = ({ counts, onEmojiClick }) => {
  return (
    <div className="emoji-panel">
      <EmojiButton emoji="😀" count={counts["😀"]} onClick={onEmojiClick} />
      <EmojiButton emoji="😂" count={counts["😂"]} onClick={onEmojiClick} />
      <EmojiButton emoji="😍" count={counts["😍"]} onClick={onEmojiClick} />
      <EmojiButton emoji="😎" count={counts["😎"]} onClick={onEmojiClick} />
      <EmojiButton emoji="🤯" count={counts["🤯"]} onClick={onEmojiClick} />
    </div>
  );
};
