import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

describe("getAngleType", () => {
  test("Classifies acute angles", () => {
    assert.strictEqual(getAngleType(1), "Acute angle");
    assert.strictEqual(getAngleType(45), "Acute angle");
    assert.strictEqual(getAngleType(89), "Acute angle");
    assert.strictEqual(getAngleType(89.9), "Acute angle");
  });

  test("Classifies right angles", () => {
    assert.strictEqual(getAngleType(90), "Right angle");
  });

  test("Classifies obtuse angles", () => {
    assert.strictEqual(getAngleType(90.1), "Obtuse angle");
    assert.strictEqual(getAngleType(135), "Obtuse angle");
    assert.strictEqual(getAngleType(179.9), "Obtuse angle");
  });

  test("Classifies straight angles", () => {
    assert.strictEqual(getAngleType(180), "Straight angle");
  });

  test("Classifies reflex angles", () => {
    assert.strictEqual(getAngleType(180.1), "Reflex angle");
    assert.strictEqual(getAngleType(270), "Reflex angle");
    assert.strictEqual(getAngleType(359.9), "Reflex angle");
  });

  test("Classifies invalid angles and exact boundaries", () => {
    assert.strictEqual(getAngleType(0), "Invalid angle");
    assert.strictEqual(getAngleType(-45), "Invalid angle");
    assert.strictEqual(getAngleType(360), "Invalid angle");
    assert.strictEqual(getAngleType(400), "Invalid angle");
  });
});
