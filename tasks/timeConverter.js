const isNum = require('./isNumber')

const COUNT = 60;

function fromSecondsToMinutes(seconds){
    if(isNum){
        return seconds / COUNT;
    }
}

function fromSecondsToHours(seconds){
    if(isNum){
        return seconds / (COUNT*COUNT);
    }
}

function fromHoursToMinutes(hours){
    if(isNum){
        return hours * COUNT;
    }
}

function fromHoursToSeconds(hours){
    if(isNum){
        return hours * (COUNT*COUNT);
    }
}

module.exports = {fromSecondsToMinutes, fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,};