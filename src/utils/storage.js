export const storageSave = (key, value) => {
  if (!key && typeof key !== "string") {
    throw new Error("storageSave: No storage key provided");
  }
  if (!value) {
    throw new Error("storageSave: No value provided for " + key);
  }
  localStorage.setItem(key, JSON.stringify(value));
};
export const storageRead = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const storageDelete = (key) => {
  localStorage.removeItem(key);
};
