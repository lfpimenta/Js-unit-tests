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

    var doTest = function(params, index) {
        it("formatMoney Scenario " + index, function() {
            setStoreAndInitialize.apply(null, params.store);
            var number = params.input;
            assert.equal(params.expected, number.formatMoney());
        });
    };

    getDataProvider().forEach(doTest);

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

/**
 * Data Provider
 * @returns {Array}
 */
function getDataProvider ()
{
    "use strict";
    var dataProvider = [];
    dataProvider.push(
        {
            input: 1200,
            store: [],
            expected: '€ 1.200,00'
        },
        {
            input: 1200.45,
            store: [],
            expected: '€ 1.200,45'
        },
        {
            input: 1200.45,
            store: [2, '$', 'suffix', ',', '.'],
            expected: '1,200.45 $'
        },
        {
            input: 1200.45,
            store: [1, '$', 'suffix', ',', '.'],
            expected: '1,200.5 $'
        },
        {
            input: 1200.45,
            store: [0, '$', 'suffix', ',', '.'],
            expected: '1,200 $'
        },
        {
            input: 12.45,
            store: [0, '$', 'suffix', ',', '.'],
            expected: '12 $'
        },
        {
            input: NaN,
            store: [0, '$', 'suffix', ',', '.'],
            expected: '0 $'
        }
    );
    return dataProvider;
}