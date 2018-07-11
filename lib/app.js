const { parse } = require('url');
const randomFacts = require('./httpFacts');

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
        let fact = randomFacts();
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(fact.chosenFact));
    }

    else {
        res.statusCode = 404;
        res.end('Not found');
    }
};