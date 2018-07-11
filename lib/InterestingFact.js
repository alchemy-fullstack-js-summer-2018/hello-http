
//select fact from array (must contain the text HTTP)
const fact = [
    'There are 5 categories of HTTP Status codes.',
    'HTTP status codes are sometimes incorrectly referred to as error codes.',
    'HTTP is an acronym for HyperText Transfer Protocol.'
];

const randomFact = () => {
 


    let randomNumber = Math.floor(Math.random() * fact.length);
    return fact[randomNumber];
    
};

module.exports = randomFact;

