const { parse } = require('url');

module.exports = (req, res) => {
    //DOES NEXT LINE NEED 'TRUE' AS 2ND ARG?
    const url = parse(req.url);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === '') {
        res.write('Hello World');
        res.end();
    }
    
};