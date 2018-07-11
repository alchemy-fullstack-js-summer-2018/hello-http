const { parse } = require('url');
const sendFacts = {};

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        // console.log('***CONSOLE***', parts);
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