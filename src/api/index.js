const API_URL = "https://api.openrct2.website";
const API_URL_SERVERS = `${API_URL}/servers`;
const API_URL_LOGIN = `${API_URL}/user/login`;
const API_URL_LOGOUT = `${API_URL}/user/logout`;

export const fetchServers = () =>
    fetch(API_URL_SERVERS)
        .then((response) => response.json())
        .then((json) => json.servers)
        .catch((ex) => {
            throw new Error(`Error: ${ex}`);
        })

export const login = (user, password) =>
    fetch(API_URL_LOGIN, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ user, password })})
        .then((response) => response.json())
        .then((json) => json)
        .catch((ex) => {
            throw new Error(`Error: ${ex}`);
        })

export const logout = (token) =>
    fetch(API_URL_LOGOUT, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ token })})
        .then((response) => response.json())
        .then((json) => json)
        .catch((ex) => {
            throw new Error(`Error: ${ex}`);
        })
