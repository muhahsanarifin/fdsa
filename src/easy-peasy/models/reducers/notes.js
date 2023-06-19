// Reference: https://easy-peasy.dev/docs/api/reducer.html

import { reducer } from "easy-peasy";
import types from "../types";

const initState = {
  get: {
    data: [],
    isEmpty: true,
  },
};

const notesReducer = reducer((state = initState, action) => {
  const { addNotes, deleteNote, deleteNotes, editNote } = types;
  switch (action.type) {
    case addNotes:
      return {
        ...state,
        get: {
          data: action.payload.data,
          isEmpty: false,
        },
      };
    case deleteNotes:
      return {
        ...state,
        get: {
          data: action.payload.data,
          isEmpty: true,
        },
      };
    case deleteNote:
      return {
        ...state,
        get: action.payload.data,
      };
    case editNote:
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
