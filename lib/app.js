const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const sentiment = url.query.feeling || 'Happy birthday';
        let message = `${sentiment}`;
        res.end(message);
    }

    else {
        res.statusCode = 404;
        res.end('Not found');
    }
};