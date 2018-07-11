const { parse } = require('url');

// const bdayGreeting = {
//     message: 'Happy Birthday Jane!'
// };

module.exports = (req, res) => {
    const url = parse(req.url, true);
    console.log(url);

    const parts = url.pathname.split('/').splice(1);

    if(parts[1] === 'name') {
        res.setHeader('Content-Type', 'text/html');
        let message = `<html><body><p>Happy Birthday <strong>${parts[1] ? 'Jane!' : 'Stranger'}</strong></p></body></html>`;
        res.end(message);
    }
    if(parts[0] === 'happy-birthday') {
        const custom = url.search.custom || 'You Rock';
        console.log('custom', custom);
        let message = `<html><body><p>Happy Birthday <strong>${parts[1] ? 'Jane!' : 'Stranger'}</strong> ${custom}</p></body></html>`;
        res.end(message);
    }
    else if(parts[0] === '') {
        res.write('Hello World!');
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end('Sorry, no cake for you.');
    }
};