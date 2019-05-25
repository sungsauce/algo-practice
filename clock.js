// Clock Minute Adder

// Given a time in string format HH:MM and a number of minutes,
// return the time given those minutes added to the base time.

// Assume you are working with a 12-hr clock
// Your output needs to maintain the input format HH:MM

function clock(time, minsToAdd) {
  const [hours, mins] = time.split(':')
  let timeInMins = hours * 60 + Number(mins) + Number(minsToAdd)
  let newHours = Math.floor(timeInMins / 60) % 12
  let newMins = timeInMins % 60 < 10 ? '0' + timeInMins % 60 : timeInMins % 60
  return newHours + ':' + newMins
}
