const { parse } = require('url');
const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('waz up world');
        res.end();
    }
    else if(req.method === 'GET' && parts[0] === 'happy-birthday') {
        res.write('Happy Birthday Stranger!');
        res.end();
    }

};