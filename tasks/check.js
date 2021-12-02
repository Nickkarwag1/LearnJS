const {fromSecondsToMinutes,fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,} = require('./timeConverter')
const randomNumber = require('./getRandomNum')


    describe("timeConverter", function () {
        it("Перевод секунд в минуты", function () {
            console.log(fromSecondsToMinutes(randomNumber))
        });
        it("Перевод секунд в часы", function () {
            console.log(fromSecondsToHours(randomNumber))
        });
        it("Перевод часы в минуты", function () {
            console.log(fromHoursToMinutes(randomNumber))
        });
        it("Перевод часы в секунды", function () {
            console.log(fromHoursToSeconds(randomNumber))
        });
    });
