const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('simple http server', () => {
    it('responds with hello world on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'hello world');
            });
    });

    it('says happy birthday with no given name', () => {
        return chai.request(app)
            .get('/happy-birthday/')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Stranger!</strong></p></body></html>');
            });
    });

    it('says happy birthday to a specific person', () => {
        return chai.request(app)
            .get('/happy-birthday/John')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>John!</strong></p></body></html>');
            });
    });

    it('says happy birthday with a custom message', () => {
        return chai.request(app)
            .get('/happy-birthday/Jane?custom=You%20Rock')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Jane!</strong> You Rock</p></body></html>');
            });
    });
});