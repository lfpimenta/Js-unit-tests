/* global store */
function init () {
    "use strict";
    Number.prototype.formatMoney = function () {
        var decimalDigits = store.currency.decimalDigits,
            symbol = store.currency.symbol,
            symbolPosition = store.currency.symbolPosition,
            thousandSeparator = store.currency.thousandsSeparator,
            decimalSeparator = store.currency.decimalSeparator,
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
