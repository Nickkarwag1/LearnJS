const SECONDS_TO_HOURS_TEST_DATA = [
    {seconds: 3600, expectedHours:1},
    {seconds: 7200, expectedHours:2},
    {seconds: 10800, expectedHours:3}
];

const SECONDS_TO_HOURS_INVALID_DATA= [
    {data: "", expectedResult : undefined},
    {data: {}, expectedResult: undefined},
    {data: [], expectedResult:undefined},
    {data: null, expectedResult:undefined},
    {data: undefined, expectedResult:undefined},
    {data: NaN, expectedResult:undefined},
];

module.exports = {SECONDS_TO_HOURS_TEST_DATA, SECONDS_TO_HOURS_INVALID_DATA};