const { parse } = require('url');
const randomFact = require('./randomFact');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.setHeader('Content-Type', 'text/html');
        res.write('Hello');
        res.end();
    }
    else if(parts[0] === 'happy-birthday') {
        let person = parts[1] || 'Stranger';
        const custom = url.query.custom || '';
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<p>Happy Birthday <strong>${person}!</strong>${custom}</p>`
        );
        res.end();
    }
    else if(parts[0] === 'facts') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(randomFact()));
    }
    else {
        res.statusCode = 404;
        res.write('Sorry that page does not exist');
        res.end();
    }
};