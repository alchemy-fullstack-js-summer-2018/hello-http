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

     
};