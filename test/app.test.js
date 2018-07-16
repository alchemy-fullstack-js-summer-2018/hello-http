const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('Simple http server', () => {

    it('Respond with b-day with given name', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .query('name=Jane')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Jane</strong></p></body></html>');
                assert.equal(res.header['content-type'], 'text/html');
            });
    });
    
    it('Respond with b-day with Stranger', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Stranger</strong></p></body></html>');
                assert.equal(res.header['content-type'], 'text/html');
            });
    });

    it('Respond with b-day and custom message on GET', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .query('name=Jane')
            .query('custom=You%20Rock')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Jane</strong>You Rock</p></body></html>');
                assert.equal(res.header['content-type'], 'text/html');
            });
    });

    it('Returns random http fact object', () => {
        return chai.request(app)
            .get('/facts')
            .then(res => {
                assert.ok(/http/.test, JSON.parse(res.text));
                assert.equal(res.header['content-type'], 'application/json');
            });
    });

    it('Responds with 404 not invalid path', () => {
        return chai.request(app)
            .get('/invalid')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /CANNOT/);
            });
    });
});