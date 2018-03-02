import { SiteConfig } from "../config";

const API_URL_NEWS = `${SiteConfig.apiUrl}/news`;
const API_URL_SERVERS = `${SiteConfig.apiUrl}/servers`;
const API_URL_USER_CREATE = `${SiteConfig.apiUrl}/user/create`;
const API_URL_USER_AUTH = `${SiteConfig.apiUrl}/user/auth`;

// const randomDelay = func => {
//     const delay = 250 + Math.floor(Math.random() * 1000);
//     setTimeout(func, delay);
// };

export const fetchServers = () =>
    fetch(API_URL_SERVERS)
        .then((response) => response.json())
        .then((json) => json.servers)
        .catch((ex) => {
            throw new Error(`Error: ${ex}`);
        })

export const signIn = (username, password) =>
    fetch(API_URL_USER_AUTH, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(json => {
        if (json.status === 'ok') {
            return {
                token: json.token,
                user: json.user
            };
        } else {
            throw new Error(json.message);
        }
    });

export const signOut = token =>
    fetch(API_URL_USER_AUTH, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorised");
            } else {
                const { message } = response.json();
                throw new Error(message);
            }
        }
    });

export const signUp = signUpDetails =>
    fetch(API_URL_USER_CREATE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpDetails),
    })
    .then(response => response.json())
    .then(json => {
        if (json.status !== 'ok') {
            throw new Error(json.message);
        }
    });

export const fetchNewsItems = (skip, take) =>
    fetch(`${API_URL_NEWS}?skip=${skip}&take=${take}`)
    .then(response => response.json())
    .then(json => {
        if (json.status === 'ok') {
            return json.result;
        } else {
            throw new Error(json.message);
        }
    });

export const deleteNewsItem = (token, id) =>
    fetch(API_URL_NEWS, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.json().message)
        }
    });

export const createNewsItem = (token, title, html) =>
    fetch(API_URL_NEWS, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, html }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.json().message)
        }
    });

export const editNewsItem = (token, id, title, html, published) =>
    fetch(API_URL_NEWS, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, title, html, published }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.json().message)
        }
    });
