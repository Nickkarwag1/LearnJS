const expect = require("expect.js");
const {fromSecondsToHours} = require("../../converter/timeConverter");

describe("timeConverter", function () {
it("conversion of seconds to hours", function () {
    const expectedHours = 1;
    const hours = fromSecondsToHours(3600);
    expect(hours).to.eql(expectedHours);
});
});
