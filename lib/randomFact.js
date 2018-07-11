const facts = [
    'HTTP is the foundation of data communication for the internet',
    'HTTP is the protocol for exchanging structured text and logical links',
    'HTTP has several methods for exchanging information'
];

module.exports = function() {
    const factObj = {};
    let randomNum = Math.floor(Math.random() * facts.length);
    factObj.fact = facts[randomNum];
    return factObj;
};