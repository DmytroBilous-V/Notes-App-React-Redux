import { createAction } from "redux-actions";

export const addNote = createAction('notes/ADD_TODO');
export const activeNotes = createAction('notes/FILTER_ACTIVE');
export const removeNote = createAction('notes/REMOVE_NOTE');
export const toArchiveNote = createAction('notes/TO_ARCHIVE_NOTE');
export const toActiveNote = createAction('notes/TO_ACTIVE_NOTE');
