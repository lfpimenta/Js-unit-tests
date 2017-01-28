/* global describe, it, require, global */
/**
 * Created by luispimenta on 28/01/17.
 */
var assert = require('chai').assert;
var initiator = require('../app/initiator');

describe("Initiator - formatMoney", function () {
    "use strict";
    it("Number must have formatMoney prototype function", function () {
        var number = 12;
        assert.equal(typeof number.formatMoney, "function", "Property formatMoney not found");
    });
});
