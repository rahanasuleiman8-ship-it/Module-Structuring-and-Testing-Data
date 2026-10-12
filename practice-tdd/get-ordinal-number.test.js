import { getOrdinalNumber } from "./get-ordinal-number.js";

// Case 1: Numbers ending with 1 (except 11)
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Case 2: Numbers ending with 2 (except 12)
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

// Case 3: Numbers ending with 3 (except 13)
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

// Case 4: Teen numbers (11, 12, 13) and numbers ending in them
test("should append 'th' for teen numbers 11, 12, 13 and their multiples", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

// Case 5: All other digits (0, 4, 5, 6, 7, 8, 9)
test("should append 'th' for all other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(105)).toEqual("105th");
});