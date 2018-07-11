const { parse } = require('url');

// const bdayGreeting = {
//     message: 'Happy Birthday Jane!'
// };

module.exports = (req, res) => {
    const url = parse(req.url, true);
    console.log(url);

    //test greeting
    const parts = url.pathname.split('/').splice(1);

    //if(url.pathname === '/happy-birthday/Jane') {
    //     res.end('Happy Birthday Jane!')
    // }
    if(parts[1] === 'name') {
        res.setHeader('Content-Type', 'text/html');
        let message = `<html><body><p>Happy Birthday <strong>${parts[1] ? 'Jane!' : 'Stranger'}</strong></p></body></html>`;
        res.end(message);
    }
    else {
        res.end('Sorry, no cake for you.');
    }
};