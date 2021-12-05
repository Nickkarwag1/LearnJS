const expect = require("expect.js");
const {fromHoursToSeconds, fromSecondsToMinutes} = require("../../converter/timeConverter");
const {HOURS_TO_SECONDS_TEST_DATA,HOURS_TO_SECONDS_INVALID_DATA} = require("./testData/hoursToSecondsTestData");

describe("timeConverter", function () {
    HOURS_TO_SECONDS_TEST_DATA.forEach(({hours,expectedSeconds}) => {
        it("conversion of hours to seconds should be successful", function () {
            const expectedSeconds = 3600;
            const seconds = fromHoursToSeconds(1);
            expect(seconds).to.eql(expectedSeconds)
        });
    });

    HOURS_TO_SECONDS_INVALID_DATA.forEach(({data, expectedResult})=>{
        it("conversion of hours to seconds should return undefined", function () {
            const result = fromSecondsToMinutes(data);
            expect(result).to.eql(expectedResult);
        });
    });
});
