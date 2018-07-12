const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('hello world');
        res.end();
    }

    else if(req.method === 'GET' && parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger! ';
        if(url.query.custom) {
            let custom = url.query.custom;
            let message = '<html><body><p>Happy Birthday <strong>${name}!</strong>${custom}</p></body></html>';
            res.setHeader('content-type', 'text/html');
            res.end(message);
        }
    }
    else {
        res.statusCode = 404;
        res.end('No birthday today');
    }
};
