export const fetchServers = () =>
  fetch('https://api.openrct2.website/servers')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log('parsed json', json);
    return json;
  }).catch(function(ex) {
    console.log('parsing failed', ex);
    throw new Error(`Error: ${ex}`);
  })
