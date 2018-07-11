const chai = require('chai');
const { assert } = chai; 
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../lib/app');

describe('simple http server', () => {

    it('responds with hello Easton on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.text, 'Hello Easton!');
            });
    });

    it('responds <p>Happy Birthday <strong>Luis!</strong></p>', () => {
        return chai.request(app)
            .get('/happy-birthday/luis')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Luis!</strong> </p>');
            });
    });

    it('responds <p>Happy Birthday <strong>Stranger!</strong></p>', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Stranger!</strong> </p>');
            });
    });

    it('responds <p>Happy Birthday <strong>Luis!</strong> You are looking younger every day.</p>', () => {
        return chai.request(app)
            .get('/happy-birthday/luis?custom=You%20are%20looking%20younger%20every%20day.')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Luis!</strong> You are looking younger every day.</p>');
            });
    });

    it('responds with a random fact about http', () => {
        return chai.request(app)
            .get('/fact')
            .then(res => {
                assert.ok(/http/.test(res.body.fact));
            });
    });

    it('responds with 404 on not found', () => {
        return chai.request(app)
            .get('/better-luck-next-time')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /Sorry/);
            });
    });
});