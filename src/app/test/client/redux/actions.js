export function changeClientName(name) {
    return {
        type: 'CLIENT_NAME_CHANGED',
        name: name
    }
}