
//select fact from array (must contain the text HTTP)
const facts = [
    'There are 5 categories of HTTP Status codes.',
    'HTTP status codes are sometimes incorrectly referred to as error codes.',
    'HTTP is an acronym for HyperText Transfer Protocol.',
    'HTTP is the foundation of any data exchange on the Web.',
    'Due to its extensibility, HTTP is used to not only fetch hypertext documents, but also images and videos or to post content to servers.',
    'HTTP is generally designed to be simple and human readable.'

];

const randomFact = () => {
 
    let result = {};

    let randomNumber = Math.floor(Math.random() * facts.length);
    result.fact = facts[randomNumber];
    return result;
    
};

module.exports = randomFact;

