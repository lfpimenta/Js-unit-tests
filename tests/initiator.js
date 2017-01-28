/* global describe, it, require, global */
/**
 * Created by luispimenta on 28/01/17.
 */
var assert = require('chai').assert;
var initiatorPath = '../app/initiator';

describe("Initiator - formatMoney", function () {
    "use strict";
    it("Number must have formatMoney prototype function", function () {
        setStoreAndInitialize();
        var number = 12;
        assert.equal(typeof number.formatMoney, "function", "Property formatMoney not found");
    });

    it("Number format should be correct", function () {
        setStoreAndInitialize();
        var number = 1200;
        assert.equal(number.formatMoney(), "€ 1.200,00");
    });

});

function setStoreAndInitialize(decimal, symbol, sposition, tposition, dseparator) {
    "use strict";
    global.store = {
        currency: {
            decimalDigits: (decimal === undefined) ? 2 : decimal,
            symbol: symbol || '€',
            symbolPosition: sposition || 'prefix',
            thousandsSeparator: tposition || '.',
            decimalSeparator: dseparator || ','
        }
    };
    reloadInitiator();
}

function reloadInitiator() {
    "use strict";
    delete Number.prototype.formatMoney;
    delete require.cache[require.resolve(initiatorPath)];
    require(initiatorPath);
}