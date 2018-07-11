const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    console.log('URL CONSOLE LOG:', url);
    console.log('PARTS CONSOLE LOG:', parts);

    res.setHeader('content-type', 'text/html');
    res.end('<p>Happy Birthday <strong>Luis!</strong></p>');
};