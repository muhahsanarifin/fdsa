export const Id = (data) => {
  const id = data.map((el) => el.id);
  const foundValueNewId = id.findLast((el) => el);
  return foundValueNewId;
};
