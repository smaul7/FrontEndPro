import React from "react";
import "../styles/emojiStyles.css";

export const ResultPanel = ({ onShow, onReset, winner }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="result-actions">
        <button onClick={onShow} className="green-btn">
          Show Results
        </button>
        <button onClick={onReset} className="red-btn">
          Очистити результати
        </button>
      </div>

      {winner && (
        <div className="result-winner">
          🏆 Переможець: <strong>{winner}</strong>
        </div>
      )}
    </div>
  );
};
