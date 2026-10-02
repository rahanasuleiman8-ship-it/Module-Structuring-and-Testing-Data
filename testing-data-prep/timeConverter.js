
// function formatAs12HourClock(time) {

//   const hours = Number(time.slice(0, 2));

//   if (hours > 12) {

//     return `${hours - 12}:00 pm`;
//   }

//   return `${hours} am`;
// }

// console.log(formatAs12HourClock("23:00"));
// console.log(formatAs12HourClock("14:00"));



function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

export {formatAs12HourClock}