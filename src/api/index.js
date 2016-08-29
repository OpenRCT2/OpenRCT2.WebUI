export const fetchServers = () =>
  fetch('https://api.openrct2.website/servers')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.servers;
  }).catch(function(ex) {
    throw new Error(`Error: ${ex}`);
  })
