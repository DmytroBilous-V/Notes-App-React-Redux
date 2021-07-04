import React from 'react';
import NoteItemButton from '../../../NoteItemButton/NoteItemButton';

function BlockButtons({ toggle, id, deleteNote, archiveNote, activeNote }) {
    if (toggle) {
        return (
            <div className="active-list_item__btn-block">
                <NoteItemButton
                    buttonClass="fas fa-edit"
                    value={id}
                    handleAction={deleteNote}
                />
                <NoteItemButton
                    buttonClass="fas fa-download"
                    value={id}
                    handleAction={archiveNote}
                />
                <NoteItemButton
                    buttonClass="far fa-trash-alt"
                    value={id}
                    handleAction={deleteNote}
                />
            </div>
        )
    } else {
        return (
            <div className="active-list_item__btn-block">
                <NoteItemButton
                    buttonClass="fas fa-upload"
                    value={id}
                    handleAction={activeNote}
                />
                <NoteItemButton
                    buttonClass="far fa-trash-alt"
                    value={id}
                    handleAction={deleteNote}
                />
            </div>
        )
    }
}

export default BlockButtons;