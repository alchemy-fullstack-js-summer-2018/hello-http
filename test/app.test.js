const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('simple http server', () => {
    const birthdayRes = '<html><body><p>Happy Birthday <strong>Stranger!</strong></p></body></html>';

    it('responds with hello world on GET', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, birthdayRes);
            });
    });

    it('responds with a random fact when you ask for one', () => {
        return chai.request(app)
            .get('/facts')
            .then(res => {
                assert.equal(res.status, 200);
                console.log(res.text);
            });
    });

});