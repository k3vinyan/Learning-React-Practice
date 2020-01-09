serializeClockTime - Takes a date object and returns a object for clock time that contains hours minutes and seconds

CivilianHours - Take the clock time object and returns an object where hours are converted to civilian time.  For example: 1300 becomes 1o’clock

appendAMPM - takes the clock time object and appends time of day, AM or PM, to that object

Display - take a large function and returns a function that will send a time to the target.  In this example the target will be console.log

formatClock - Takes a template string and uses it to return clock time formatted based upon the criteria from the ring.  In this example, the template is “hh:mm:ss tt.” From there, formatClock will replaces the placeholders with hours, minutes, seconds, and time of day.

prependZero - Takes an object’s key as an argument and prepends a zero to the value stored under that objects key.  It takes in a key to a specify field and prepends values with a zero if the value is less than 10.

convertToCivilianTime - A single function that will take clock time as an argument and transforms it into civilian time by using both civilian hours

doubleDigits - A single function that will take civilian clock time and make sure the hours, minutes, and seconds display double digits by prepending zeros where needed

startTicking - Starts the clock by setting an interval that will invoke a callback every second.  The callback is composed using all of our functions.  Every second the console is cleared, currentTime obtained, converted, civilianized, formatted, and displayed.