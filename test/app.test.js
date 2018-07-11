const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('Simple http server', () => {
    it('Respond with b-day on GET', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .set('Content-Type', 'text/html')
            .then(res => {
                assert.equal(res.text, 'happy birthday stranger');
            });
    });
});