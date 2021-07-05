import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { uuid } from 'uuidv4';
import { notesSelectors, notesOperations } from '../../redux/notes';
import Notes from './NotesView';


const mapDispatchToProps = {
    addNote: notesOperations.actions.addNote,
};

const mapStateToProps = (state) => ({
    list: notesSelectors.getNotesList(state),
    categoryList: notesSelectors.getCategoryList(state),
});

const NotesView = compose(
    connect (
        mapStateToProps,
        mapDispatchToProps
    ),
    withState('value', 'handleInputChange', ''),
    withState('content', 'handleContentChange', ''),
    withState('select', 'handleCategoryChange', 'Task'),
    withHandlers({
        handleAddNote: (props) => () => {
            const note = {
                id: uuid(),
                name: props.value,
                created: "",
                category: {
                    name: props.select,
                    icon: "fas fa-cogs"
                },
                content: props.content,
                dates: "",
                status: false,
            };
            props.addNote(note);
            props.handleInputChange('');
            props.handleContentChange('');
        }
    }),
);
export default NotesView(Notes);