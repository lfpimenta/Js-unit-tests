/* global store */
function init () {
    "use strict";
    Number.prototype.formatMoney = function () {
        var decimalDigits = window.store.currency.decimalDigits,
            symbol = window.store.currency.symbol,
            symbolPosition = window.store.currency.symbolPosition,
            thousandSeparator = window.store.currency.thousandsSeparator,
            decimalSeparator = window.store.currency.decimalSeparator,
            number = this,
            strIntegerPart,
            thousandsGroupCount,
            result;

        number = Math.abs(+number || 0).toFixed(decimalDigits);
        strIntegerPart = parseInt(number = Math.abs(+number || 0).toFixed(decimalDigits), 10) + "";
        thousandsGroupCount = (thousandsGroupCount = strIntegerPart.length) > 3 ? thousandsGroupCount % 3 : 0;

        // First Group
        result = (thousandsGroupCount ? strIntegerPart.substr(0, thousandsGroupCount) + thousandSeparator : "");
        // Next Groups
        result += strIntegerPart.substr(thousandsGroupCount).replace(/(\d{3})(?=\d)/g, "$1" + thousandSeparator);
        // Decimal part
        result += (decimalDigits ? decimalSeparator + Math.abs(number - strIntegerPart).toFixed(decimalDigits).slice(2) : "");

        if (symbolPosition === 'suffix') {
            return result + ' ' + symbol;
        }

        return symbol + ' ' + result;
    };
}

init();