export const body = (body) => {
  const { username, email, password, passwordConfirmation } = body;

  if (username === "") return "Required username.";
  if (email === "") return "Required email.";
  if (password === "") return "Required password.";
  if (passwordConfirmation === "") return "Required password confirmation.";
  if (password !== passwordConfirmation) return "Password does not match";
};
