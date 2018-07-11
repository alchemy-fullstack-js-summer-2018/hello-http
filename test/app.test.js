const chai = require('chai');
const { assert } = chai; 
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../lib/app');

describe('simple http server', () => {

    it('responds with happy birthday on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.text, 'happy birthday');
            });
    });

    it('responds <p>Happy Birthday <strong>Luis!</strong></p>', () => {
        return chai.request(app)
            .get('/happy-birthday/luis')
            .then(res => {
                assert.equal(res, '<p>Happy Birthday <strong>Luis!</strong></p>');
            });
    });
});