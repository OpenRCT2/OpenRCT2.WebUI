const API_URL = "https://api.openrct2.io";
const API_URL_SERVERS = `${API_URL}/servers`;

const randomDelay = func => {
    const delay = 250 + Math.floor(Math.random() * 1000);
    setTimeout(func, delay);
};

export const fetchServers = () =>
    fetch(API_URL_SERVERS)
        .then((response) => response.json())
        .then((json) => json.servers)
        .catch((ex) => {
            throw new Error(`Error: ${ex}`);
        })

export const signIn = (username, password) =>
    // TODO replace with real API end point
    new Promise((resolve, reject) => {
        randomDelay(() => {
            if (username.toLowerCase() === 'intelorca' && password === 'donkey') {
                resolve({id: 1, name: 'IntelOrca'});
            } else {
                reject({});
            }
        });
    });

export const signOut = () =>
    // TODO replace with real API end point
    new Promise((resolve, reject) => {
        randomDelay(() => {
            resolve({});
        });
    });

export const signUp = signUpDetails =>
    // TODO replace with real API end point
    new Promise((resolve, reject) => {
        randomDelay(() => {
            if (signUpDetails.username === 'chris') {
                reject({ message: 'Username already taken' });
            } else {
                resolve();
            }
        });
    });
