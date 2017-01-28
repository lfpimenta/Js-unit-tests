/* global module */
/**
 * Created by luispimenta on 28/01/17.
 */

var WeekDay = function(day) {
    "use strict";
    this.day = day;
};

WeekDay.prototype.getWeekDay = function (callback) {
    "use strict";
    var result;

    switch (this.day)  {
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Thursday";
            break;
        case 4:
            result = "Wednesday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;
        default:
            result = "Sunday";
    }
    if (typeof callback === 'function') {
        return callback(result);
    } else {
        return result;
    }
};

module.exports = WeekDay;
