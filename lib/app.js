const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    console.log(url);

    //test greeting
    const parts = url.pathname.split('/').splice(1);

    //if(url.pathname === '/birthday') {
    //     res.end('Happy Birthday Jane!')
    // }
    if(parts[0] === '/birthday') {
        res.write('Happy Birthday Jane!');
        res.end();
    }
    else {
        res.end('Sorry, no cake for you');
    }
};