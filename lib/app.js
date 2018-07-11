const { parse } = require('url');
const facts = require('./httpFacts');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    const custom = url.query.custom || '';

    if(parts[0] === 'happy-birthday') {
        let message = `Happy birthday, ${parts[1] ? parts[1] : 'Stranger'}!${custom}`;
        res.setHeader('Content-Type', 'text/html');
        res.end(message);
    }

    else if(parts[0] === 'facts') {
        let message = '';
    }

    else {
        res.statusCode = 404;
        res.end('Not found');
    }
};