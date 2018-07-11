const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday') {
        let name = parts[1] || 'Stranger';
        const custom = url.query.custom || '';
        let message = `<html><body><p>Happy Birthday <strong>${name}!</strong> ${custom}</p></body></html>`;
        res.setHeader('Content-Type', 'text/html');
        res.end(message);
    }
    else if(parts[0] === 'fact') {
        const facts = [
            'HTTP was introduced in 1991',
            'HTTP starts with hypertext, coined by Ted Nelson in 1965',
            'inspired by Vannevar Bush\'s 1930s vision of the microfilm-based information retrieval and management "memex" system'
        ];
    }
    
};