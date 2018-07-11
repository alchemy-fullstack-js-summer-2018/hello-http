const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);
    //console.log('URL CONSOLE LOG:', url);

    if(parts[0] === '') {
        res.write('Hello Easton!');
        res.end();
    }

    else if(parts[0] === 'happy-birthday') {

        const name = parts[1] || 'Stranger';

        res.setHeader('content-type', 'text/html');
        res.end(`<p>Happy Birthday <strong>${name}!</strong></p>`);
    }

    else if(parts[1] === 'luis') {
        res.setHeader('content-type', 'text/html');
        res.end('<p>Happy Birthday <strong>Luis!</strong></p>');
    }
};