var chai = require('chai'),
    server = require('../index.js'),
    config = require('../config.js'),
    should = chai.should(),
    assert = chai.assert;

describe('Config.js', function () {
    describe('#port', function () {
        it('should return port number', function() {
            assert.isNotNull(config.port);
            assert.isNumber(config.port);
        })
    })
});