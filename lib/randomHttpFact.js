module.exports = function randomHttpFact() {
    const http = {
        fact: ''

    };
    
    let randoFacts = [
        'http does not stand for Hotdogs Take Tiny Pictures',
        'http is structured text that uses logical links between nodes',
        'http functions as a request-response protocol' 
    ];    

    http.fact = randoFacts[Math.floor(Math.random() * randoFacts.length)];
    return http;
};