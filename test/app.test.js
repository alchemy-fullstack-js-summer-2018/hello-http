const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('Simple http server', () => {

    it('responds with happy birthday greeting on GET', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'Happy birthday, Stranger!');
            });
    });

    it('responds happy birthday with name', () => {
        return chai.request(app)
            .get('/happy-birthday/Longa')
            .then(res => {
                assert.equal(res.text, 'Happy birthday, Longa!');
            });
    });

    it('responds with custom message', () => {
        return chai.request(app)
            .get('/happy-birthday/Longa?custom=%20Another%20year%20of%20mangling%20lizards...')
            .then(res => {
                assert.equal(res.text, 'Happy birthday, Longa! Another year of mangling lizards...');
            });
    });
    
    it('responds with 404', () => {
        return chai.request(app)
            .get('/unhappy-birthday')
            .then(res => {
                assert.equal(res.status, 404);
                assert.equal(res.text, 'Not found');
            });
    });

    it('responds with a random http fact', () => {
        return chai.request(app)
            .get('/facts')
            .then(res => {
                assert.include(res.text, 'HTTP');
            });
    });

});