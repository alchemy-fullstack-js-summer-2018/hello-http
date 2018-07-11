const { parse } = require('url');
const sendFacts = {};

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
        const facts = [
            'HTTP is the foundation of data communication for the internet',
            'HTTP is the protocol for exchanging structured text and logical links',
            'HTTP has several methods for exchanging information'
        ];
        res.setHeader('Content-Type', 'application/json');
        let randomNum = Math.floor(Math.random() * facts.length);
        sendFacts.fact = facts[randomNum];
        res.end(JSON.stringify(sendFacts));
    }
    else {
        res.statusCode = 404;
        res.write('Sorry that page does not exist');
        res.end();
    }
};