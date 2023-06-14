import types from "./types";

const addNotesAction = (data) => ({
  type: types.addNotes,
  payload: { data },
});

const addNotesThunk = (payload) => {
  return async (dispatch) => {
    dispatch(addNotesAction(payload));
  };
};

const actions = {
  addNotesThunk,
};

export default actions;

