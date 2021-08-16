import axios from "axios"

const ordersBaseURL = "http://localhost:8080/orders/"
const usersBaseURL = "http://localhost:8080/users/"
const loginBaseURL = "http://localhost:4000/login/"

export function getOrders(successCB) {
    axios.get(ordersBaseURL)
        .then(successCB)
}

export function updateStatus(id, status, successCB) {
    axios.patch(ordersBaseURL + id, { status: status })
        .then(successCB)
}

export function signInUser(email, password, successCB) {
    const user = {email, password}
    axios.post(loginBaseURL, user)
        .then(successCB)
}