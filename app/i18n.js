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
    },
    'Wednesday': {
        'en_UK': 'Wednesday',
        'pt_PT': 'Quarta-feira'
    },
    'Thursday': {
        'en_UK': 'Thursday',
        'pt_PT': 'Quinta-feira'
    },
    'Friday': {
        'en_UK': 'Friday',
        'pt_PT': 'Sexta-feira'
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
