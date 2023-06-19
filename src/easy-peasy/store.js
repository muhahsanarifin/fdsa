// Reference: • https://easy-peasy.dev/docs/api/persist.html, • https://easy-peasy.dev/docs/api/create-store.html

import { createStore, persist } from "easy-peasy";
import notesReducer from "./models/reducers/notes";
import confirmationReducer from "./models/reducers/confirmation";
// import model from "./model";

const store = createStore(
  persist(
    { notes: notesReducer, confirmation: confirmationReducer },
    { storage: "localStorage" },
    { version: 1 }
  )
);

// import model from "./model";
// const store = createStore(
//   persist(model, { storage: "localStorage" }, { version: 1 })
// );

export default store;
