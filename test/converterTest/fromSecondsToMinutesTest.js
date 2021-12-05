const expect = require('expect.js');
const {SECONDS_TO_MINUTES_TEST_DATA, SECONDS_TO_MINUTES_INVALID_DATA} = require("./testData/secondsToMinutesTestData");
const {fromSecondsToMinutes} = require("../../converter/timeConverter");

describe("timeConverter", function () {
    SECONDS_TO_MINUTES_TEST_DATA.forEach(({seconds, expectedMinutes}) => {
        it("conversion of seconds to minutes should be successful", function () {
            const expectedMinutes = 1;
            const minutes = fromSecondsToMinutes(60);
            expect(minutes).to.eql(expectedMinutes);
        });
    });

    SECONDS_TO_MINUTES_INVALID_DATA.forEach(({data, expectedResult})=>{
        it("conversion of seconds to minutes should return undefined", function () {
            const result = fromSecondsToMinutes(data);
            expect(result).to.eql(expectedResult);
        });
    });

});


