import React from 'react';

function NoteItemButton({ buttonClass, handleAction, value }) {
    return (
        <button
            className={buttonClass}
            value={value}
            onClick={(e) => handleAction(value)}
        >
        </button>
    )
}

export default NoteItemButton;
