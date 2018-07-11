const chai = require('chai');

const { assert } = chai;
const app = require('../lib/app');

describe('Random Interesting Fact about HTTP', () => {
    it('returns a fact containing the word HTTP', () => {
        return chai.request(app)
            .get('/fact')
            .then (res => {
                console.log(res);
                assert.ok(/HTTP/.test(res.text));
            });
    });
});

