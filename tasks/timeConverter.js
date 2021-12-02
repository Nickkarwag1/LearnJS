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
let RandomNumber = getRandomNum(1,100)
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

module.exports = {fromSecondsToMinutes, fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds, RandomNumber};