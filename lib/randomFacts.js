module.exports = function randomFacts() {

    const http = {
        fact: ''
    };


    const randomFacts = [
        'http is for web development', 
        'Software tools include http',
        'Everyone uses http without knowing it'
    ]; 


    http.fact = randomFacts[Math.floor((Math.random() * randomFacts.length))];
    return http;
};