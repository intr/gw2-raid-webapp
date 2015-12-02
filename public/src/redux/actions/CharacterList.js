export function addCharacterInfo(info) {
    return {
        type: "ADD_CHARACTER_INFO",
        info
    }
}

export function removeCharacterInfo(index) {
    return {
        type: "REMOVE_CHARACTER_INFO",
        index
    }
}