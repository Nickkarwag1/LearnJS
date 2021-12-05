const DATA_TYPES = require("../constants/dataTypes");

const {NUMBER} = DATA_TYPES;

function isNumber(num){
    return typeof num === NUMBER;
}
module.exports = isNumber;
