const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('not-simple-to-me http server', () => {

    it('responds with waz up world', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'waz up world');
            });
    });

    it('says happy birthday stranger on get', () => {
        return chai.request(app)
            .get('/happy-birthday')
            .then(res => {
                assert.equal(res.text, 'Happy Birthday Stranger!');
            });
    });

    it('says happy birthday specific name', () => {
        return chai.request(app)
            .get('/happy-birthday/jane')
            .then(res => {
                assert.equal(res.text, 'Happy Birthday Jane');
            });
    });
});