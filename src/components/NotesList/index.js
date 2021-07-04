import React from 'react';
// import NoteItemButton from '../NoteItemButton/NoteItemButton';
import BlockButtons from './components/BlockButtons';


function NotesList ({ toggle, notes, deleteNote, addToArchiveNote, addToActiveNote }) {

        return (
            <div>
            {notes.map((note, index) => {  
                return (<div key={note.id} className="active-list_item">
                            <span className={note.category.icon}></span>
                            <input type="text" value={note.name} readOnly={true} />
                            <span>{note.created}</span>
                            <input value={note.category.name} readOnly={true} />
                            <input value={note.content} readOnly={true} />
                            <span>{note.dates}</span>
                            <BlockButtons
                                id={note.id}
                                toggle={toggle}
                                deleteNote={deleteNote}
                                archiveNote={addToArchiveNote}
                                activeNote={addToActiveNote}
                            />
                        </div>)
            })
            }
            </div>
        )
}

export default NotesList;