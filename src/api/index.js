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

export const fetchNewsItems = (skip, take) =>
    // TODO replace with real API end point
    new Promise((resolve, reject) => {
        randomDelay(() => {
            const items = [
                {
                    title: "OpenRCT2 0.1.2",
                    date: "21st January",
                    author: "IntelOrca",
                    content: '<p>Mauris at tortor tortor. Nunc quis consectetur enim. Ut dignissim turpis ut elit finibus, id ullamcorper libero finibus. Nulla vel pretium tortor. Ut maximus, ante id convallis vestibulum, ipsum quam auctor lacus, ac congue eros sapien eget dui. Vestibulum varius et dui ut pellentesque. Vivamus vitae dolor odio.</p><p>Suspendisse vitae dui sapien. Sed venenatis gravida ante sit amet vulputate. Nam aliquet felis et tellus consequat vestibulum. Maecenas faucibus in neque non congue. Proin sed elit mauris. Nullam sed facilisis dui. In facilisis magna id odio efficitur dictum. Vivamus auctor ullamcorper dictum. Cras aliquam nisi et mauris fermentum commodo.</p><a href="https://github.com/OpenRCT2/OpenRCT2/releases" class="card-link">Download</a><a href="https://github.com/OpenRCT2/OpenRCT2/releases" class="card-link">Changelog</a><a href="https://github.com/OpenRCT2/OpenRCT2/issues" class="card-link">Report bugs</a>'
                },
                {
                    title: 'Sed maximus ante vitae',
                    date: '10th November 2017',
                    author: 'Janisozaur',
                    content: '<p>Pellentesque a lorem gravida, vestibulum dui fermentum, lacinia nisl. Cras feugiat, nisi sit amet vestibulum pharetra, urna est varius leo, quis volutpat mi purus ac elit. Integer rhoncus elementum sem. Praesent vel diam blandit, mattis est facilisis, porttitor nibh. In porttitor nisi volutpat consectetur ornare. Nunc augue libero, pretium quis lectus vel, sodales tristique sapien. Sed non neque neque. Integer at sodales nisl. Nullam elementum dapibus massa, nec consectetur ipsum fringilla sed. Nam varius maximus augue, sed pretium mi pretium eu. Nullam mi ipsum, feugiat quis sem placerat, faucibus tincidunt nisi. Aenean non lorem massa. Proin ornare diam ex, ut tincidunt nulla gravida ac.</p><a href="/" class="card-link">Venenatis</a><a href="/" class="card-link">Blandit Feugiat Tortor</a>'
                }
            ];
            resolve(items.slice(skip, skip + take));
        });
    });