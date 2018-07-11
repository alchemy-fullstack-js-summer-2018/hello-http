const { parse } = require('url');
const interestingFact = require('./InterestingFact');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('Hello World');
        res.end();
    }

    else if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        const message = url.query.custom || '';
        res.setHeader('Content-Type', 'text/html');
        res.write(`<p>Happy birthday, <strong>${name}!</strong> ${message}</p>`);
        res.end();
    }

    else if(parts[0] === 'fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(interestingFact()));
    }

    
};