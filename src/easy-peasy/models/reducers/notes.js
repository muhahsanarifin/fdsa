// Reference: https://easy-peasy.dev/docs/api/reducer.html

import { reducer } from "easy-peasy";
import types from "../types";

const initState = {
  get: {
    data: [],
    isEmpty: true,
  },
  data: {
    currentPosts: [],
    isEmpty: true,
    meta: {
      currentPage: null,
      totalPage: null,
      totalPost: null,
    }
  },
};

const notesReducer = reducer((state = initState, action) => {
  const {
    addNotes,
    deleteNote,
    deleteNotes,
    editNote,
    getNotes,
    editNoteCurrentPost,
  } = types;
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
        get: action.payload,
      };
    case editNote:
      return {
        ...state,
        get: {
          data: action.payload.data,
          isEmpty: false,
        },
      };
    case getNotes:
      return {
        ...state,
        data: action.payload,
      };
    case editNoteCurrentPost:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
});

export default notesReducer;
