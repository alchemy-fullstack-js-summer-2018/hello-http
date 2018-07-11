const { parse } = require('url');

const facts = {
    fact1: 'web development http tools',
    fact2: 'learn http for coding',
    fact3: 'http super fast'
};

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'happy-birthday'){
        const name = url.query.name || 'stranger';
        const custom = url.query.custom || '';
        let message = `<html><body><p>Happy Birthday <strong>${name}</strong> ${custom}</p></body></html>`;
        res.end(message);
    } 
    else if(parts[0] === 'facts'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(facts));
    }
};