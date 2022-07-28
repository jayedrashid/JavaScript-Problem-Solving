// *** Regular Expressions (RegEx) ***

// Regular expressions are patterns used to match character combinations in strings. 
// In JavaScript, regular expressions are also objects. 
// These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.



// https://www.w3resource.com/javascript-exercises/javascript-regexp-exercises.php

// Problem 1:
// Write a JavaScript program to test the first character of a string is uppercase or not.

// function upper_case(str) {
//     regexp = /^[A-Z]/;
//     if (regexp.test(str)) {
//         console.log("first character is uppercase");
//     }
//     else {
//         console.log("first character is not uppercase");
//     }
// }

// upper_case('Abcd');     // first character is uppercase
// upper_case('abcd');     // first character is not uppercase





// Problem 2:
// Write a JavaScript program to check a credit card number.

// function is_creditCard(str) {
//     regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_creditCard("378282246310006"));      // true

// console.log(is_creditCard("37828224630006"));       // false





// Problem 3:
// Write a pattern that matches e-mail addresses.

// function valid_email(str) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (mailformat.test(str)) {
//         console.log("Valid email address!");
//     }
//     else {
//         console.log("You have entered an invalid email address!");
//     }
// }

// valid_email('me-info@example.com');     // Valid email address!




// Problem 4:
// Write a JavaScript program to search a date within a string.

// function is_dateString(str) {
//     regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_dateString("01/01/2015"));   // true

// console.log(is_dateString("01/22/2015"));   // true

// console.log(is_dateString("32/01/2015"));   // false





// Problem 5:
// Write a JavaScript program that work as a trim function (string) using regular expression.

// function Trim(str) {
//     var result;
//     if (typeof str === 'string') {
//         result = str.replace(/^\s+|\s+$/g, '');
//         return result;
//     }
//     else {
//         return false;
//     }
// }
// console.log(Trim(' w3resource '));      // w3resource





// Problem 6:
// Write a JavaScript program to count number of words in string.

// html
{/* <style type="text/css">
body {margin-top: 40px;}
</style> 
</head>
<body>
<textarea id="InputText" cols="30" rows="4">The quick brown fox jumps over the lazy dog.</textarea>
<br>
<input type="button" name="Convert" value="No. of Words" onClick="count_words();">
<input id = "noofwords" type="text" value="" size="6"> 
</body> */}

// function count_words() {
//     str1 = document.getElementById("InputText").value;
//     //exclude  start and end white-space
//     str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
//     //convert 2 or more spaces to 1  
//     str1 = str1.replace(/[ ]{2,}/gi, " ");
//     // exclude newline with a start spacing  
//     str1 = str1.replace(/\n /, "\n");
//     document.getElementById("noofwords").value = str1.split(' ').length;
// }

// console.log(count_words());

// // The quick brown fox jumps over the lazy dog.
// // 9





// Problem 7:
// Write a JavaScript function to check whether a given value is IP value or not.

// function is_IP(str) {
//     regexp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_IP('198.156.23.5'));     // true

// console.log(is_IP("172.16.0.1"));       // true





// Problem 8:
// Write a JavaScript function to count the number of vowels in a given string.

// function vowel_count(str) {
//     return str.match(/[aeiou]/gi).length;
// }

// console.log(vowel_count('The quick brown fox jumps over the lazy dog'));    // 11





// Problem 9:
// Write a JavaScript function to check whether a given value is an valid url or not.

// function is_url(str) {
//     regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_url("http://www.example.com"));      // true
// console.log(is_url("https://www.example.com"));     // true
// console.log(is_url("www.example.com"));             // true





// Problem 10:
// Write a JavaScript function to check whether a given value is alpha numeric or not.

// function is_alphaNumeric(str) {
//     regexp = /^[A-Za-z0-9]+$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_alphaNumeric("37828sad"));       // true
// console.log(is_alphaNumeric("3243#$sew"));      // false





// Problem 11:
// Write a JavaScript function to check whether a given value is time string or not.

// function is_timeString(str) {
//     regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_timeString("11:35:30"));     // true

// console.log(is_timeString("90:90:90"));     // false





// Problem 12:
// Write a JavaScript function to check whether a given value is US zip code or not.

// function is_usZipCode(str) {
//     regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_usZipCode("03201-2150"));    // true

// console.log(is_usZipCode("7892"));          // false





// Problem 13:
// Write a JavaScript function to check whether a given value is UK Post Code or not.

// function is_ukPostCode(str) {
//     regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_ukPostCode("B294HJ"));       // true

// console.log(is_ukPostCode("7892"));         // false





// Problem 14:
// Write a JavaScript function to check whether a given value is Canada Post Code or not.

// function is_caPostalCode(str) {
//     regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_caPostalCode("K8V3Y1"));     // true

// console.log(is_caPostalCode("K8V 3Y1"));    // true

// console.log(is_caPostalCode("Z4V4X1"));     // false




// Problem 15:
// Write a JavaScript function to check whether a given value is a social security number or not.

// function is_socialSecurity_Number(str) {
//     regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_socialSecurity_Number("019-90-5680"));   // true

// console.log(is_socialSecurity_Number("K8V-3Y1"));       // false





// Problem 16:
// Write a JavaScript function to check whether a given value is hexadecimal value or not.

// function is_hexadecimal(str) {
//     regexp = /^[0-9a-fA-F]+$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_hexadecimal("ffffff"));      // true

// console.log(is_hexadecimal("fz5500"));      // false





// Problem 17:
// Write a JavaScript function to check whether a given value is hexcolor value or not.

// function is_hexcolor(str) {
//     regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_hexcolor("#444"));       // true

// console.log(is_hexcolor("#3333"));      // false





// Problem 18:
// Write a JavaScript function to check whether a given value represents a domain or not.

// function is_domain(str) {
//     regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_domain('www.example.com'));      // true

// console.log(is_domain('www.npm.co.uk'));        // true

// console.log(is_domain('http://www.example.com'));   // false

// console.log(is_domain('https://www.example.com'));  // false

// console.log(is_domain('www.example.com'));      // true





// Problem 19:
// Write a JavaScript function to check whether a given value is html or not.

// function is_html(str) {
//     regexp = /<([a-z]+) *[^/]*?>/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_html(''));       // false

// console.log(is_html(''));       // false

// console.log(is_html('.selector'));      // false





// Problem 20:
// Write a JavaScript function to check a given value contains alpha, dash and underscore.

// function is_alphaDash(str) {
//     regexp = /^[a-z0-9_\-]+$/i;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_alphaDash('12-133'));    // true

// console.log(is_alphaDash('100_23'));    // true





// Problem 21:
// Write a JavaScript function to print an integer with commas as thousands separators.

// function thousands_separators(num) {
//     var num_parts = num.toString().split(".");
//     num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return num_parts.join(".");
// }

// console.log(thousands_separators(1000));        // 1,000
// console.log(thousands_separators(10000.23));    // 10,000.23
// console.log(thousands_separators(100000));      // 100,000














