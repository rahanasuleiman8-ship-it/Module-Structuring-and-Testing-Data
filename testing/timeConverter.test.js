import {formatAs12HourClock} from '../testing-data-prep/timeConverter.js';
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function() {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function() {
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

// test("can correctly convert midnight", function(){
//     assert.equal(formatAs12HourClock("00:00"),"12:00 am");
// });