import React, { createContext, useEffect, useState } from "react";

export const SmilesContext = createContext();

const defaultSmiles = ["😀", "😂", "😍", "😎", "🤯"];

export const SmilesProvider = ({ children }) => {
  const [counts, setCounts] = useState(() => {
    const stored = localStorage.getItem("emojiCounts");
    return stored ? JSON.parse(stored) : defaultSmiles.reduce((acc, emoji) => {
      acc[emoji] = 0;
      return acc;
    }, {});
  });

  useEffect(() => {
    localStorage.setItem("emojiCounts", JSON.stringify(counts));
  }, [counts]);

  const increment = (emoji) => {
    setCounts((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  const clearVotes = () => {
    const reset = Object.keys(counts).reduce((acc, emoji) => {
      acc[emoji] = 0;
      return acc;
    }, {});
    setCounts(reset);
  };

  const getWinner = () => {
    let max = -1;
    let winner = null;
    for (const emoji in counts) {
      if (counts[emoji] > max) {
        max = counts[emoji];
        winner = emoji;
      }
    }
    return winner;
  };

  return (
    <SmilesContext.Provider value={{ counts, increment, clearVotes, getWinner, smiles: Object.keys(counts) }}>
      {children}
    </SmilesContext.Provider>
  );
};
