const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);

const PORT = 2500;

server.listen(PORT, () => {
    console.log('Server running on', server.address().port);
});