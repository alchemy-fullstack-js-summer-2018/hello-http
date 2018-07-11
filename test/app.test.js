const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('hello http server', () => {

    it('responds with happy birthday jane on GET', () => {
        return chai.request(app)
            .get('/birthday')
            .then(res => {
                assert.equal(res.text, 'Happy Birthday Jane!');
            });
    });
});