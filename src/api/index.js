const API_URL = "https://api.openrct2.io";
const API_URL_SERVERS = `${API_URL}/servers`;

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
        setTimeout(() => {
            if (username.toLowerCase() === 'intelorca' && password === 'donkey') {
                resolve({id: 1, name: 'IntelOrca'});
            } else {
                reject({});
            }
        }, 250);
    });
