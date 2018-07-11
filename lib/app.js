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
    if(parts[0] === 'happy-birthday') {
        res.write('<html><body><p>');
        res.write('Happy Birthday ');
        res.write('<strong>');
        res.write('Jane!');
        res.write('</strong>');
        res.write('</p></body></html>');
        res.end();
    }
    else {
        res.end('Sorry, no cake for you.');
    }
};