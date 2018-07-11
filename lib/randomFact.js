const facts = [
    { fact: 'http stands for Hypertext Transfer Protocol' },
    { fact: 'http is stateless, so no data is kept by the server' },
    { fact: 'http is a protocol for transferring documents like HTML' }
];

module.exports = () => {
    let random = Math.floor(Math.random() * facts.length);
    return facts[random];
};