const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    console.log(url);

    //test greeting
};