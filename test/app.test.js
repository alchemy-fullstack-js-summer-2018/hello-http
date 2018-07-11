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
                assert.equal(res.text, 'Happy birthday');
            });
    });

    it('responds happy birth day with name', () => {
        
    })
});