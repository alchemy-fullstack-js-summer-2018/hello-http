const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('simple http server', () => {
    const birthdayRes = '<p>Happy Birthday <strong>Stranger!</strong></p>';
    const bobbyBirthdayRes = '<p>Happy Birthday <strong>Bobby!</strong></p>';
    const bobbyTheBest = '<p>Happy Birthday <strong>Bobby!</strong>You are the best</p>';

    it('responds with Hello when given the / path', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'Hello');
            });
    });

    it('responds with happy birthday stranger when not given a value', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, birthdayRes);
            });
    });

    it('responds with happy birthday Bobby when given the name Bobby', () => {
        return chai.request(app)
            .get('/happy-birthday/Bobby')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, bobbyBirthdayRes);
            });
    });

    it('responds with a custom greeting that the user defines for some reason', () => {
        return chai.request(app)
            .get('/happy-birthday/Bobby?custom=You%20are%20the%20best')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, bobbyTheBest);
            });
    });

    it('responds with a random fact when you ask for one', () => {
        return chai.request(app)
            .get('/facts')
            .then(res => {
                console.log('***CONSOLE***', res.body.fact);
                assert.equal(res.status, 200);
                assert.equal('HTTP', res.body.fact.slice(0, 4));
            });
    });

    it('responds with a 404 when you give it a bad path', () => {
        return chai.request(app)
            .get('/what-are-you-doing')
            .then(res => {
                assert.equal(res.status, 404);
                assert.equal(res.text, 'Sorry that page does not exist');
            });
    });

});