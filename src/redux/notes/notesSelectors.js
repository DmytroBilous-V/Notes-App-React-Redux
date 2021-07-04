import { createSelector } from 'reselect';

const notesList = state => state.notesList.notesList;

export const getActiveNotes = createSelector(
    notesList,
    state => state.filter(t => !t.status)
);

export const getNotesList = createSelector(
    notesList,
    state => state
);

export const getArchivedNotes = createSelector(
    notesList,
    state => state.filter(t => t.status)
);
