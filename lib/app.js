const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        let name = parts[1] || 'Stranger';
        const custom = url.query.custom || '';
        let message = `<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`;
        res.setHeader('Content-Type', 'text/html');
        res.end(message);
    }
    
};