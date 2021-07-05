import React from 'react';
import { routes } from '../router';
import { Link } from 'react-router-dom';
import NotesList from '../../components/NotesList';
import Header from '../../layout/Header';


function ActiveNotes ({ activeNotes, handleDeleteNote, handleToArchive }) {
    return (
        <div>
            <Header
                headerClass='active_header'
                titles={["Name", "Created", "Category", "Content", "Dates"]}
            />
            <NotesList
                toggle={true}
                notes={activeNotes}
                deleteNote={handleDeleteNote}
                addToArchiveNote={handleToArchive}
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

export default ActiveNotes;