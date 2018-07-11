const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    let facts = [
        { fact: 'http stands for Hypertext Transfer Protocol' },
        { fact: 'http is stateless, so no data is kept by the server' },
        { fact: 'http is a protocol for transferring documents like HTML' }
    ];

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
        let random = Math.floor(Math.random() * facts.length);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(facts[random]));
    }
    else {
        res.write('hello world');
        res.end();
    }
};