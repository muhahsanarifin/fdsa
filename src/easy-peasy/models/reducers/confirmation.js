import { reducer } from "easy-peasy";
import types from "../types";

const initState = {
  edit: {
    data: {},
    isEmpty: true,
  },
};

const confirmationReducer = reducer((state = initState, action) => {
  const { confirmationEdit } = types;
  switch (action.type) {
    case confirmationEdit:
      return {
        ...state,
        edit: {
          data: action.payload.data,
          isEmpty: false,
        },
      };
    default:
      return state;
  }
});

export default confirmationReducer;
