import { handleActions } from "redux-actions";
import * as actions from './notesActions';
import { INITIAL_STATE } from '../../store/initialState';
import { helperDeleteForId } from '../../utils/helpersFunctions';


const initialState = {
    notesList: INITIAL_STATE,
};

export default handleActions({
    [actions.addNote]: (state, action) => ({
        ...state,
        notesList: state.notesList.concat(action.payload)
    }),
    [actions.activeNotes]: (state) => ({
        ...state,
        notesList: state.notesList.filter(t => t.status)
    }),
    [actions.removeNote]: (state, action) => ({
        ...state,
        notesList: [].concat(helperDeleteForId(state.notesList, action.payload))
    }),
    [actions.toArchiveNote]: (state, action) => ({
        ...state,
        notesList: state.notesList.map(el => {
            if (el.id === action.payload) {
                el.status = true;
                return el;
            }
            return el;
        })
    }),
    [actions.toActiveNote]: (state, action) => ({
        ...state,
        notesList: state.notesList.map(el => {
            if (el.id === action.payload) {
                el.status = false;
                return el;
            }
            return el;
        })
    })
}, initialState);
