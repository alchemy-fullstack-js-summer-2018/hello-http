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
                assert.equal(res.text, '<p>Happy birthday, <strong>Mark!</strong> </p>');
            });
    });

    it('responds using Stranger as the name if no name is given', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, '<p>Happy birthday, <strong>Stranger!</strong> </p>');
            });
    });

    it('returns a random fact that has "http" in it', () => {
        return chai.request(app)
            .get('/fact')
            .then(res => {
                assert.include(res.body.fact, 'HTTP');
            });
    });

});