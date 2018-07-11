const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        let message = '<p>Happy Birthday<strong>' + name + '</strong></p>';
        res.write(message);
        res.end();
    }

    
};