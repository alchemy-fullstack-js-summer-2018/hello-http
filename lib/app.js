const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        let message = 'Happy Birthday';
        res.end(message);
    }
    
    
    // const name = 'Antreo';
    // const greeting = parts[1].greeting || 'stranger';
};