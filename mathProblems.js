// *** Math Problems ***
// https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php


// Problem 1:
// Write a JavaScript function to convert a number from one base to another.

// var base_convert = function (number, initial_base, change_base) {
//     if ((initial_base && change_base) < 2 || (initial_base && change_base) > 36)
//         return 'Base between 2 and 36';

//     return parseInt(number + '', initial_base)
//         .toString(change_base);
// }

// console.log(base_convert('E164', 16, 8));   // 160544
// console.log(base_convert(1000, 2, 8));      // 10





// Problem 2:
// Write a JavaScript function to convert a binary number to a decimal number.

// function bin_to_dec(bstr) {
//     return parseInt((bstr + '')
//         .replace(/[^01]/gi, ''), 2);
// }
// console.log(bin_to_dec('110011'));  // 51
// console.log(bin_to_dec('100'));     // 4




// Problem 3:
// Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

// dec_to_bho = function (n, base) {

//     if (n < 0) {
//         n = 0xFFFFFFFF + n + 1;
//     }
//     switch (base) {
//         case 'B':
//             return parseInt(n, 10).toString(2);
//             break;
//         case 'H':
//             return parseInt(n, 10).toString(16);
//             break;
//         case 'O':
//             return parseInt(n, 10).toString(8);
//             break;
//         default:
//             return ("Wrong input.........");
//     }
// }

// console.log(dec_to_bho(120, 'B'));  // 1111000
// console.log(dec_to_bho(120, 'H'));  // 78
// console.log(dec_to_bho(120, 'O'));  // 170





// Problem 4:
// Write a JavaScript function to generate a random integer.

// rand = function (min, max) {
//     if (min == null && max == null)
//         return 0;

//     if (max == null) {
//         max = min;
//         min = 0;
//     }
//     return min + Math.floor(Math.random() * (max - min + 1));
// };
// console.log(rand(20, 1));   // 6
// console.log(rand(1, 10));   // 1
// console.log(rand(6));       // 5
// console.log(rand());        // 0




// Problem 5:
// Write a JavaScript function to format a number up to specified decimal places.

// function decimals(n, d) {
//     if ((typeof n !== 'number') || (typeof d !== 'number'))
//         return false;
//     n = parseFloat(n) || 0;
//     return n.toFixed(d);
// }
// console.log(decimals(2.100212, 2));     // 2.10
// console.log(decimals(2.100212, 3));     // 2.100
// console.log(decimals(2100, 2));         // 2100.00




// Problem 6:
// Write a JavaScript function to find the highest value in an array.

// function max(input) {
//     if (toString.call(input) !== "[object Array]")
//         return false;
//     return Math.max.apply(null, input);
// }

// console.log(max([12, 34, 56, 1]));          // 56
// console.log(max([-12, -34, 0, -56, -1]));   // 0





// Problem 7:
// Write a JavaScript function to find the lowest value in an array.

// function min(input) {
//     if (toString.call(input) !== "[object Array]")
//         return false;
//     return Math.min.apply(null, input);
// }

// console.log(min([12, 34, 56, 1]));          // 1
// console.log(min([-12, -34, 0, -56, -1]));   // -56





// Problem 8:
// Write a JavaScript function to get the greatest common divisor (gcd) of two integers.

// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//         return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while (y) {
//         var t = y;
//         y = x % y;
//         x = t;
//     }
//     return x;
// }

// console.log(gcd_two_numbers(12, 13));   // 1
// console.log(gcd_two_numbers(9, 3));     // 3





// Problem 9:
// Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.

// function gcd_more_than_two_numbers(input) {
//     if (toString.call(input) !== "[object Array]")
//         return false;
//     var len, a, b;
//     len = input.length;
//     if (!len) {
//         return null;
//     }
//     a = input[0];
//     for (var i = 1; i < len; i++) {
//         b = input[i];
//         a = gcd_two_numbers(a, b);
//     }
//     return a;
// }

// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//         return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while (y) {
//         var t = y;
//         y = x % y;
//         x = t;
//     }
//     return x;
// }
// console.log(gcd_more_than_two_numbers([3, 15, 27]));        // 3
// console.log(gcd_more_than_two_numbers([5, 10, 15, 25]));    // 5






// Problem 10:
// Write a JavaScript function to get the least common multiple (LCM) of two numbers.

// function lcm_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//         return false;
//     return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
// }

// function gcd_two_numbers(x, y) {
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while (y) {
//         var t = y;
//         y = x % y;
//         x = t;
//     }
//     return x;
// }
// console.log(lcm_two_numbers(3, 15));    // 15
// console.log(lcm_two_numbers(10, 15));   // 30





// Problem 11:
// Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.

// function lcm_more_than_two_numbers(input_array) {
//     if (toString.call(input_array) !== "[object Array]")
//         return false;
//     var r1 = 0, r2 = 0;
//     var l = input_array.length;
//     for (i = 0; i < l; i++) {
//         r1 = input_array[i] % input_array[i + 1];
//         if (r1 === 0) {
//             input_array[i + 1] = (input_array[i] * input_array[i + 1]) / input_array[i + 1];
//         }
//         else {
//             r2 = input_array[i + 1] % r1;
//             if (r2 === 0) {
//                 input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
//             }
//             else {
//                 input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r2;
//             }
//         }
//     }
//     return input_array[l - 1];
// }

// console.log(lcm_more_than_two_numbers([100, 90, 80, 7]));   // 25200
// console.log(lcm_more_than_two_numbers([5, 10, 15, 25]));    // 150





// Problem 12:
// Write a JavaScript function to find out if a number is a natural number or not. 

// function is_Natural(n) {
//     if (typeof n !== 'number')
//         return 'Not a number';

//     return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
// }

// console.log(is_Natural(-15));   // false
// console.log(is_Natural(1));     // true
// console.log(is_Natural(10.22));     // false
// console.log(is_Natural(10 / 0));    // false




// Problem 13:
// Write a JavaScript function to test if a number is a power of 2.

// function power_of_2(n) {
//     if (typeof n !== 'number')
//         return 'Not a number';

//     return n && (n & (n - 1)) === 0;
// }

// console.log(power_of_2(16));    // true
// console.log(power_of_2(18));    // false
// console.log(power_of_2(256));   // true




// Problem 14:
// Write a JavaScript function to round a number to a given decimal places.

// function precise_round(n, r) {
//     let int = Math.floor(n).toString()
//     if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
//     if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
//     return n.toPrecision(int.length + r)
// }
// console.log(precise_round(12.375, 2));      // 12.38
// console.log(precise_round(-10.3079499, 3));     // -10.308
// console.log(precise_round(10.49999, 0));    // 10
// console.log(precise_round(10.49999, 2));    // 10.50




// Problem 15:
// Write a JavaScript function to check whether a value is an integer or not.

// function is_Int(num) {
//     if (typeof num !== 'number')
//         return false;

//     return !isNaN(num) &&
//         parseInt(Number(num)) == num &&
//         !isNaN(parseInt(num, 10));
// }
// console.log(is_Int(23));    // true
// console.log(is_Int(4e2));   // true
// console.log(is_Int(NaN));   // false
// console.log(is_Int(23.75));     // false
// console.log(is_Int(-23));   // true




// Problem 16:
// Write a JavaScript function to check to check whether a variable is numeric or not.

// function is_Numeric(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
// }

// console.log(is_Numeric(12));    // true
// console.log(is_Numeric('abcd'));    // false
// console.log(is_Numeric('12'));  // true
// console.log(is_Numeric(' '));   // false
// console.log(is_Numeric(1.20));  // true
// console.log(is_Numeric(-200));  // true




// Problem 17:
// Write a JavaScript function to calculate the sum of values in an array.

// function sum(input) {
//     if (toString.call(input) !== "[object Array]")
//         return false;
//     var total = 0;
//     for (var i = 0; i < input.length; i++) {
//         if (isNaN(input[i])) {
//             continue;
//         }
//         total += Number(input[i]);
//     }
//     return total;
// }

// console.log(sum([1, 2, 3]));        // 6
// console.log(sum([100, -200, 3]));   // -97
// console.log(sum([1, 2, 'a', 3]));   // 6




// Problem 18:
// Write a JavaScript function to calculate the product of values in an array.

// function product(input) {
//     if (toString.call(input) !== "[object Array]")
//         return false;

//     var total = 1;

//     for (var i = 0; i < input.length; i++) {
//         if (isNaN(input[i])) {
//             continue;
//         }
//         total *= Number(input[i]);
//     }
//     return total;
// }

// console.log(product([1, 2, 3]));        // 6
// console.log(product([100, -200, 3]));   // -60000
// console.log(product([1, 2, 'a', 3]));   // 6




// Problem 19:
// Create a Pythagorean function in JavaScript.

// function pythagorean_theorem(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//         return false;
//     return Math.sqrt(x * x + y * y);
// }

// console.log(pythagorean_theorem(2, 4));     // 4.47213595499958
// console.log(pythagorean_theorem(3, 4));     // 5




// Problem 20:
// Write a JavaScript program to evaluate binomial coefficients. 

// function binomial(n, k) {
//     if ((typeof n !== 'number') || (typeof k !== 'number'))
//         return false;
//     var coeff = 1;
//     for (var x = n - k + 1; x <= n; x++) coeff *= x;
//     for (x = 1; x <= k; x++) coeff /= x;
//     return coeff;
// }

// console.log(binomial(8, 3));    // 56
// console.log(binomial(10, 2));   // 45





// Problem 21:







































