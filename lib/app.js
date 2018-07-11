const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday'){
        const name = url.query.name || 'stranger';
        let message = `happy birthday ${name}`;
        res.end(message);
    }
};