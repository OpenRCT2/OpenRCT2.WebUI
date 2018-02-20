const API_URL = "https://api.openrct2.io";
const API_URL_SERVERS = `${API_URL}/servers`;

export const fetchServers = () =>
    fetch(API_URL_SERVERS)
        .then((response) => response.json())
        .then((json) => json.servers)
        .catch((ex) => {
            throw new Error(`Error: ${ex}`);
        })
