const { parse } = require('url');

module.exports = (req, res) => {
    //DOES NEXT LINE NEED 'TRUE' AS 2ND ARG?
    const url = parse(req.url);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('Hello World');
        res.end();
    }

    else if(parts[0] === 'happy-birthday') {
        let message = `<html><body><p>Happy Birthday <strong>${parts[1] ? parts[1] + '!' : '!'}</strong></p></body></html>`;
        res.end(message);
    }
    
};