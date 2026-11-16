import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

// Acute Angles (0° < angle < 90°)
test("Classifies acute angles", () => {
  assert.equal(getAngleType(1), "Acute angle");
  assert.equal(getAngleType(45), "Acute angle");
  assert.equal(getAngleType(89.9), "Acute angle");
});

// Right Angles (angle === 90°)
test("Classifies right angles", () => {
  assert.equal(getAngleType(90), "Right angle");
});

// Obtuse Angles (90° < angle < 180°)
test("Classifies obtuse angles", () => {
  assert.equal(getAngleType(90.1), "Obtuse angle");
  assert.equal(getAngleType(135), "Obtuse angle");
  assert.equal(getAngleType(179.9), "Obtuse angle");
});

// Straight Angles (angle === 180°)
test("Classifies straight angles", () => {
  assert.equal(getAngleType(180), "Straight angle");
});

// Reflex Angles (180° < angle < 360°)
test("Classifies reflex angles", () => {
  assert.equal(getAngleType(180.1), "Reflex angle");
  assert.equal(getAngleType(270), "Reflex angle");
  assert.equal(getAngleType(359.9), "Reflex angle");
});

// Invalid & Boundary Cases (<= 0° or >= 360°)
test("Classifies invalid angles and exact boundaries", () => {
  assert.equal(getAngleType(0), "Invalid angle");
  assert.equal(getAngleType(-45), "Invalid angle");
  assert.equal(getAngleType(360), "Invalid angle");
  assert.equal(getAngleType(400), "Invalid angle");
});
