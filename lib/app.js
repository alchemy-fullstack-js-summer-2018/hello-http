const { parse } = require('url');

// const bdayGreeting = {
//     message: 'Happy Birthday Jane!'
// };

module.exports = (req, res) => {
    const url = parse(req.url, true);
    console.log(url);

    const parts = url.pathname.split('/').splice(1);

    if(parts[0] === 'happy-birthday') {
        const custom = url.query.custom || 'You Rock';
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