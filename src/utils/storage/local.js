export const set = (key, value) => {
  return localStorage.setItem(key, value);
};

export const get = (key) => {
  return localStorage.getItem(key);
};

export const remove = (key) => {
  return localStorage.removeItem(key);
};

export const clear = () => {
  return localStorage.clear();
};
