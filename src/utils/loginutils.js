export function checkIfloggedIn() {
    let user = window.localStorage.getItem("user")
    if(user) {
        user = JSON.parse(user)
        return user.loggedIn;
    }
    return false;
}

export function checkIfUserExists(value) {
    return value.toLowerCase() === (window.localStorage.getItem("user") && window.localStorage.getItem("user").toLowerCase())
}

export function setRegisterUserDetails(user) {
    localStorage.setItem("user", JSON.stringify(user))
}