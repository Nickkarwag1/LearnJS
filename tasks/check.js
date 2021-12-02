const {fromSecondsToMinutes,fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds, RandomNumber} = require('./timeConverter')



    describe("timeConverter", function () {
        it("Перевод секунд в минуты", function () {
            console.log(fromSecondsToMinutes(RandomNumber))
        });
        it("Перевод секунд в часы", function () {
            console.log(fromSecondsToHours(RandomNumber))
        });
        it("Перевод часы в минуты", function () {
            console.log(fromHoursToMinutes(RandomNumber))
        });
        it("Перевод часы в секунды", function () {
            console.log(fromHoursToSeconds(RandomNumber))
        });
    });
