const { parse } = require('url');
const randFact = require('./randomFact');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        if(url.query.custom) {
            let custom = url.query.custom;
            let message = `<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`;
            res.setHeader('Content-Type', 'text/html');
            res.end(message);
        }
        else {
            let message = `<html><body><p>Happy Birthday <strong>${name}!</strong></p></body></html>`;
            res.setHeader('Content-Type', 'text/html');
            res.end(message);
        }
    }
    else if(parts[0] === 'fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(randFact()));
    }
    else {
        res.write('hello world');
        res.end();
    }
};