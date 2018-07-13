const chai = require('chai');
const { assert } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('simple http server', () => {

    it('responds with hello world on GET', () => {
        return chai.request(app)
            .get('/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'hello world');
            });
    });

    it('responds with personalized birthday greeting', () => {
        return chai.request(app)
            .get('/happy-birthday/jane')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>jane!</strong></p></body></html>');

            });
    });

    it('responds with custom message', () => {
        return chai.request(app)
            .get('/happy-birthday/Jane?custom=You%20Rock')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Jane!</strong>You Rock</p></body></html>');
            
            });
    });

    it('responds with no-name birthday greeting', () => {
        return chai.request(app)
            .get('/happy-birthday/')
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, '<html><body><p>Happy Birthday <strong>Stranger!</strong></p></body></html>');

            });
    });

    it('responds with 3 interesting fact about http', () => {
        return chai.request(app)
            .get('/fact')
            .then(res => {
                console.log(res.text);
                assert.ok(/http/.test(res.text));
            });


    });

    it('responds with 404 on not found', () => {
        return chai.request(app)
            .get('/not-going-to-be-found')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /CANNOT/);
            });
    });
});    