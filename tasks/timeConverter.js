const COUNT = 60;
function fromSecondsToMinutes(seconds){
    return seconds / COUNT;
}

function fromSecondsToHours(seconds){
    return seconds / (COUNT*COUNT);
}
function fromHoursToMinutes(hours){
    return hours * COUNT;
}
function fromHoursToSeconds(hours){
    return hours * (COUNT*COUNT);
}

module.exports = {fromSecondsToMinutes, fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,};