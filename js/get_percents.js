'use strict';
/*jshint -W097*/

function getPercents(percent, number) {
    let result = (number / 100) * percent;
    console.log(result);
    return result;
}

getPercents(40, 1000);



module.exports = getPercents;