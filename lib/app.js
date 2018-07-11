const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        let message = '<p>Happy Birthday<strong>' + name + '</strong></p>';
        res.write(message);
        res.end();
    }

    if(parts[0] === 'facts') { 
        const facts = ['Http means HyperText Transfer Protocol', 'Http formed the beginning of the internet', 'Http is awesome!'];
        const fact = {
            fact: facts[Math.floor((Math.random() * 3) + 1)]
        };
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(fact));
        res.end();
    }

    
};