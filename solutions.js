/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Abcedi Ilacas
 *      Student ID: 138 180 211
 *      Date: 22/01/24
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the src/problem-00.test.js file.
 * Start by reading the comment at the top of that file, then come back here and
 * continue.
 *
 * Make sure you have completed the necessary Setup (install node.js, run `npm install`
 * before continuing).  The rest of the instructions assume that you have done this.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, go to your terminal and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this problem instead of everything. To do that:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one fails:
 *
 * ✕ greeting should return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the second test 'greeting should return the correct string output'
 * is failing. In particular, it's failing because it expected to get the string
 * "Hello WEB222 Student!" but instead it actually received the string "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it below, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment, and also read the tests
 * to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell us the type (e.g., {string} or {number}), and also the parameter's name.
 * We also indicate the return type for functions.
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}

/*******************************************************************************
 * Problem 1: convert strings in kebab-case to lowerCamelCase or UpperCamelCase.
 *
 * HTML and CSS developers often use kebab-case when naming classes or ids. In
 * JavaScript, we use lowerCamelCase (first letter lower case) or UpperCamelCase
 * (first letter Upper case) instead.
 *
 * You will write a function named toCamelCase() that accepts a string argument
 * and converts it from kebab-case to camelCase.  The optional second argument
 * determines whether or not to produce UpperCamelCase or not.
 *
 * The toCamelCase() function should work like this:
 *
 * toCamelCase('variable') returns 'variable'
 * toCamelCase('variable-name') returns 'variableName'
 * toCamelCase('variable-name', true) returns 'VariableName' ()
 * toCamelCase('long-variable-name') returns 'longVariableName'
 * toCamelCase('multiple---dashes') returns 'multipleDashes'
 *
 * Hint:
 *
 * The String methods toUpperCase(), toLowerCase(), split(), and slice()
 * would be helpful for this.
 *
 * @param {string} name - a string variable name to be converted
 * @param {boolean} uppercase - (optional) whether to convert to UpperCamelCase
 *                              defaults to `false`
 * @return {string} - the converted camelCase version of the variable name
 ******************************************************************************/

function toCamelCase(name, uppercase) {
  let words = name.split('-');

  if (words.length === 0) {
    return name;
  }

  for (let i = (uppercase ? 0 : 1); i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  let final = words.join('');

  if (!uppercase && final.length > 0) {
    final = final.charAt(0).toLowerCase() + final.slice(1);
  }

  return final;
}

/*******************************************************************************
 * Problem 2: create an HTML <link> element with the given href and rel values.
 *
 * In HTML, a <link> element is used to link to external stylesheets, establish
 * icon for web page, etc. For example: to link a CSS stylesheet, we would use
 * the following <link> tag:
 *
 *   <link rel="stylesheet" href="styles.css">
 *
 * See the following for more details about the <link> tag:
 *
 *  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 *
 * Write a function named createLinkTag() which accepts both rel and href values.
 * It should use these values to produce a new <link> tag string. For example:
 *
 * createLinkTag('stylesheet', 'styles.css')
 *
 * should return the following string of HTML:
 *
 * '<link rel="stylesheet" href="styles.css">'
 *
 * Make sure you remove any leading or trailing whitespace from the rel and href
 * values before you use them.
 *
 * createLinkTag('stylesheet', '          styles.css              ')
 *
 * should return the following string of HTML:
 *
 * '<link rel="stylesheet" href="styles.css">'
 *
 * Also, the double-quotes around rel and href are optional if the value
 * does NOT contain any of the following characters: space, tab, new line, line feed:
 *
 * '<link rel="stylesheet" href="styles.css">'
 * '<link rel=stylesheet href="styles.css">'
 *
 * When creating your string, only include double-quotes when necessary.
 *
 * Hint:
 *
 * You can use a Regular Expression to test for the special characters.
 * For example, /[bd]/.test("abcd") would return true, since both the
 * characters b and d are present in the string "abcd".  Special characters
 * like a newline use an escape: \n
 *
 * @param {string} rel - the value for the rel attribute
 * @param {string} href - the value for the href attribute
 * @returns {string} - a properly formatted <link> tag
 ******************************************************************************/

function createLinkTag(rel, href) {
  let fixedRel = rel.trim();
  let fixedHref = href.trim();

  let specialChars = /[ \t\n\r]/;

  if (specialChars.test(fixedRel) || specialChars.test(fixedHref)) {
    fixedRel = `"${fixedRel}"`;
    fixedHref = `"${fixedHref}"`;
  }

  let linkElement = `<link rel=${fixedRel} href=${fixedHref}>`;

  return linkElement;
}

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted in one of the following formats:
 *
 * 1. YYYY/MM/DD
 * 2. DD/MM/YYYY
 *
 * Here, the Year (4 digits) may be listed first or last.  The Month (2 digits)
 * will always be in the middle position, and the Day (2 digits) will either
 * be last (when Year is first) or first (when Year is last).
 *
 * January 15, 2023 could therefore be represented in either of the following
 * formats:
 *
 * 2023/01/15
 * 15/01/2023
 *
 * Write a function, parseDateString() that accepts a date string of the formats
 * specified above, and returns a new JavaScript Date Object, set to the correct
 * day. Make sure that the `value` you are passed is a String before using it
 * and throw an error if it isn't (see below).
 *
 * In your solution, you will need to use use the following Date methods:
 *
 * - new Date() - creates a new Date Object
 * - setFullYear() - sets the Date Object's year value
 * - setMonth() - sets the Date Object's month value
 * - setDate() - sets the Date Object's day value
 *
 * To help developers using your function, you are also asked to provide detailed
 * error messages when the date string is formatted incorrectly.  We will use the
 * `throw` statement to throw a new Error object when a particular value is not
 * what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01/01/01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021/1/01') should fail because
 * the day is not 2 digits, and parseDateString('2021/01/1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also cause an exception to be thrown,
 * for example parseDateString(null) or parseDateString("this is totally wrong").
 *
 *
 * @param {string} value - a date string
 * @returns {Date}
 ******************************************************************************/

function parseDateString(value) {
  if (typeof value !== 'string') {
    throw new Error('invalid date string, expected a `YYYY/MM/DD` or `DD/MM/YYYY` formatted string');
  }

  let dateFormats = [{format: 'YYYY/MM/DD', regex: /^(\d{4})\/(\d{2})\/(\d{2})$/, yearIndex: 1, monthIndex: 2, dayIndex: 3}, {format: 'DD/MM/YYYY', regex: /^(\d{2})\/(\d{2})\/(\d{4})$/, yearIndex: 3, monthIndex: 2, dayIndex: 1}];

  let matchedFormat = dateFormats.find(dateFormat => dateFormat.regex.test(value));

  if (!matchedFormat) {
    throw new Error('invalid date string, expected a `YYYY/MM/DD` or `DD/MM/YYYY` formatted string');
  }

  let match = value.match(matchedFormat.regex);
  let parsedYear = parseInt(match[matchedFormat.yearIndex], 10);
  let parsedMonth = parseInt(match[matchedFormat.monthIndex], 10) - 1;
  let parsedDay = parseInt(match[matchedFormat.dayIndex], 10);

  let date = new Date();
  date.setFullYear(parsedYear);
  date.setMonth(parsedMonth);
  date.setDate(parsedDay);

  return date;
}

/*******************************************************************************
 * Problem 4: format a Date Object to use a given date string format.
 *
 * Building on your work in Problem 3 above, we want to be able to take a Date
 * object, and format it into a string using one of the following 3 formats:
 *
 * 1. YYYY/MM/DD
 * 2. DD/MM/YYYY
 * 3. MM/DD/YYYY
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object and a date string
 * format (e.g., "YYYY/MM/DD", "DD/MM/YYYY", or "MM/DD/YYYY"), and returns a date
 * string formatted according to the supplied format. Make sure your day and month
 * values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * If something other than a valid Date Object is passed as the first argument,
 * trying to call the Date methods will fail.  You should use try/catch and
 * throw a new Error object with an appropriate error message if this happens.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * If the date string format is not one of the 3 listed above, throw a new Error
 * with an appropriate error message explaining the problem.
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021/01/29), "YYYY/MM/DD") should return '2021/01/29'
 * toDateString(parseDateString('2021/01/29), "DD/MM/YYYY") should return '29/01/2021'
 * toDateString(parseDateString('29/01/2021), "MM/DD/YYYY") should return '01/29/2021'
 *
 * @param {Date} value - a Date Object to be formatted
 * @param {string} format - a format string, one of "YYYY/MM/DD", "DD/MM/YYYY", or "MM/DD/YYYY"
 * @returns {string} - the formatted date string
 ******************************************************************************/

function toDateString(value, format) {
  if (!(value instanceof Date)) {
    throw new Error('invalid date');
  }

  let validFormats = ['YYYY/MM/DD', 'DD/MM/YYYY', 'MM/DD/YYYY'];

  if (!validFormats.includes(format)) {
    throw new Error('invalid date');
  }

  let year = value.getFullYear();
  let month = value.getMonth() + 1;
  let day = value.getDate();

  switch (format) {
    case 'YYYY/MM/DD':
      return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    case 'DD/MM/YYYY':
      return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    case 'MM/DD/YYYY':
      return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    default:
      throw new Error('invalid date');
  }
}

/*******************************************************************************
 * Problem 5: parse a time from a digital clock
 *
 * A digital clock displays time in the format "HH:MM:SS". However, in a dataset
 * collected over the years, different authors have used slightly different
 * formats. Both of the following are valid and need to be parsed:
 *
 * 1. "01:30:00 PM"
 * 2. "13:30:00"
 *
 * In the first case, the values are followed by `AM` or `PM`. In the second, the values
 * are in 24-hour format.
 *
 * Valid Hour values are positive integers between 1 and 12 for AM/PM format and 0 and 23 for 24-hour format.
 *
 * Valid Minute and Second values are positive integers between 0 and 59.
 *
 * If the input is invalid, return the value null.
 *
 * Parse the value and return a new string in 24-hour format using the following form:
 *
 * "(hours, minutes, seconds)"
 *
 * @param {string} value - a time string in one of the given forms
 * @returns {string|null} - a 24-hour time formatted as "(hours, minutes, seconds)"
 *                          or `null` if the duration isn't valid/recognized
 */

function normalizeTime(value) {
  let timeRegex = /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9])\s?(AM|PM)?$/;
  let militaryTimeRegex = /^(0?[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
  let match = value.match(timeRegex);
  let doesMatch = true;

  if (!match) {
    match = value.match(militaryTimeRegex);
    doesMatch = false;
  }

  if (match) {
    let hours = parseInt(match[1], 10);
    let minutes = parseInt(match[2], 10);
    let seconds = parseInt(match[3], 10);
    let period = match[4];

    if (doesMatch) {
      if (period === 'PM' && hours !== 12) {
        hours += 12;
      } 
      else if (period === 'AM' && hours === 12) {
        hours = 0;
      }
    }

    return `(${hours}, ${minutes}, ${seconds})`;
  }

  return null;
}

/*******************************************************************************
 * Problem 6: format any number of times as a list in a string
 *
 * You are asked to format times (hour, min, sec) in a list using your
 * normalizeTime() function from problem 5.
 *
 * Where normalizeTime() takes a single duration string, the formatTimes()
 * function takes a list of *any* number of time strings, parses them,
 * filters out any invalid ones, and creates a list.
 *
 * For example: given the following times, "1:13:02" and "4:16:24 PM",
 * a new list would be created of the following form "((1, 13, 2), (16, 16, 24))".
 *
 * Notice how the list has been enclosed in [...] square brackets, and each
 * duration is separated by a comma and space.
 *
 * The formatTimes() function can take any number of arguments, but they must all
 * be strings. If any of the values can't be parsed by normalizeTime() (i.e., if
 * it returns null), skip the value. For example:
 *
 * formatDurations("1:13:02", "300:600:900", "4:16:24 PM") should return
 * "((1, 13, 2), (16, 16, 24))" and skip the invalid time.
 *
 * @param {number} arguments - any number of string duration arguments can be passed
 * @returns {string}
 ******************************************************************************/

function formatTimes(...values) {
  let formated = values
    .map(time => normalizeTime(time))
    .filter(time => time !== null)
    .join(', ');

  return `[${formated}]`;
}

/*******************************************************************************
 * Problem 7: determine the MIME type from a filename
 *
 * To identify the type of a file, the Operating System looks at the filename and
 * extension.  The OS needs to know the file type to open it with the correct
 * program.
 *
 * Write a function, mimeTypeFromFilename(), which should take a filename and return the
 * MIME type of the file it is (e.g., 'text/plain', 'image/jpeg', 'video/mp4', etc.),
 * based on the following extensions:
 *
 * - .txt --> 'text/plain'
 * - .html, .htm --> 'text/html'
 * - .css --> 'text/css'
 * - .js --> 'application/javascript'
 * - .jpg, .jpeg --> 'image/jpeg'
 * - .png --> 'image/png'
 * - .gif --> 'image/gif'
 * - .bmp --> 'image/bmp'
 * - .svg --> 'image/svg+xml'
 * - .json --> 'application/json'
 * - .xml --> 'application/xml'
 * - .csv --> 'text/csv'
 *
 * NOTE: any other extension should return 'application/octet-stream', to indicate that it is an
 * unknown file type. You should also use 'application/octet-stream' if the file has no extension.
 *
 * @param {string} filename - a filename
 * @returns {string}
 ******************************************************************************/

function mimeTypeFromFilename(filename) {
  switch (filename.split('.').pop()) {
    case 'txt':
      return 'text/plain';
    case 'html':
    case 'htm':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'js':
      return 'application/javascript';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'bmp':
      return 'image/bmp';
    case 'svg':
      return 'image/svg+xml';
    case 'json':
      return 'application/json';
    case 'xml':
      return 'application/xml';
    case 'csv':
      return 'text/csv';
    default:
      return 'application/octet-stream';
  }
}

/*******************************************************************************
 * Problem 8 - build a REST API endpoint
 *
 * Accessing a web data API over the internet often involves formatting a URL
 * for a specific REST API endpoint. As we know from week 1, a REST API endpoint
 * is a specific URL where an API can be accessed. For example:
 *
 *   /users/123 includes the resource type 'users' and the specific user id '123'
 *   /products/a1e56 includes the resource type 'products' and the product id 'a1e56'
 *
 * Write a buildApiEndpoint() function to build a REST API endpoint based on arguments
 * passed by the caller.
 *
 * The buildApiEndpoint() function accepts the following arguments:
 *
 * - resourceType: a string indicating the type of resource, for example "users" or "products"
 * - resourceId: a string or number indicating the specific resource id, for example "123" or 456
 * - extraData: (optional) a string representing additional information about the resource,
 *   which needs to be URI encoded
 *
 * Write an implementation of buildApiEndpoint() that accepts arguments for all of the above
 * parameters, validates them (e.g., all arguments must be provided and non-empty), and returns
 * a properly formatted API endpoint.
 *
 * For example:
 *
 * buildApiEndpoint('users', '123') would return the following API endpoint:
 *
 * '/users/123'
 *
 * buildApiEndpoint('users', '123', 'John Doe') would return the following API endpoint:
 *
 * '/users/123/John%20Doe'
 *
 * NOTE: if any of the values passed to buildApiEndpoint() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the extraData value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} resourceType the type of resource.
 * @param {string|number} resourceId the specific resource id.
 * @param {string} extraData (optional) additional information about the resource.
 * @returns {string} the properly formatted API endpoint
 ******************************************************************************/

function buildApiEndpoint(resourceType, resourceId, extraData) {
  if (!resourceType || !resourceId) {
    throw new Error('invalid');
  }

  if (extraData !== undefined && extraData.length === 0) {
    throw new Error('invalid');
  }

  let endpoint = `/${resourceType}/${resourceId}`;

  if (extraData !== undefined && extraData.length > 0) {
    let encodedExtraData = encodeURIComponent(extraData);
    endpoint += `/${encodedExtraData}`;
  }

  return endpoint;
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;
exports.buildApiEndpoint = buildApiEndpoint;
exports.toCamelCase = toCamelCase;
exports.createLinkTag = createLinkTag;
exports.parseDateString = parseDateString;
exports.toDateString = toDateString;
exports.normalizeTime = normalizeTime;
exports.formatTimes = formatTimes;
exports.mimeTypeFromFilename = mimeTypeFromFilename;
exports.buildApiEndpoint = buildApiEndpoint;
