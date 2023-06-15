export const body = (body) => {
  const { author, publish, link, description } = body;

  if (author === "") return "Required author.";
  if (publish === "") return "Required publish.";
  if (link === "") return "Required link.";
  if (description === "") return "Required description.";
};

// Active save
export const save = (body) => {
  return Object.values(body).some((currentValue) => currentValue === "");
};

// Active clear
export const clear = (body) => {
  return Object.values(body).some((currentValue) => currentValue != "");
};
