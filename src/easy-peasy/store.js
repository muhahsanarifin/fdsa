// Reference: • https://easy-peasy.dev/docs/api/persist.html, • https://easy-peasy.dev/docs/api/create-store.html

import { createStore, persist } from "easy-peasy";
import notesReducer from "./models/reducers";

const store = createStore(
  persist({ notes: notesReducer }, { storage: "localStorage" })
);

// import model from "./model";
// const store = createStore(
//   persist(model, { storage: "localStorage" }, { version: 1 })
// );

export default store;
