const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../lib/app');

chai.use(chaiHttp);

describe('Simple HTTP Server', () => {

    it('Responds with Hello World as a sample test on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'Hello World');
            });
    });

    it('Responds with Happy Birthday <name> at path: /happy-birthday/<name>', () => {
        return chai.request(app)
            .get('/happy-birthday/Frank')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Frank!</strong></p></body></html>');
            });
    });

});