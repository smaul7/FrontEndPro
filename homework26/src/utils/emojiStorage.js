const STORAGE_KEY = "emoji-votes";

export const loadVotes = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const saveVotes = (counts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
};

export const resetVotes = () => {
  localStorage.removeItem(STORAGE_KEY);
};
