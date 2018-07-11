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
            .get('/happy-birthday/Luis')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Luis!</strong></p>');
            });
    });

    it('responds <p>Happy Birthday <strong>Stranger!</strong></p>', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Stranger!</strong></p>');
            });
    });
});