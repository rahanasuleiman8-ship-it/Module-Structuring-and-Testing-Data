// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";

// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: handle count of 1:
test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

// Case: Handle count of 0:
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: Handle empty string edge case:
test("should return an empty string when given an empty string input", () => {
  expect(repeatStr("", 5)).toEqual("");
});

// Case: Handle negative count:
test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -1;
  expect(() => repeatStr(str, count)).toThrow();
});