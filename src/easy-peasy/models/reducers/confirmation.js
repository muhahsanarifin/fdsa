import { reducer } from "easy-peasy";
import types from "../types";

const initState = {
  edit: {
    data: {},
    isEmpty: true,
  },
};

const confirmationReducer = reducer((state = initState, action) => {
  console.log(action)
  const { confirmationEdit } = types;
  switch (action.type) {
    case confirmationEdit:
      return {
        ...state,
        edit: action.payload
      };
    default:
      return state;
  }
});

export default confirmationReducer;
