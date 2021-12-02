const {fromSecondsToMinutes,fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,} = require('./timeConverter')
const getRandomNum = require('./getRandomNum')

const MIN_NUM = 0;
const MAX_NUM = 100;

    describe("timeConverter", function () {
        it("Перевод секунд в минуты", function () {
            const secondsCount = getRandomNum(MIN_NUM, MAX_NUM);
            const minutes = fromSecondsToMinutes(secondsCount);
            console.log(minutes);
        });
        it("Перевод секунд в часы", function () {
            const secondsCount = getRandomNum(MIN_NUM, MAX_NUM);
            const hours = fromSecondsToHours(secondsCount);
            console.log(hours);
        });
        it("Перевод часы в минуты", function () {
            const hoursCount = getRandomNum(MIN_NUM, MAX_NUM);
            const minutes = fromHoursToMinutes(hoursCount);
            console.log(minutes);
        });
        it("Перевод часы в секунды", function () {
            const hoursCount = getRandomNum(MIN_NUM, MAX_NUM);
            const seconds = fromHoursToSeconds(hoursCount);
            console.log(seconds);
        });
    });
