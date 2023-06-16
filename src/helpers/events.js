export const clibBoard = async (link) => {
  try {
    navigator.clipboard.writeText(link);
    return link;
  } catch (error) {
    return error;
  }
};
