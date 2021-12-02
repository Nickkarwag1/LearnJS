const {fromSecondsToMinutes,fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,} = require('./timeConverter')
const getRandomNum = require('./getRandomNum')

const MIN_NUM = 0;

const MAX_NUM = 100;

    describe("timeConverter", function () {
        it("conversion of seconds to minutes", function () {
            const secondsCount = getRandomNum(MIN_NUM, MAX_NUM);
            const minutes = fromSecondsToMinutes(secondsCount);
            console.log(minutes);
        });

        it("conversion of seconds to hours", function () {
            const secondsCount = getRandomNum(MIN_NUM, MAX_NUM);
            const hours = fromSecondsToHours(secondsCount);
            console.log(hours);
        });

        it("conversion of hours to minutes", function () {
            const hoursCount = getRandomNum(MIN_NUM, MAX_NUM);
            const minutes = fromHoursToMinutes(hoursCount);
            console.log(minutes);
        });

        it("conversion of hours to seconds", function () {
            const hoursCount = getRandomNum(MIN_NUM, MAX_NUM);
            const seconds = fromHoursToSeconds(hoursCount);
            console.log(seconds);
        });
    });
