import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { uuid } from 'uuidv4';
import { notesSelectors, notesOperations } from '../../redux/notes';
import Notes from './NotesView';


const mapDispatchToProps = {
    addNote: notesOperations.actions.addNote,
    activeNotes: notesOperations.actions.activeNotes,
    removeNote: notesOperations.actions.removeNote,
};

const mapStateToProps = (state) => ({
    Lister: notesSelectors.getNotesList(state),
});

const NotesView = compose(
    connect (
        mapStateToProps,
        mapDispatchToProps
    ),
    withState('value', 'handleInputChange', ''),
    withHandlers({
        handleAddNote: (props) => () => {
            const note = {
                id: uuid(),
                name: props.value,
                text: props.value,
                status: false,
            };
            props.addNote(note);
            props.handleInputChange('');
        },
        handleActiveFilter: (props) => () => {
            console.log(props)
            props.activeNotes()
        },
        handleDeleteNote: (props) => (id) => {
            props.removeNote(id)
        }
        
    }),
);
export default NotesView(Notes);