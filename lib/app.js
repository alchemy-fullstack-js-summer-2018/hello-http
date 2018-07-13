const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').splice(1);

    if(parts[0] === 'happy-birthday') {
        res.setHeader('Content-Type', 'text/html');
        const name = parts[1] ? parts[1] + '!' : 'Stranger';
        const custom = url.query.custom || '';
        let message = `<html><body><p>Happy Birthday <strong>${name}</strong> ${custom}</p></body></html>`;
        res.end(message);
    }
    else if(parts[0] === 'fact') {
        //fact sources: https://hpbn.co/brief-history-of-http/, http://www.inf.fu-berlin.de/lehre/SS01/hc/www/WWWhistory.html, https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol (second fact was modified to combine information from two of my sources)
        const randomFacts = [
            'The Hypertext Transfer Protocol (HTTP) is one of the most ubiquitous and widely adopted application protocols on the Internet: it is the common language between clients and servers, enabling the modern web.',
            'The history of HTTP begins with the origins of hypertext. In July of 1945, Dr. Vannevar Bush, proposes Memex in an article titled As We May Think published in The Atlantic Monthly. In the article, Bush outlines the ideas for a machine that would have the capacity to store textual and graphical information in such a way that any piece of information could be arbitrarily linked to any other piece. Later, the term hypertext was coined by Ted Nelson in 1965 in the Xanadu Project, who based his work on Bush\'s vision',
            'The first version of HTTP had only one method, namely GET, which would request a page from a server.'
        ];
        const randomFact = {};
        randomFact.fact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
        res.setHeader('Content-Type', 'text/html');
        res.end('Did you know that ' + JSON.stringify(randomFact['fact']));
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