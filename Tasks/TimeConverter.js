function fromSecondsToMinutes(seconds){
    return seconds / 60;
}

function fromSecondsToHours(seconds){
    return seconds / 3600;
}
function fromHoursToMinutes(hours){
    return hours * 60;
}
function fromHoursToSeconds(hours){
    return hours * 3600;
}
module.exports = {fromSecondsToMinutes, fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds };