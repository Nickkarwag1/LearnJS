const expect = require("expect.js");
const {fromHoursToMinutes, fromSecondsToMinutes} = require("../../converter/timeConverter");
const {HOURS_TO_MINUTES_TEST_DATA, HOURS_TO_MINUTES_INVALID_DATA} = require("./testData/hoursToMinutesTestData");

describe("timeConverter", function () {
    HOURS_TO_MINUTES_TEST_DATA.forEach(({hours,expectedMinutes}) => {
        it("conversion of hours to minutes should be successful ", function () {
            const expectedMinutes = 60;
            const minutes = fromHoursToMinutes(1);
            expect(minutes).to.eql(expectedMinutes);
        });
    });

    HOURS_TO_MINUTES_INVALID_DATA.forEach(({data, expectedResult})=>{
        it("conversion of hours to minutes should return undefined", function () {
            const result = fromSecondsToMinutes(data);
            expect(result).to.eql(expectedResult);
        });
    });
});
