const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../server');

describe('Simple HTTP Server', () => {

    it('Responds with Hello World as a sample test on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'Hello World');
            });
    });

});