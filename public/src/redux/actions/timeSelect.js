export function selectDay(day) {
    return {
        type: "SELECT_DAY",
        day
    }
}

export function startinHour(hour) {
    return {
        type: "STARTING_HOUR",
        hour
    }
}

export function endingHout(hour) {
    return {
        type: "ENDING_HOUR",
        hour
    }
}

export function addTime(time) {
    return {
        type: "ADD_TIME",
        time
    }
}

export function removeTime(index) {
    return {
        type: "REMOVE_TIME",
        index
    }
}