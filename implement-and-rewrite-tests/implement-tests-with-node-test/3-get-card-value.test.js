import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

describe("getCardValue", () => {
  test("Valid single-digit number cards return correct values", () => {
    assert.strictEqual(getCardValue("2♠"), 2);
    assert.strictEqual(getCardValue("5♥"), 5);
    assert.strictEqual(getCardValue("9♦"), 9);
  });

  test("Valid double-digit card (10) returns 10", () => {
    assert.strictEqual(getCardValue("10♥"), 10);
    assert.strictEqual(getCardValue("10♣"), 10);
  });

  test("Ace cards return 11", () => {
    assert.strictEqual(getCardValue("A♠"), 11);
    assert.strictEqual(getCardValue("A♦"), 11);
  });

  test("Face cards (J, Q, K) return 10", () => {
    assert.strictEqual(getCardValue("J♣"), 10);
    assert.strictEqual(getCardValue("Q♦"), 10);
    assert.strictEqual(getCardValue("K♠"), 10);
  });

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
});
