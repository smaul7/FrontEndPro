import React, { useContext, useState } from "react";
import { SmilesContext } from "../context/SmilesContext";

const EmojiCounter = () => {
  const { counts, increment, clearVotes, getWinner, smiles } = useContext(SmilesContext);
  const [showResult, setShowResult] = useState(false);

  const handleResultClick = () => setShowResult(true);

  return (
    <div>
      <div className="emoji-panel">
        {smiles.map((emoji) => (
          <button key={emoji} className="emoji-btn" onClick={() => increment(emoji)}>
            {emoji}
            <div className="counter">{counts[emoji]}</div>
          </button>
        ))}
      </div>

      <div className="result-actions">
        <button className="green-btn" onClick={handleResultClick}>Show Results</button>
        <button className="red-btn" onClick={clearVotes}>Очистити результати</button>
      </div>

      {showResult && (
        <div className="result-winner">
          Переможець: <strong>{getWinner()}</strong>
        </div>
      )}
    </div>
  );
};

export default EmojiCounter;
