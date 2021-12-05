const HOURS_TO_SECONDS_TEST_DATA = [
    {hours: 1, expectedSeconds: 3600},
    {hours: 2, expectedSeconds: 7200},
    {hours: 3, expectedSeconds: 10800}
];

const HOURS_TO_SECONDS_INVALID_DATA= [
    {data: "", expectedResult : undefined},
    {data: {}, expectedResult: undefined},
    {data: [], expectedResult:undefined},
    {data: null, expectedResult:undefined},
    {data: undefined, expectedResult:undefined},
    {data: NaN, expectedResult:undefined},
];

module.exports = {HOURS_TO_SECONDS_TEST_DATA, HOURS_TO_SECONDS_INVALID_DATA};