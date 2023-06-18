export const clibBoard = (link) => {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link);

      return resolve(link);
    }
    reject(new Error("Something wrong!"));
  });
};
