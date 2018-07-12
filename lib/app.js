const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('hello world');
        res.end();
    }

    else if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        const message = url.query.custom || '';
        res.setHeader('content-type', 'text/html');
        res.end(`<html><body><p>Happy Birthday ${name} ${message}</p></body></html>`);
    }
};
