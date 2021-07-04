import { combineReducers } from 'redux';
import notesList from './notes';
import notes from './notes';

export default combineReducers({
    notesList,
    notes
});
