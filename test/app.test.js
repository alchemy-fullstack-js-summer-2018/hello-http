const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../lib/app');

chai.use(chaiHttp);

describe('Simple HTTP Server', () => {

    it('Responds with Happy Birthday <name> at path: /happy-birthday/<name>', () => {
        return chai.request(app)
            .get('/happy-birthday/Frank')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Frank!</strong> </p></body></html>');
                assert.equal(res.status, 200);
            });
    });

    it('Responds with Happy Birthday Stranger if no name given', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Stranger!</strong> </p></body></html>');
                assert.equal(res.status, 200);
            });
    });

    it('Adds a "custom" value to the Happy Birthday message', () => {
        return chai.request(app)
            .get('/happy-birthday/Frank?custom=You%20rock!')
            .then(res => {
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Frank!</strong> You rock!</p></body></html>');
                assert.equal(res.status, 200);
            });
    });

    it('Generates a random fact when the path is /fact', () => {
        return chai.request(app)
            .get('/fact')
            .then(res => {
                let response = JSON.parse(res.text);
                assert.ok(response.fact);
                assert.ok(/HTTP/.test(response.fact));
                assert.equal(res.status, 200);
            });
    });

});