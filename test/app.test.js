const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../lib/app');

describe('my first http server', () => {

    it('responds with hello world', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'hello world');
            });
    });

    it('says happy birthday stranger', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday Stranger </p></body></html>');
            });
    });

    it('says a personalized happy birthday greeting and message', () => {
        return chai.request(app)
            .get('/happy-birthday/Bob!?custom=Party%20Time!')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday Bob! Party Time!</p></body></html>');
            });
    });
});