import React from 'react';
import { routes } from '../router';
import { Link } from 'react-router-dom';
import NotesList from '../../components/NotesList';


function ActiveNotes ({ activeNotes, handleDeleteNote, handleToArchive }) {
    return (
        <div>
            <header>
                header
            </header>
                
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