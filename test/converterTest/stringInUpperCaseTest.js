const stringInUpperCase = require('../../converter/stringInUpperCase');

describe("stringConverter", function () {
        it("convert of string in upper case ", function () {
            const result = stringInUpperCase('the quick brown fox');
            console.log(result)
        });
    });
