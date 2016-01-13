export function addCalendarEvent(info) {
    return {
        type: "ADD_CALENDAR_EVENT",
        info
    }
}

export function removeCharacterInfo(index) {
    return {
        type: "REMOVE_CALENDAR_EVENT",
        index
    }
}