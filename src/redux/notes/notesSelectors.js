import { createSelector } from 'reselect';

const notesList = state => state.notesList.notesList;

export const getCategoryList = createSelector(
    notesList,
    (state) => {
        let resultItems = [];
        // let result = [];
        state.map(el => {
            if (el.category.name === 'Task') {
                if (resultItems["tasks"] === undefined) {
                    resultItems["tasks"] = {
                        name: 'Task',
                        icon: '',
                        activeCount: 0,
                        unactiveCount: 0,
                        items: []
                    }
                }
                resultItems["tasks"].icon = el.category.icon;
                resultItems["tasks"].items.push(el);
                (!el.status) ? resultItems["tasks"].unactiveCount++
                : resultItems["tasks"].activeCount++;
            } else if (el.category.name === 'Idea') {
                if (resultItems['ideas'] === undefined) {
                    resultItems['ideas'] = {
                        name: 'Idea',
                        activeCount: 0,
                        unactiveCount: 0,
                        items: []
                    }
                }
                resultItems['ideas'].icon = el.category.icon;
                resultItems['ideas'].items.push(el);
                (!el.status) ? resultItems['ideas'].unactiveCount += 1
                : resultItems['ideas'].activeCount += 1;
            } else {
                if (resultItems['thought'] === undefined) {
                    resultItems['thought'] = {
                        name: 'Random Thought',
                        activeCount: 0,
                        unactiveCount: 0,
                        items: []
                    }
                }
                resultItems['thought'].icon = el.category.icon;
                resultItems['thought'].items.push(el);
                (!el.status) ? resultItems['thought'].unactiveCount += 1
                : resultItems['thought'].activeCount += 1; 
            }
        });
    return resultItems;
    }
);

export const getActiveNotes = createSelector(
    notesList,
    state => state.filter(t => !t.status)
);

export const getNotesList = createSelector(
    notesList,
    state => state
);

export const getArchivedNotes = createSelector(
    notesList,
    state => state.filter(t => t.status)
);
