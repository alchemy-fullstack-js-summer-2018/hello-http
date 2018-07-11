const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    if(parts[0] === 'happy-birthday') {
        if(parts[1]) {
            parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
            res.write(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong></p></body></html>`);
            res.end();
        } else {
            parts[1] = 'Stranger';
            res.write(`<html><body><p>Happy Birthday <strong>${parts[1]}!</strong></p></body></html>`);
            res.end();
        }
    }
    else {
        res.write('hello world');
        res.end();
    }
};