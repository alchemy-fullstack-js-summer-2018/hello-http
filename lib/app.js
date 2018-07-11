const { parse } = require('url');
const sendFacts = {};

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const person = parts[1] || 'Stranger';
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
        res.setHeader('Content-Type', 'application/json');
        let randomNum = Math.floor(Math.random() * facts.length);
        sendFacts.fact = facts[randomNum];
        res.end(JSON.stringify(sendFacts));
    }
};