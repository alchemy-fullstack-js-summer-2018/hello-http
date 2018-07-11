module.exports = function randomHttpFact() {
    const http = {
        fact: ''
    };
    
    const randomFacts = [
        'http stands for Hyptext Transfer Protocol',
        'http is a client-server protocol',
        'http allows the fetching of resources'
    ];

    http.fact = randomFacts[Math.floor((Math.random() * randomFacts.length))];
    return http;
};



