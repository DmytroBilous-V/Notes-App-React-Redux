import React from 'react';
import { routes } from '../router';
import { Link } from 'react-router-dom';


function Notes ({ Lister, handleInputChange, handleAddNote, value, handleDeleteNote, handleActiveFilter }) {
    return (
        <div>
            <header>
                header
                <input
                    type="text" 
                    onChange={(e) => handleInputChange(e.target.value)}
                    value={value}
                />
                <button
                    type="button"
                    onClick={handleAddNote}
                >
                    Add
                </button>
                <button
                    type="button"
                    onClick={handleActiveFilter}
                >
                    Active
                </button>
            </header>
                {Lister.map((note, index) => {
                return <div key={note.id}>
                            <span>{note.name}</span>
                            <span>{note.id}</span>
                            <button
                            type="button"
                            value={note.id}
                            onClick={(e) => handleDeleteNote(note.id)}
                            >
                                Remove
                            </button>
                        </div>
            })}

            <footer>
                footer
                <Link to={routes.index}>Home</Link>
                <Link to={routes.active}>Active</Link>
                <Link to={routes.archived}>Archived</Link>
            </footer>
        </div>
    )
}

export default Notes;