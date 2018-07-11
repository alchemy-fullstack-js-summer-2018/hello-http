
//select fact from array (must contain the text HTTP)
const fact = [
    'There are 5 categories of HTTP Status codes.',
    'HTTP status codes are sometimes incorrectly referred to as error codes.',
    'HTTP is an acronym for HyperText Transfer Protocol.'
];

function rand(min, y) {
    var offset = min;
    var range = (y - min) + 1;
  
    var randomNumber = Math.floor(Math.random() * range) + offset;
    return randomNumber;
    
}
  
let randomNumber = rand(0, fact.length - 1);
let randomFact = fact[randomNumber];
