const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('hello world');
        res.end();
    }

    else if(parts[0] === 'happy-birthday') {
        const withName = parts[1] || 'Stranger';
        const customMessage = url.query.custom || '';
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><p>Happy Birthday <strong>${withName}!</strong>${customMessage}</p></body></html>`);
    }

    else if(parts[0] === 'fact') {
        const httpFacts = ['http stands for hypertext transfer protocol', 'http is a stateless protocol', 'in url structure the protocol is typically http'];
        const fact = {
            factoid: httpFacts[Math.floor(Math.random() * Math.floor(3))]

        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(fact.factoid));

    }

    else {
        res.statusCode = 404;
        res.end(`CANNOT GET ${parts[0]}`);
    }
     
};