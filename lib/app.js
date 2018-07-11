const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);
    console.log(url);

    const parts = url.pathname.split('/').splice(1);

    if(parts[0] === 'happy-birthday') {
        res.setHeader('Content-Type', 'text/html');
        const custom = url.query.custom || 'You Rock';
        let message = `<html><body><p>Happy Birthday <strong>${parts[1] ? 'Jane!' : 'Stranger'}</strong> ${custom}</p></body></html>`;
        res.end(message);
    }
    else if(parts[0] === 'fact') {
        const randomFacts = [
            'http says hello',
            'what up http',
            'http, waz that?'
        ];
        const randomFact = {};
        randomFact.fact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
        console.log('fact', randomFact['fact']);
        res.setHeader('Content-Type', 'text/html');
        res.end(JSON.stringify(randomFact));
    }
    else if(parts[0] === '') {
        res.write('Hello World!');
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end('Sorry, no cake for you.');
    }
};