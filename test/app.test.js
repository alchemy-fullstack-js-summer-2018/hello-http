const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../lib/app');

describe('my first http server', () => {

    it('responds with hello world on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'hello world');
            });
    });
});