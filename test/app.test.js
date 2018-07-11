const chai = require('chai');

const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('simple HTTP server', () => {

    it('responds with Hello World on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'Hello World');
            });
    });
    
    it('says Happy Birthday', () => {
        return chai.request(app)
            .get('/happy-birthday/Mark')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Mark!</strong></p></body></html>');
            });
});