const { parse } = require('url');
const randomHttpFact  = require('./randomHttpFact');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('Hello Easton!');
        res.end();
    }

    else if(parts[0] === 'happy-birthday') {
        const custom = url.query.custom || '';
        let name = parts[1] || 'stranger';
        name = name[0].toUpperCase() + name.slice(1);

        res.setHeader('Content-Type', 'text/html');
        res.end(`<p>Happy Birthday <strong>${name}!</strong> ${custom}</p>`);
    }

    else if(parts[0] === 'fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(randomHttpFact()));
    }
};