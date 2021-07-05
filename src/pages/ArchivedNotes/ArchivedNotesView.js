import React from 'react';
import { routes } from '../router';
import { Link } from 'react-router-dom';
import NotesList from '../../components/NotesList';
import Header from '../../layout/Header';


function ArchivedNotes ({ archivedNotes, handleDeleteNote, handleToActive }) {
    return (
        <div>
            <Header
                headerClass='active_header'
                titles={["Name", "Created", "Category", "Content", "Dates"]}
            />
            <NotesList
                notes={archivedNotes}
                deleteNote={handleDeleteNote}
                addToActiveNote={handleToActive}
            />
            <footer>
                footer
                <Link to={routes.index}>Home</Link>
                <Link to={routes.active}>Active</Link>
                <Link to={routes.archived}>Archived</Link>
            </footer>
        </div>
    )
}

export default ArchivedNotes;