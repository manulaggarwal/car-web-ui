export function checkIfloggedIn() {
    return window.localStorage.getItem("user")? true:false;
}

export function checkIfUserExists(value) {
    return value.toLowerCase() === (window.localStorage.getItem("user") && window.localStorage.getItem("user").toLowerCase())
}