import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});

// const BASE_URL = 'http://localhost:3002/api/auth'
const BASE_URL = (process.env.NODE_ENV !== 'development')
? '/api/auth'
: '//localhost:3002/api/auth';

export const userService = {
    saveUser,
    login
}

function saveUser(user) {
    console.log("saveUser -> user", user)
    return axios.put(`${BASE_URL}/add`, user)
}
function login(userCred) {
    console.log("saveUser -> user", userCred)
    return axios.post(`${BASE_URL}/login`, userCred)
}