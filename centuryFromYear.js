// Return the century of a year.
// E.g. 1801 = 19th Century

function centuryFromYear(year) {
  // divide the year by 100 to get the year
  // math.ceil to round up to the nearest 1 whole.
  return Math.ceil(year / 100)
}

console.log(centuryFromYear(2001))