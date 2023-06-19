import types from "./types";

const addNotesAction = (data) => ({
  type: types.addNotes,
  payload: { data },
});

const deleteNotesAction = (data) => ({
  type: types.deleteNotes,
  payload: { data },
});

const deleteNoteAction = (data) => ({
  type: types.deleteNote,
  payload: data,
});

const editNoteAction = (data) => ({
  type: types.editNote,
  payload: { data },
});

const confirmationEditNoteAction = (data) => ({
  type: types.confirmationEdit,
  payload: data,
});

const addNotesThunk = (payload) => {
  return async (dispatch) => {
    dispatch(addNotesAction(payload));
  };
};

const deleteNotesThunk = (payload) => {
  return async (dispatch) => {
    dispatch(deleteNotesAction(payload));
  };
};

const deleteNoteThunk = (payload) => {
  return async (dispatch) => {
    dispatch(deleteNoteAction(payload));
  };
};

const editNoteThunk = (payload) => {
  return async (dispatch) => {
    dispatch(editNoteAction(payload));
  };
};

const confirmationEditNoteThunk = (payload) => {
  return async (dispatch) => {
    dispatch(confirmationEditNoteAction(payload));
  };
};

const actions = {
  addNotesThunk,
  deleteNotesThunk,
  deleteNoteThunk,
  editNoteThunk,
  confirmationEditNoteThunk,
};

export default actions;
