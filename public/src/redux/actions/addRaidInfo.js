export function addUsername(username) {
    return {
        type: "ADD_USERNAME",
        username
    }
}

export function addClass(Gwclass) {
    return {
        type: "ADD_CLASS",
        Gwclass
    }
}

export function addRole(role) {
    return {
        type: "ADD_ROLE",
        role
    }
}