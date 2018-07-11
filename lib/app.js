const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    console.log(parts);
    if(parts[0] === 'happy-birthday') {
        if(parts[1]) {
            res.write(`happy birthday ${parts[1]}`);
            res.end();
        } else {
            parts[1] = 'stranger';
            res.write(`happy birthday ${parts[1]}`);
            res.end();
        }
    }
    else {
        res.write('hello world');
        res.end();
    }
};