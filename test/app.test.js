const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('Simple http server', () => {
    it('Respond with b-day on GET', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .query('name=Jane')
            .query('custom=You%20Rock')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Jane</strong> You Rock</p></body></html>');
                assert.equal(res.header['content-type'], 'text/html');
            });
    });

    it('Returns http fact object', () => {
        return chai.request(app)
            .get('/facts')
            .then(res => {
                assert.ok(/http/.test, JSON.parse(res.text));
                assert.equal(res.header['content-type'], 'application/json');
            });
    });
});