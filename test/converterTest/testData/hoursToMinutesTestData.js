const HOURS_TO_MINUTES_TEST_DATA = [
    {hours: 1, expectedMinutes: 60},
    {hours: 2, expectedMinutes: 120},
    {hours: 3, expectedMinutes: 180}
];

const HOURS_TO_MINUTES_INVALID_DATA= [
    {data: "", expectedResult : undefined},
    {data: {}, expectedResult: undefined},
    {data: [], expectedResult:undefined},
    {data: null, expectedResult:undefined},
    {data: undefined, expectedResult:undefined},
    {data: NaN, expectedResult:undefined},
];

module.exports = {HOURS_TO_MINUTES_TEST_DATA, HOURS_TO_MINUTES_INVALID_DATA};