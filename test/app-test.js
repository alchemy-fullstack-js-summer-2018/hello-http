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

    it('says happy birthday specific name', () => {
        return chai.request(app)
            .get('/happy-birthday/Jane/')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Jane!</strong> </p>');
            });
    });
    it('says happy birthday stranger on get', () => {
        return chai.request(app)
            .get('/happy-birthday/')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Stranger!</strong> </p>');
            });
    });


    it('says happy birthday specific name with custom message', () => {
        return chai.request(app)
            .get('/happy-birthday/Jane?custom=You%20Rock')
            .then(res => {
                assert.equal(res.text, '<p>Happy Birthday <strong>Jane!</strong> You Rock</p>');
            });
    });

    it('returns rando http fact', () => {
        return chai.request(app)
            .get('/fact/')
            .then(res => {
                assert.ok(/http/.test(res.body.fact));
            });
    });   
    it('responds with 404 on not found', () => {
        return chai.request(app)
            .get('/bad/')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /CANNOT/);
       
            });
    });
});     