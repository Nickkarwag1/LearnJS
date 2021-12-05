const findLongWord = require("../../str/findLongWord");

describe("String", function () {
    it("Find the longest word within the string. ", function () {
        const result = findLongWord('Web Development Tutorial')
        console.log(result)
    });
});