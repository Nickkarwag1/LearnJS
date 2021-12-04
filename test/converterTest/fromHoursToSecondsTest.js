const expect = require("expect.js");
const {fromHoursToSeconds} = require("../../converter/timeConverter");
describe("timeConverter", function () {

    it("conversion of hours to seconds", function () {
        const expectedSeconds = 3600;
        const seconds = fromHoursToSeconds(1);
        expect(seconds).to.eql(expectedSeconds)
    });
});
