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

describe("Weekday - getWeekDay with callBack", function () {
    "use strict";
    it("Should return day modified by callback", function () {
        var instance = new weekDay(3);
        var callBack = function (data) { return 'Day: ' + data;};
        var result = instance.getWeekDay(callBack);
        assert.equal('Day: Thursday', result);
    });
});