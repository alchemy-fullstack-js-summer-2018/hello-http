const chai = require('chai');

const { assert } = chai;

const interestingFact = require('../lib/InterestingFact');

describe('Random Interesting Fact about HTTP', () => {
    it('returns a fact containing the word HTTP', () => {
        return chai.request(app)
            .get('There a lots of cool HTTP facts.')
            .then (res => {
                assert.ok(/HTTP/.test(response));
            });
    });
});

