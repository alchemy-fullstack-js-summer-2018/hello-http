const { parse } = require('url');
const randomHttpFact = require('./randomHttpFact');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.end('waz up world');
    }

    else if(parts[0] === 'happy-birthday') {
        let name = parts[1] || 'Stranger';
        const custom = url.query.custom || '';
        res.setHeader('Content-Type', 'text/html');
        res.write(`<p>Happy Birthday <strong>${name}!</strong> ${custom}</p>`); 
        res.end();
    }

    else if(parts[0] === 'fact') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(randomHttpFact()));
    }

    else {
        res.statusCode = 404;
        res.end(res.statusCode + ' CANNOT ' + req.method + ' ' + req.url);
    } 
};