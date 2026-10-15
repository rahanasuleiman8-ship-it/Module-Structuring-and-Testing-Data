import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit number cards return correct values", () => {
  assert.equal(getCardValue("2♠"), 2);
  assert.equal(getCardValue("5♥"), 5);
  assert.equal(getCardValue("9♦"), 9);
});

test("Valid double-digit card (10) returns 10", () => {
  assert.equal(getCardValue("10♥"), 10);
  assert.equal(getCardValue("10♣"), 10);
});

test("Ace cards return 11", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("A♦"), 11);
});

test("Face cards (J, Q, K) return 10", () => {
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♦"), 10);
  assert.equal(getCardValue("K♠"), 10);
});

// Invalid Input Cases
test("Throws error for arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a card rank followed by a suit/
  );
});

test("Throws error for invalid ranks or suit-like characters", () => {
  assert.throws(
    () => getCardValue("1♠"),
    /Expected a card rank followed by a suit/
  );
  assert.throws(
    () => getCardValue("11♥"),
    /Expected a card rank followed by a suit/
  );
  assert.throws(
    () => getCardValue("Z♠"),
    /Expected a card rank followed by a suit/
  );
});

test("Throws error for invalid or missing suit", () => {
  assert.throws(
    () => getCardValue("10"),
    /Expected a card rank followed by a suit/
  );
  assert.throws(
    () => getCardValue("AX"),
    /Expected a card rank followed by a suit/
  );
});

test("Throws error for reversed order (suit before rank)", () => {
  assert.throws(
    () => getCardValue("♠A"),
    /Expected a card rank followed by a suit/
  );
});

test("Throws error for empty string or non-string input", () => {
  assert.throws(
    () => getCardValue(""),
    /Expected a card rank followed by a suit/
  );
  assert.throws(() => getCardValue(10), /Expected a string/);
});
