const initialState = {
    name: 'redux initial name'
};

export function client(state = initialState, action) {
    if (action.type === 'CLIENT_NAME_CHANGED')
        return Object.assign({}, state, {name: action.name});
    return state;
}