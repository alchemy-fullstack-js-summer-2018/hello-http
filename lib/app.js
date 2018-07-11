const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const person = url.query.person || 'Stranger';
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html><body><p>Happy Birthday <strong>${person}!</strong> You Rock</p></body></html>`
        );
        res.end();
    }
};