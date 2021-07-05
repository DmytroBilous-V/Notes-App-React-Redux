export function helperDeleteForId(state, id) {
    const index = state.findIndex(item => item.id === id);
    state.splice(index, 1);
    return state;
};

export function helperToArr(data) {
    let result = [];
    for (let item in data) {
        result.push(data[item]);
    }
    return result;
}
