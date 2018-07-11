const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const person = url.query.person || 'Stranger';
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html><body><p>Happy Birthday <strong>${person}!</strong></p></body></html>`
        );
        res.end();
    }
    else if(parts[0] === 'facts') {
        const facts = [
            'HTTP is cool',
            'HTTP is literally the coolest',
            'HTTP is jams bruh'
        ];
        res.setHeader('Content-Type', 'text/html');
        let randomNum = Math.floor(Math.random() * facts.length);
        res.write(facts[randomNum]);
        res.end();
    }
};