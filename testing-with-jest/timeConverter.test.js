
test("correctly convert time after 12:00", () => {
  expect(formatAs12HourClock("23:00")).toEqual("11:00 pm");
});

test("correctly convert time after 12:00", () => {
  expect(formatAs12HourClock("23:00")).toBeGreaterThan("11:00 pm");
});

test("correctly convert time after 12:00", () => {
  expect(formatAs12HourClock("23:00")).toBeCloseTo("11:00 pm");
});

test("correctly convert time after 12:00", () => {
  expect(formatAs12HourClock("23:00")).not.toBeNull("11:00 pm");
});