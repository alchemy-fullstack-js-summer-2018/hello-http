const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    // const custom = parts[1].split('&custom=');
    // const full = parts.splice(1).push(custom[0]);
    // console.log(parts);
    // console.log(custom);
    // console.log(full);
    console.log(parts);

    if(parts[0] === 'happy-birthday') {
        const name = parts[1] || 'Stranger';
        if(url.query.custom) {
            let custom = url.query.custom;
            let message = `<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`;
            res.setHeader('Content-Type', 'text/html');
            res.end(message);
        }
        else {
            let message = `<html><body><p>Happy Birthday <strong>${name}!</strong></p></body></html>`;
            res.setHeader('Content-Type', 'text/html');
            res.end(message);
        }
    }
    else {
        res.write('hello world');
        res.end();
    }
};