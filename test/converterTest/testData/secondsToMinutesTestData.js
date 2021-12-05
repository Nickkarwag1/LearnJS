const SECONDS_TO_MINUTES_TEST_DATA = [
    {seconds: 60, expectedMinutes :1},
    {seconds: 120, expectedMinutes:2},
    {seconds: 180, expectedMinutes:3}
];

const SECONDS_TO_MINUTES_INVALID_DATA= [
    {data: "", expectedResult : undefined},
    {data: {}, expectedResult: undefined},
    {data: [], expectedResult:undefined},
    {data: null, expectedResult:undefined},
    {data: undefined, expectedResult:undefined},
    {data: NaN, expectedResult:undefined},
];

module.exports = {SECONDS_TO_MINUTES_TEST_DATA, SECONDS_TO_MINUTES_INVALID_DATA};
