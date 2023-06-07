const header = {
  logo: "Easy-Peasy",
  links: {
    creator: [
      {
        id: 1,
        media: "Linkedin",
        url: "https://www.linkedin.com/in/muhahsan",
      },
    ],
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
  title: "",
  description: "",
};

const footer = {
  since:
    2023 < new Date(Date.now()).getFullYear()
      ? `2023 - ${new Date(Date.now()).getFullYear()}`
      : `2023`,
};

export { header, layout, footer };
