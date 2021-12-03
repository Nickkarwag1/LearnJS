const {fromSecondsToMinutes,fromSecondsToHours, fromHoursToMinutes, fromHoursToSeconds,} = require('../../tasks/converter/timeConverter')
const expect = require('expect.js');
const secondsToMinutesTestData = require('./secondsToMinutesTestData')

    describe("timeConverter", function () {
        secondsToMinutesTestData.forEach(({seconds, expectedMinutes}) => {
            it("conversion of seconds to minutes", function () {
                const expectedMinutes = 1;
                const minutes = fromSecondsToMinutes(60);
                expect(minutes).to.eql(expectedMinutes)
            });
        });

        it("conversion of seconds to hours", function () {
            const expectedHours = 1;
            const hours = fromSecondsToHours(3600);
            expect(hours).to.eql(expectedHours)
        });

        it("conversion of hours to minutes", function () {
            const expectedMinutes = 60;
            const minutes = fromHoursToMinutes(1);
            expect(minutes).to.eql(expectedMinutes)
        });

        it("conversion of hours to seconds", function () {
            const expectedSeconds = 3600;
            const seconds = fromHoursToSeconds(1);
            expect(seconds).to.eql(expectedSeconds)
        });
    });
