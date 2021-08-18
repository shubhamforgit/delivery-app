import axios from "axios"

const ordersBaseURL = "http://localhost:8080/orders/"
const usersBaseURL = "http://localhost:4000/users/"
const loginBaseURL = "https://food-app-timesinternet.herokuapp.com/api/delivery_boy/login/"


export function getOrders(successCB, errorCB) {
    axios.get(ordersBaseURL)
        .then(successCB)
        .catch(errorCB)
}

export function updateStatus(id, status, successCB, errorCB) {
    axios.patch(ordersBaseURL + id, { status: status })
        .then(successCB)
        .catch(errorCB)
}

export function signInUser(email, password, successCB, errorCB) {
    const user = {email, password}
    axios.post(loginBaseURL, user)
        .then(successCB)
        .catch(errorCB)
}