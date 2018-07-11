const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    console.log(parts);

    if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        let message = `<html><body><p>Happy Birthday <strong>${name}!</strong></p></body></html>`;
        res.setHeader('Content-Type', 'text/html');
        res.end(message);
    }
    else {
        res.write('hello world');
        res.end();
    }
};