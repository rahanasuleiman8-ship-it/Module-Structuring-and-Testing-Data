import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

describe("getCardValue", () => {
  test("Valid single-digit number cards return correct values", () => {
    expect(getCardValue("2♠")).toBe(2);
    expect(getCardValue("5♥")).toBe(5);
    expect(getCardValue("9♦")).toBe(9);
  });

  test("Valid double-digit card (10) returns 10", () => {
    expect(getCardValue("10♥")).toBe(10);
    expect(getCardValue("10♣")).toBe(10);
  });

  test("Ace cards return 11", () => {
    expect(getCardValue("A♠")).toBe(11);
    expect(getCardValue("A♦")).toBe(11);
  });

  test("Face cards (J, Q, K) return 10", () => {
    expect(getCardValue("J♣")).toBe(10);
    expect(getCardValue("Q♦")).toBe(10);
    expect(getCardValue("K♠")).toBe(10);
  });

  // Robust Error-Handling Tests using Jest's toThrow with Regex
  test("Throws error for arbitrary non-card string", () => {
    expect(() => getCardValue("invalid")).toThrow(/Expected a card rank followed by a suit/);
  });

  test("Throws error for invalid ranks or suit-like characters", () => {
    expect(() => getCardValue("1♠")).toThrow(/Expected a card rank followed by a suit/);
    expect(() => getCardValue("11♥")).toThrow(/Expected a card rank followed by a suit/);
    expect(() => getCardValue("Z♠")).toThrow(/Expected a card rank followed by a suit/);
  });

  test("Throws error for invalid or missing suit", () => {
    expect(() => getCardValue("10")).toThrow(/Expected a card rank followed by a suit/);
    expect(() => getCardValue("AX")).toThrow(/Expected a card rank followed by a suit/);
  });

  test("Throws error for reversed order (suit before rank)", () => {
    expect(() => getCardValue("♠A")).toThrow(/Expected a card rank followed by a suit/);
  });

  test("Throws error for empty string or non-string input", () => {
    expect(() => getCardValue("")).toThrow(/Expected a card rank followed by a suit/);
    expect(() => getCardValue(10)).toThrow(/Expected a string/);
  });
});