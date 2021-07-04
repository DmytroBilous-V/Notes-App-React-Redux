import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { notesSelectors, notesOperations } from '../../redux/notes';
import ArchivedNotes from './ArchivedNotesView';


const mapDispatchToProps = {
    removeNote: notesOperations.actions.removeNote,
    toActiveNote: notesOperations.actions.toActiveNote,
};

const mapStateToProps = (state) => ({
    archivedNotes: notesSelectors.getArchivedNotes(state),
});

const ArchivedNotesView = compose(
    connect (
        mapStateToProps,
        mapDispatchToProps
    ),
    withHandlers({
        handleDeleteNote: (props) => (id) => {
            props.removeNote(id);
        },
        handleToActive: (props) => (id) => {
            props.toActiveNote(id);
        }
    }),
);
export default ArchivedNotesView(ArchivedNotes);