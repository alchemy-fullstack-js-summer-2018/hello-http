
//select fact from array (must contain the text HTTP)
const facts = [
    'There are 5 categories of HTTP Status codes.',
    'HTTP status codes are sometimes incorrectly referred to as error codes.',
    'HTTP is an acronym for HyperText Transfer Protocol.'
];

const randomFact = () => {
 
    let result = {};

    let randomNumber = Math.floor(Math.random() * facts.length);
    result.fact = facts[randomNumber];
    return result;
    
};

module.exports = randomFact;

