import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Positive numbers
test("should return true when positive numerator is less than positive denominator", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

test("should return false when positive numerator is equal to or greater than positive denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Special case: numerator is zero

test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

test("should return true when numerator is zero and denominator is non-zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});

// Negative numbers
test("should return true when absolute value of numerator is less than denominator", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});

test("should return false when absolute value of numerator is equal to or greater than denominator", () => {
  expect(isProperFraction(-5, 2)).toEqual(false);
  expect(isProperFraction(5, -2)).toEqual(false);
  expect(isProperFraction(-3, -3)).toEqual(false);
});
