const expect = require("expect.js");
const {fromSecondsToHours, fromSecondsToMinutes} = require("../../converter/timeConverter");
const {SECONDS_TO_HOURS_TEST_DATA, SECONDS_TO_HOURS_INVALID_DATA} = require("./testData/secondsToHoursTestData");

describe("timeConverter", function () {
   SECONDS_TO_HOURS_TEST_DATA.forEach(({seconds,expectedHours}) => {
     it("conversion of seconds to hours should be successful", function () {
        const expectedHours = 1;
        const hours = fromSecondsToHours(3600);
        expect(hours).to.eql(expectedHours);
        });
    });

   SECONDS_TO_HOURS_INVALID_DATA.forEach(({data, expectedResult})=>{
        it("conversion of seconds to hours should return undefined", function () {
            const result = fromSecondsToMinutes(data);
            expect(result).to.eql(expectedResult);
        });
    });
});