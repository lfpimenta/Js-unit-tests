/* global describe, it, require, global */
/**
 * Created by luispimenta on 28/01/17.
 */

var assert = require('chai').assert;
var weekDay = require('../app/weekday');


describe("Weekday - getWeekDay", function () {
    "use strict";
    it("Should return correct day for monday", function () {
        var instance = new weekDay(1);
        var result = instance.getWeekDay();
        assert.equal('Monday', result);
    });
});