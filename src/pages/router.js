import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NotesView from './Notes/NotesContainer';
import ActiveNotesView from './ActiveNotes/ActiveNotesContainer';
import ArchivedNotesView from './ArchivedNotes/ArchivedNotesContainer';


export const routes = {
    index: '/',
    active: '/active',
    archived: '/archived',
};

function Router() {
    return (
        <BrowserRouter>
            <Route path={routes.index} component={NotesView} />
            <Route path={routes.active} component={ActiveNotesView} />
            <Route path={routes.archived} component={ArchivedNotesView} />
        </BrowserRouter>
    );
}


export default Router;
