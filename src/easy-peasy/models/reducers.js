// Reference: https://easy-peasy.dev/docs/api/reducer.html

import { reducer } from "easy-peasy";
import types from "./types";

const initState = {
  get: {
    data: [],
    isEmpty: true,
  },
};

const notesReducer = reducer((state = initState, action) => {
  switch (action.type) {
    case types.addNotes:
      return {
        ...state,
        get: {
          data: action.payload.data,
          isEmpty: false,
        },
      };
    default:
      return state;
  }
});

export default notesReducer;
