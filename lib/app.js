const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday'){
        const name = url.query.name || 'stranger';
        const custom = url.query.custom || '';
        let message = `<html><body><p>Happy Birthday <strong>${name}</strong> ${custom}</p></body></html>`;
        res.setHeader('Content-Type', 'text/html');
        res.end(message);
    } 
    else if(parts[0] === 'facts'){
        let facts = [
            'http is for web development', 
            'Software tools include http',
            'Everyone uses http without knowing it'
        ]; 
        const fact = {
            fact: facts[Math.floor(Math.random() * 3) + 1]
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(fact));
    }
};