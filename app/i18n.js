/* global module */
/**
 * Created by luispimenta on 28/01/17.
 */

var mapping = {
    'Monday': {
        'en_UK': 'Monday',
        'pt_PT': 'Segunda-feira'
    },
    'Tuesday': {
        'en_UK': 'Tuesday',
        'pt_PT': 'Terça-feira'
    }
};


module.exports = function translate(phrase, language) {
    "use strict";
    var phraseMap = mapping[phrase];

    if (!phraseMap) {
        return phrase;
    }

    return phraseMap[language] || phrase;
};
