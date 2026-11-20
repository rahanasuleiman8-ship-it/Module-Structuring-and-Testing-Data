import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

describe("getAngleType", () => {
  // Acute Angles (0° < angle < 90°)
  test("Classifies acute angles", () => {
    expect(getAngleType(1)).toEqual("Acute angle");
    expect(getAngleType(45)).toEqual("Acute angle");
    expect(getAngleType(89)).toEqual("Acute angle");
    expect(getAngleType(89.9)).toEqual("Acute angle");
  });

  // Right Angles (angle === 90°)
  test("Classifies right angles", () => {
    expect(getAngleType(90)).toEqual("Right angle");
  });

  // Obtuse Angles (90° < angle < 180°)
  test("Classifies obtuse angles", () => {
    expect(getAngleType(90.1)).toEqual("Obtuse angle");
    expect(getAngleType(135)).toEqual("Obtuse angle");
    expect(getAngleType(179.9)).toEqual("Obtuse angle");
  });

  // Straight Angles (angle === 180°)
  test("Classifies straight angles", () => {
    expect(getAngleType(180)).toEqual("Straight angle");
  });

  // Reflex Angles (180° < angle < 360°)
  test("Classifies reflex angles", () => {
    expect(getAngleType(180.1)).toEqual("Reflex angle");
    expect(getAngleType(270)).toEqual("Reflex angle");
    expect(getAngleType(359.9)).toEqual("Reflex angle");
  });

  // Invalid & Boundary Cases (<= 0° or >= 360°)
  test("Classifies invalid angles and exact boundaries", () => {
    expect(getAngleType(0)).toEqual("Invalid angle");
    expect(getAngleType(-45)).toEqual("Invalid angle");
    expect(getAngleType(360)).toEqual("Invalid angle");
    expect(getAngleType(400)).toEqual("Invalid angle");
  });
});