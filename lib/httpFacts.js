module.exports =  function randomFact() {
    let fact = {};
    const randomNum = Math.floor(Math.random() * Math.floor(3));

    const first = 'HTTP stands for Hypertext Transfer Protocol. It\'s a stateless, application-layer protocol for communicating between distributed systems, and is the foundation of the modern web';
    const second = 'Communication between a host and a client occurs, via a request/response pair. The client initiates an HTTP request message, which is serviced through a HTTP response message in return.';
    const third =  'GET, POST, PUT and DELETE are the most popular HTTP verbs.';

    const factList = [first, second, third];
    fact.chosenFact = factList[randomNum];

    return fact;
};