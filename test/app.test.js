const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('hello http server', () => {

    it('responds with happy birthday jane on GET', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Jane!</strong></p></body></html>');
            });
    });

    it.only('responds with happy birthday jane on GET', () => {
        return chai.request(app)
            .get('/happy-birthday/name')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Jane!</strong></p></body></html>');
            });
    });
});