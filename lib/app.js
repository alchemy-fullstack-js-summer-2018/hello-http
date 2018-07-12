const { parse } = require('url');
const randFact = require('./randomFact');
const html = require('./birthdayMessage');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        const custom = url.query.custom || '';
        res.setHeader('Content-Type', 'text/html');
        res.end(html(name, custom));
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