// Reference: • https://easy-peasy.dev/docs/api/action.html, • https://easy-peasy.dev/docs/api/debug.html

// import { action, debug } from "easy-peasy";

// const model = {
//   notes: [],
//   addNote: action((state, payload) => {
//     console.log("Debug state: ", debug(state));
//     state.notes.push(payload);
//   }),
// };

// const confirmation = {
//   data: {
//     id: "",
//     author: "",
//     publish: "",
//     link: "",
//     description: "",
//     idx: "",
//   },
//   edit: action(
//     (state, payload) => {
//       return {
//         ...state,
//         data: { ...state.data, ...payload },
//       };
//     },
//     {
//       immer: false,
//     }
//   ),
// };

// const model = { confirmation };

// export default model;
