const isNumber = require('../utils/isNumber')

const COUNT = 60;

function fromSecondsToMinutes(seconds){
    if(isNumber(seconds) && !isNaN(seconds)){
        return seconds / COUNT;
    }
}

function fromSecondsToHours(seconds){
    if(isNumber(seconds)){
        return seconds / (COUNT*COUNT);
    }
}

function fromHoursToMinutes(hours){
    if(isNumber(hours)){
        return hours * COUNT;
    }
}

function fromHoursToSeconds(hours){
    if(isNumber(hours)){
        return hours * (COUNT*COUNT);
    }
}

module.exports = {fromSecondsToMinutes, fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,};
