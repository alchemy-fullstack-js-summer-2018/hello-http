const { parse } = require('url');
//const bodyParser = require('./body-parser');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('waz up world');
        res.end();
    }
    // add name
    // else if(req.method === 'GET' && parts[0] === 'happy-birthday' && parts[1])  {
    //     let message = `Happy Birthday${parts[1] ? ' ' + parts[1] : 'You Rock!'}`;
    //     res.end(message);
    // }

    // else if(req.method === 'GET' && parts[0] === 'happy-birthday') {
    //     res.write('<p>Happy Birthday <strong>Stranger!</strong>');
    //     res.end();
    // }

    else if(req.method === 'GET' && parts[0] === 'happy-birthday') {
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

};