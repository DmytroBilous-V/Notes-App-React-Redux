import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { notesSelectors, notesOperations } from '../../redux/notes';
import ActiveNotes from './ActiveNotesView';


const mapDispatchToProps = {
    removeNote: notesOperations.actions.removeNote,
    toArchiveNote: notesOperations.actions.toArchiveNote,
};

const mapStateToProps = (state) => ({
    activeNotes: notesSelectors.getActiveNotes(state),
});

const ActiveNotesView = compose(
    connect (
        mapStateToProps,
        mapDispatchToProps
    ),
    withHandlers({
        handleDeleteNote: (props) => (id) => {
            props.removeNote(id)
        },
        handleToArchive: (props) => (id) => {
            alert(id)
            props.toArchiveNote(id)
        }
        
    }),
);
export default ActiveNotesView(ActiveNotes);