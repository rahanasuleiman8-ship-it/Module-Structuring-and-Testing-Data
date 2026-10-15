import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.


// Case 1: Ace (A)
test("Should return 11 when given an ace card", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
});

// Case 2: Number Cards (2-10)
test("Should return numeric value for single-digit number cards", () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("9♦")).toEqual(9);
});

test("Should return 10 for '10' cards across all suits", () => {
  expect(getCardValue("10♥")).toEqual(10);
  expect(getCardValue("10♣")).toEqual(10);
});

// Case 3: Face Cards (J, Q, K)
test("Should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Invalid Cards
test("Should throw an error for arbitrary non-card strings", () => {
  expect(() => getCardValue("invalid")).toThrow();
});

test("Should throw an error for invalid ranks or suit-like characters", () => {
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♥")).toThrow();
  expect(() => getCardValue("Z♠")).toThrow();
});

test("Should throw an error for missing or invalid suit", () => {
  expect(() => getCardValue("10")).toThrow();
  expect(() => getCardValue("AX")).toThrow();
});

test("Should throw an error when suit is before rank", () => {
  expect(() => getCardValue("♠A")).toThrow();
});

test("Should throw an error for non-string or empty inputs", () => {
  expect(() => getCardValue("")).toThrow();
  expect(() => getCardValue(10)).toThrow();
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
