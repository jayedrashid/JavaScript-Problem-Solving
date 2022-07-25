// *** String Problems ***
// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php



// Problem 1:
// Write a JavaScript function to check whether an `input` is a string or not.

// is_string = function (input) {
//   if (Object.prototype.toString.call(input) === "[object String]") return true;
//   else return false;
// };

// console.log(is_string("w3resource"));   // true
// console.log(is_string([1, 2, 4, 0]));   // false





// Problem 2:
// Write a JavaScript function to check whether a string is blank or not.

// isBlank = function (input) {
//     if (input.length === 0)
//         return true;
//     else
//         return false;
// }

// console.log(isBlank(''));          // true
// console.log(isBlank('abc'));       // false





// Problem 3:
// Write a JavaScript function to split a string and convert it into an array of words.

// stringToArray = function (str) {
//     return str.trim().split(" ");
// };

// console.log(stringToArray("Robin Singh"));    // [ 'Robin', 'Singh' ]





// Problem 4:
// Write a JavaScript function to extract a specified number of characters from a string.

// truncateString = function (str1, length) {
//     if ((str1.constructor === String) && (length>0)) {
//         return str1.slice(0, length);
//     }
// };

// console.log(truncateString("Robin Singh",4));       // Robi






// Problem 5:
// Write a JavaScript function to convert a string in abbreviated form.

// abbrev_name = function (str1) {
//     var split_names = str1.trim().split(" ");
//     if (split_names.length > 1) {
//         return (split_names[0] + " " + split_names[1].charAt(0) + ".");
//     }
//     return split_names[0];
// };

// console.log(abbrev_name("Robin Singh"));    // Robin S.





// Problem 6:
// Write a JavaScript function to hide email addresses to protect from unauthorized user.

// protect_email = function (user_email) {
//     var avg, splitted, part1, part2;
//     splitted = user_email.split("@");
//     part1 = splitted[0];
//     avg = part1.length / 2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + "...@" + part2;
// };

// console.log(protect_email("robin_singh@example.com"));      // robin...@example.com





// Problem 7:
// Write a JavaScript function to parameterize a string.

// string_parameterize = function (str1) {
//     return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
// };

// console.log(string_parameterize("Robin Singh from USA."));      // robin-singh-from-usa





// Problem 8:
// Write a JavaScript function to capitalize the first letter of a string.

// capitalize = function (str1) {
//     return str1.charAt(0).toUpperCase() + str1.slice(1);
// }

// console.log(capitalize('js string exercises'));     // Js string exercises





// Problem 9:
// Write a JavaScript function to capitalize the first letter of each word in a string. 

//capitalize_Words 
// function capitalize_Words(str) {
//     return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// }

// console.log(capitalize_Words('js string exercises'));       // Js String Exercises





// Problem 10:
// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 

// swapcase = function swapcase(str) {
//     return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
//         return chr ? match.toUpperCase() : match.toLowerCase();
//     });
// }

// console.log(swapcase('AaBbc'));     // aAbBC





// Problem 11:
// Write a JavaScript function to convert a string into camel case.

// camelize = function camelize(str) {
//     return str.replace(/\W+(.)/g, function (match, chr) {
//         return chr.toUpperCase();
//     });
// }

// console.log(camelize("JavaScript Exercises"));      // JavaScriptExercises
// console.log(camelize("JavaScript exercises"));      // JavaScriptExercises
// console.log(camelize("JavaScriptExercises"));       // JavaScriptExercises





// Problem 12:
// Write a JavaScript function to uncamelize a string.

// function uncamelize(str, separator) {
//     // Assume default separator is a single space.
//     if (typeof (separator) == "undefined") {
//         separator = " ";
//     }
//     // Replace all capital letters by separator followed by lowercase one
//     var str = str.replace(/[A-Z]/g, function (letter) {
//         return separator + letter.toLowerCase();
//     });
//     // Remove first separator
//     return str.replace("/^" + separator + "/", '');
// }
// console.log(uncamelize('helloWorld'));          // hello world
// console.log(uncamelize('helloWorld', '-'));     // hello-world
// console.log(uncamelize('helloWorld', '_'));     // hello_world





// Problem 13:
// Write a JavaScript function to concatenates a given string n times (default is 1).

// repeat = function repeat(str, count) {
//     if (typeof (count) == "undefined") {
//         count = 1;
//     }
//     return count < 1 ? '' : new Array(count + 1).join(str);
// }
// console.log(repeat('Ha!'));         // Ha!
// console.log(repeat('Ha!', 2));      // Ha!Ha!
// console.log(repeat('Ha!', 3));      // Ha!Ha!Ha!





// Problem 14:
// Write a JavaScript function to insert a string within a string at a particular position (default is 1).

// insert = function insert(main_string, ins_string, pos) {
//     if (typeof (pos) == "undefined") {
//         pos = 0;
//     }
//     if (typeof (ins_string) == "undefined") {
//         ins_string = '';
//     }
//     return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
// }

// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

// // We are doing some exercises.
// // JavaScript We are doing some exercises.
// // We are doing some JavaScript exercises.






// Problem 15:
// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

// humanize_format = function humanize(num) {
//     if (typeof (num) == "undefined") return;
//     if (num % 100 >= 11 && num % 100 <= 13)
//         return num + "th";

//     switch (num % 10) {
//         case 1: return num + "st";
//         case 2: return num + "nd";
//         case 3: return num + "rd";
//     }
//     return num + "th";
// }

// console.log(humanize_format());     // undefined
// console.log(humanize_format(1));     // 1st
// console.log(humanize_format(8));     // 8th
// console.log(humanize_format(301));     // 301st
// console.log(humanize_format(402));     // 402nd





// Problem 16:
// Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

// text_truncate = function (str, length, ending) {
//     if (length == null) {
//         length = 100;
//     }
//     if (ending == null) {
//         ending = '...';
//     }
//     if (str.length > length) {
//         return str.substring(0, length - ending.length) + ending;
//     } else {
//         return str;
//     }
// };

// console.log(text_truncate('We are doing JS string exercises.'));
// console.log(text_truncate('We are doing JS string exercises.', 19));
// console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));

// // We are doing JS string exercises.
// // We are doing JS ...
// // We are doing !!





// Problem 17:
// Write a JavaScript function to chop a string into chunks of a given length.

// string_chop = function (str, size) {
//     if (str == null) return [];
//     str = String(str);
//     size = ~~size;
//     return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
// }

// console.log(string_chop('w3resource'));         // [ 'w3resource' ]
// console.log(string_chop('w3resource', 2));      // [ 'w3', 're', 'so', 'ur', 'ce' ]
// console.log(string_chop('w3resource', 3));      // [ 'w3r', 'eso', 'urc', 'e' ]





// Problem 18:
// Write a JavaScript function to count the occurrence of a substring in a string.

// function count(main_str, sub_str) {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) {
//         return main_str.length + 1;
//     }

//     subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// }

// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));   // 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));    // 1




// Problem 19:
// Write a JavaScript function to escape a HTML string.

// function escape_HTML(html_str) {
//     'use strict';

//     return html_str.replace(/[&<>"]/g, function (tag) {
//         var chars_to_replace = {
//             '&': '&',
//             '<': '<',
//             '>': '>',
//             '"': '"'
//         };

//         return chars_to_replace[tag] || tag;
//     });
// }

// console.log(escape_HTML('&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;'));

// // &lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;





// Problem 20:
// Write a JavaScript function that can pad (left, right) a string to get to a determined length.

// function formatted_string(pad, user_str, pad_pos) {
//     if (typeof user_str === 'undefined')
//         return pad;
//     if (pad_pos == 'l') {
//         return (pad + user_str).slice(-pad.length);
//     }
//     else {
//         return (user_str + pad).substring(0, pad.length);
//     }
// }

// console.log(formatted_string('0000', 123, 'l'));        // 0123
// console.log(formatted_string('00000000', 123, ''));     // 12300000




// Problem 21:
// Write a JavaScript function to repeat a string a specified times.

// function repeat_string(string, count) {
//     if ((string == null) || (count < 0) || (count === Infinity) || (count == null)) {
//         return ('Error in string or count.');
//     }
//     count = count | 0; // Floor count.
//     return new Array(count + 1).join(string);
// }

// console.log(repeat_string('a', 4));     // aaaa
// console.log(repeat_string('a'));        // Error in string or count.
// console.log(repeat_string('a', -2));            // Error in string or count.
// console.log(repeat_string('a', Infinity));      // Error in string or count.





// Problem 22:
// Write a JavaScript function to get a part of a string after a specified character.

// function subStrAfterChars(str, char, pos) {
//     if (pos == 'b')
//         return str.substring(str.indexOf(char) + 1);
//     else if (pos == 'a')
//         return str.substring(0, str.indexOf(char));
//     else
//         return str;
// }

// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));

// // w3resource
// // xercises




// Problem 23:
// Write a JavaScript function to strip leading and trailing spaces from a string.

// function strip(str) {
//     return str.replace(/^\s+|\s+$/g, '');
// }

// console.log(strip('w3resource '));      // w3resource
// console.log(strip(' w3resource'));      // w3resource
// console.log(strip(' w3resource  '));    // w3resource




// Problem 24:
// Write a JavaScript function to truncate a string to a certain number of words.

// function truncate(str, no_words) {
//     return str.split(" ").splice(0, no_words).join(" ");
// }

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// // The quick brown fox




// Problem 25:
// Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.

// function alphabetize_string(str) {
//     return str.split('').sort().join('').trim();
// }

// console.log(alphabetize_string('United States'));   // SUadeeinsttt





// Problem 26:
// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

// function removeFirstOccurrence(str, searchstr) {
//     var index = str.indexOf(searchstr);
//     if (index === -1) {
//         return str;
//     }
//     return str.slice(0, index) + str.slice(index + searchstr.length);
// }

// console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));

// // The quick brown fox jumps over  lazy dog





// Problem 27:
// Write a JavaScript function to convert ASCII to Hexadecimal format.

// function ascii_to_hexa(str) {
//     var arr1 = [];
//     for (var n = 0, l = str.length; n < l; n++) {
//         var hex = Number(str.charCodeAt(n)).toString(16);
//         arr1.push(hex);
//     }
//     return arr1.join('');
// }

// console.log(ascii_to_hexa('12'));       // 3132
// console.log(ascii_to_hexa('100'));      // 313030




// Problem 28:
// Write a JavaScript function to convert Hexadecimal to ASCII format.

// function hex_to_ascii(str1) {
//     var hex = str1.toString();
//     var str = '';
//     for (var n = 0; n < hex.length; n += 2) {
//         str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
//     }
//     return str;
// }
// console.log(hex_to_ascii('3132'));      // 12
// console.log(hex_to_ascii('313030'));    // 100






// Problem 29:
// Write a JavaScript function to find a word within a string.

// function search_word(text, word) {

//     var x = 0, y = 0;

//     for (i = 0; i < text.length; i++) {
//         if (text[i] == word[0]) {
//             for (j = i; j < i + word.length; j++) {
//                 if (text[j] == word[j - i]) {
//                     y++;
//                 }
//                 if (y == word.length) {
//                     x++;
//                 }
//             }
//             y = 0;
//         }
//     }
//     return "'" + word + "' was found " + x + " times.";
// }

// console.log(search_word('The quick brown fox', 'fox')); // 'fox' was found 1 times.
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));   // 'aa' was found 2 times.




// Problem 30:
// Write a JavaScript function check if a string ends with specified suffix.

// function string_endsWith(str, suffix) {
//     if (((str === null) || (str === '')) || ((suffix === null) || (suffix === ''))) {
//         return false;
//     }
//     else {
//         str = str.toString();
//         suffix = suffix.toString();
//     }
//     return str.indexOf(suffix, str.length - suffix.length) !== -1;
// }

// console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));    // true
// console.log(string_endsWith('JS PHP PYTHON', ''));          // false




// Problem 31:
// Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.

// function escape_html(str) {
//     if ((str === null) || (str === ''))
//         return false;
//     else
//         str = str.toString();
//         var map = {
//             '&': '&amp;',
//             '<': '&lt;',
//             '>': '&gt;',
//             '"': '&quot;',
//             "'": '&#039;'
//         };
//     return str.replace(/[&<>"']/g, function (m) { return map[m]; });
// }

// console.log(escape_html('PHP & MySQL'));    // PHP &amp; MySQL
// console.log(escape_html('3 > 2'));          // 3 &gt; 2




// Problem 32:
// Write a JavaScript function to remove? non-printable ASCII chars.

// function remove_non_ascii(str) {
//     if ((str === null) || (str === ''))
//         return false;
//     else
//         str = str.toString();
//     return str.replace(/[^\x20-\x7E]/g, '');
// }

// console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));    // PHP-MySQL




// Problem 33:
// Write a JavaScript function to remove non-word characters.

// function remove_non_word(str) {
//     if ((str === null) || (str === ''))
//         return false;
//     else
//         str = str.toString();

//     var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

//     return str.replace(PATTERN, '');
// }

// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

// // PHP - MySQL




// Problem 34:
// Write a JavaScript function to convert a string to title case.

// function sentenceCase(str) {
//     if ((str === null) || (str === ''))
//         return false;
//     else
//         str = str.toString();

//     return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// }

// console.log(sentenceCase('PHP exercises. python exercises.'));

// // Php Exercises. Python Exercises.




// Problem 35:
// Write a JavaScript function to remove HTML/XML tags from string.

// function strip_html_tags(str) {
//     if ((str === null) || (str === ''))
//         return false;
//     else
//         str = str.toString();
//     return str.replace(/<[^>]*>/g, '');
// }

// console.log(strip_html_tags('PHP Exercises'));

// // PHP Exercises





// Problem 36:
// Write a JavaScript function to create a Zerofilled value with optional +, - sign.

// function zeroFill(number, width, osign) {
//     var num = '' + Math.abs(number),
//         zerosw = width - num.length,
//         sign = number >= 0;
//     return (sign ? (osign ? '+' : '') : '-') +
//         Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
// }

// console.log(zeroFill(120, 5, '-'));     // +00120
// console.log(zeroFill(29, 4));           // 0029





// Problem 37:
// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.

// function compare_strings(str1, str2) {
//     var areEqual = str1.toUpperCase() === str2.toUpperCase();
//     return areEqual;
// }

// console.log(compare_strings('abcd', 'AbcD'));   // true
// console.log(compare_strings('ABCD', 'Abce'));   // false




// Problem 38:
// Write a JavaScript function to create a case-insensitive search.

// function case_insensitive_search(str, search_str) {
//     var result = str.search(new RegExp(search_str, "i"));

//     if (result > 0)
//         return 'Matched';
//     else
//         return 'Not Matched';
// }

// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));  // Matched
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));  // Matched
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); // Not Matched





// Problem 39:
// Write a JavaScript function to Uncapitalize? the first character of a string.

// function Uncapitalize(str1) {
//     return str1.charAt(0).toLowerCase() + str1.slice(1);
// }

// console.log(Uncapitalize('Js string exercises'));   // js string exercises





// Problem 40:
// Write a JavaScript function to Uncapitalize the first letter of each word of a string.

// function unCapitalize_Words(str) {
//     return str.replace(/\w\S*/g,
//         function (txt) {
//             return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();
//         });
// }

// console.log(unCapitalize_Words('Js String Exercises'));     // js string exercises





// Problem 41:
// Write a JavaScript function to capitalize each word in the string. 

// function capitalizeWords(str) {
//     return str.replace(/\w\S*/g, function (txt) { return txt.substr(0).toUpperCase(); });
// }

// console.log(capitalizeWords('js string exercises'));    // JS STRING EXERCISES





// Problem 42:
// Write a JavaScript function to uncapitalize each word in the string.

// function unCapitalizeWords(str) {
//     return str.replace(/\w\S*/g, function (txt) { return txt.substr(0).toLowerCase(); });
// }

// console.log(unCapitalizeWords('JS STRING EXERCISES'));      // js string exercises




// Problem 43:
// Write a JavaScript function to test whether the character at the provided (character) index is upper case.

// function isUpperCaseAt(str, index) {
//     return str.charAt(index).toUpperCase() === str.charAt(index);
// }

// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));   // false





// Problem 44:
// Write a JavaScript function to test whether the character at the provided (character) index is lower case.

// function isLowerCaseAt(str, index) {
//     return str.charAt(index).toLowerCase() === str.charAt(index);
// }

// console.log(isLowerCaseAt('Js STRING EXERCISES', 1));   // true






// Problem 45:
// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

// function humanize(number) {
//     if (number % 100 >= 11 && number % 100 <= 13)
//         return number + "th";

//     switch (number % 10) {
//         case 1: return number + "st";
//         case 2: return number + "nd";
//         case 3: return number + "rd";
//     }

//     return number + "th";
// }

// console.log(humanize(1));       // 1st
// console.log(humanize(20));       // 20th
// console.log(humanize(302));       // 302nd





// Problem 46:
// Write a JavaScript function to test whether a string starts with a specified string.

// function startsWith(input, string) {
//     return input.indexOf(string) === 0;
// }

// console.log(startsWith('js string exercises', 'js'));   // true





// Problem 47:
// Write a JavaScript function to test whether a string ends with a specified string.

// function endsWith(input, string) {
//     var index = input.length - string.length;
//     return index >= 0 && input.indexOf(string, index) > -1;
// }

// console.log(endsWith('JS string exercises', 'exercises'));  // true





// Problem 48:
// Write a JavaScript function to get the successor of a string.

// function successor(str) {
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz',
//         length = alphabet.length,
//         result = str,
//         i = str.length;

//     while (i >= 0) {
//         var last = str.charAt(--i),
//             next = '',
//             carry = false;

//         if (isNaN(last)) {
//             index = alphabet.indexOf(last.toLowerCase());

//             if (index === -1) {
//                 next = last;
//                 carry = true;
//             }
//             else {
//                 var isUpperCase = last === last.toUpperCase();
//                 next = alphabet.charAt((index + 1) % length);
//                 if (isUpperCase) {
//                     next = next.toUpperCase();
//                 }

//                 carry = index + 1 >= length;
//                 if (carry && i === 0) {
//                     var added = isUpperCase ? 'A' : 'a';
//                     result = added + next + result.slice(1);
//                     break;
//                 }
//             }
//         }
//         else {
//             next = +last + 1;
//             if (next > 9) {
//                 next = 0;
//                 carry = true;
//             }

//             if (carry && i === 0) {
//                 result = '1' + next + result.slice(1);
//                 break;
//             }
//         }

//         result = result.slice(0, i) + next + result.slice(i + 1);
//         if (!carry) {
//             break;
//         }
//     }
//     return result;
// }

// console.log(successor('abcd'));     // abce
// console.log(successor('3456'));     // 3457





// Problem 49:
// Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.

// function guid(len) {
//     var buf = [],
//         chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
//         charlen = chars.length,
//         length = len || 32;

//     for (var i = 0; i < length; i++) {
//         buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
//     }

//     return buf.join('');
// }

// console.log(guid());        // 4Nc1ENFp118ibfvMO08rzWQrYPhFkeLX
// console.log(guid(15));      // CDzrsqpyLr0DfKE

