const COUNT = 60;

function fromSecondsToMinutes(seconds){
    if(typeof seconds === 'number'){
        return seconds / COUNT;
    }
}

function fromSecondsToHours(seconds){
    if(typeof seconds === 'number'){
        return seconds / (COUNT*COUNT);
    }
}

function fromHoursToMinutes(hours){
    if(typeof hours === 'number'){
        return hours * COUNT;
    }
}

function fromHoursToSeconds(hours){
    if(typeof hours === 'number'){
        return hours * (COUNT*COUNT);
    }
}

module.exports = {fromSecondsToMinutes, fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,};