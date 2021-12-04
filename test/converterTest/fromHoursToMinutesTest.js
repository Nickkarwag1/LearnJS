const expect = require("expect.js");
const {fromHoursToMinutes} = require("../../converter/timeConverter");


describe("timeConverter", function () {
    it("conversion of hours to minutes", function () {
        const expectedMinutes = 60;
        const minutes = fromHoursToMinutes(1);
        expect(minutes).to.eql(expectedMinutes);
    });

});
