const {fromSecondsToMinutes,fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds} = require('./TimeConverter')



describe("Array", function () {
    describe("TaskMinToSec", function () {
        it("Перевод секунд в минуты", function () {
            console.log(fromSecondsToMinutes(180))
        });
        it("Перевод секунд в часы", function () {
            console.log(fromSecondsToHours(7200))
        });
        it("Перевод часы в минуты", function () {
            console.log(fromHoursToMinutes(2))
        });
        it("Перевод часы в секунды", function () {
            console.log(fromHoursToSeconds(2))
        });
    });
});