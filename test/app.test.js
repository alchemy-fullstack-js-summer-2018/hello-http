const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../lib/app');
chai.use(chaiHttp);

describe('simple http server', () => {

    it('responds with Happy Birthday on GET', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'Happy Birthday');
            });
    });
});