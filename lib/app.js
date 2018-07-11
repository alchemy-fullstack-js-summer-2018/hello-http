const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday'){
        const name = url.query.name || 'stranger';
        const custom = url.query.custom || '';
        let message = `happy birthday ${name} ${custom}`;
        res.end(message);
    }
};