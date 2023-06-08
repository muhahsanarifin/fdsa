const header = {
  logo: "Easy-Peasy",
  links: {
    easy_peasy: [
      {
        id: 1,
        media: "Doc",
        url: "https://easy-peasy.dev/docs/introduction",
      },
      {
        id: 2,
        media: "Website",
        url: "https://easy-peasy.dev",
      },
    ],
  },
};

const layout = {
  title: "Curious about Easy-Peasy!",
  description: "Easy Peasy is an abstraction of Redux.",
};

const footer = {
  since:
    2023 < new Date(Date.now()).getFullYear()
      ? `2023 - ${new Date(Date.now()).getFullYear()}`
      : `2023`,
  link: {
    creator: "https://www.linkedin.com/in/muhahsan",
  },
};

export { header, layout, footer };
