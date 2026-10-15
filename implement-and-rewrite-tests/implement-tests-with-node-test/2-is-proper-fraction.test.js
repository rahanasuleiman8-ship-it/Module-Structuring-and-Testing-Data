import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?


test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
  assert.equal(isProperFraction(3, 4), true);
});

test("Improper fraction where numerator is larger than denominator", () => {
  assert.equal(isProperFraction(5, 2), false);
  assert.equal(isProperFraction(4, 3), false);
});

test("Equal numerator and denominator (equals 1)", () => {
  assert.equal(isProperFraction(3, 3), false);
});

test("Denominator is zero", () => {
  assert.equal(isProperFraction(1, 0), false);
  assert.equal(isProperFraction(0, 0), false);
});

test("Zero numerator with non-zero denominator", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("Negative numbers", () => {
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(-3, -2), false);
});