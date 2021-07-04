export function helperDeleteForId(state, id) {
    const index = state.findIndex(item => item.id === id);
    state.splice(index, 1);
    return state;
};
