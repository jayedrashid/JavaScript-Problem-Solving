// *** Number Problems ***
// https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php#EDITOR





// Problem 1:
// we can round numbers with the toFixed method as follows:

// const n1 = (21.4).toFixed();
// const n2 = (21.6).toFixed();

// console.log(n1);    // 21
// console.log(n2);    // 22





// Problem 2:
// To round a number to a specified number of decimal places, we can pass in an argument into the toFixed method as follows:

// const n1 = (21.4).toFixed(3);
// const n2 = (21.6).toFixed(2);

// console.log(n1);    // 21
// console.log(n2);    // 22





// Problem 3:
// There’s also the Math.round method which always round a number to the nearest integer.

// const n = Math.round(0.8);

// console.log(n);    // 1





// Problem 4:
//  if we pass in a locale string like 'fr' into the method:

// const str = (21.1).toLocaleString('fr');

// console.log(str);    // 21,1





// Problem 5:
// We can call the number’s toExponential instance method to return a string that formats the number in exponential notation.

// const str = (21.1).toExponential();
// console.log(str);    // 2.11e+1





// Problem 6:
// We can pass in the number of digits to include after the decimal point as follows:

// const str = (21.1).toExponential(4);
// console.log(str);    // 2.1100e+1




// Problem 6:
// We can call the number instance’s toPrecision method to return a string representation of the original number with the given number of decimal places specified in the argument.
// The number we pass into the argument must an integer between 0 and 100.

// const num = 5.356789;

// console.log(num.toPrecision());     // 5.356789
// console.log(num.toPrecision(5));     // 5.3568
// console.log(num.toPrecision(2));     // 5.4
// console.log(num.toPrecision(1));     // 5




// Problem 7:
// Write a JavaScript function to convert a binary number to a decimal number.

// function bin_to_dec(bstr) {
//     return parseInt((bstr + '')
//     .replace(/[^01]/gi, ''), 2);
// }
// console.log(bin_to_dec('110011'));      // 51
// console.log(bin_to_dec('100'));      // 4





// Problem 8:
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

// console.log(dec_to_bho(120, 'B'));      // 1111000
// console.log(dec_to_bho(120, 'H'));      // 78
// console.log(dec_to_bho(120, 'O'));      // 170





// Problem 9:
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

// console.log(rand(20, 1));       // 9
// console.log(rand(1, 10));       // 10
// console.log(rand(6));       // 5
// console.log(rand());       // 0





// Problem 10:
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




// Problem 11:
// Write a JavaScript function to find the highest value in an array.

// function max(input) {
//     if (toString.call(input) !== "[object Array]")
//         return false;
//     return Math.max.apply(null, input);
// }

// console.log(max([12, 34, 56, 1]));          // 56
// console.log(max([-12, -34, 0, -56, -1]));       // 0




// Problem 12:
// Write a JavaScript function to find the lowest value in an array.

// function min(input) {
//     if (toString.call(input) !== "[object Array]")
//         return false;
//     return Math.min.apply(null, input);
// }

// console.log(min([12, 34, 56, 1]));             // 1
// console.log(min([-12, -34, 0, -56, -1]));       // -56




// Problem 13:
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




// Problem 14:
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
// console.log(gcd_more_than_two_numbers([5, 10, 15, 25]));       // 5




// Problem 15:
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




// Problem 16:
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

// console.log(lcm_more_than_two_numbers([100, 90, 80, 7]));      // 25200
// console.log(lcm_more_than_two_numbers([5, 10, 15, 25]));        // 150




// Problem 17:
// Write a JavaScript function to find out if a number is a natural number or not.

// function is_Natural(n) {
//     if (typeof n !== 'number')
//         return 'Not a number';

//     return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
// }

// console.log(is_Natural(-15));       // false
// console.log(is_Natural(1));         // true
// console.log(is_Natural(10.22));     // false
// console.log(is_Natural(10 / 0));     // false





// Problem 18:
// Write a JavaScript function to test if a number is a power of 2.

// function power_of_2(n) {
//     if (typeof n !== 'number')
//         return 'Not a number';

//     return n && (n & (n - 1)) === 0;
// }

// console.log(power_of_2(16));        // true
// console.log(power_of_2(18));        // false
// console.log(power_of_2(256));        // true




// Problem 19:
// Write a JavaScript function to round a number to a given decimal places.

// function precise_round(n, r) {
//     let int = Math.floor(n).toString()
//     if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
//     if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
//     return n.toPrecision(int.length + r)
// }

// console.log(precise_round(12.375, 2));          // 12.38
// console.log(precise_round(-10.3079499, 3));     // -10.308
// console.log(precise_round(10.49999, 0));        // 10
// console.log(precise_round(10.49999, 2));        // 10.50




// Problem 20:
// Write a JavaScript function to check whether a value is an integer or not.

// function is_Int(num) {

//     if (typeof num !== 'number')
//         return false;

//     return !isNaN(num) &&
//         parseInt(Number(num)) == num &&
//         !isNaN(parseInt(num, 10));
// }

// console.log(is_Int(23));     // true
// console.log(is_Int(4e2));     // true
// console.log(is_Int(NaN));     // false
// console.log(is_Int(23.75));     // false
// console.log(is_Int(-23));     // true




// Problem 21:
// Write a JavaScript function to check to check whether a variable is numeric or not.

// function is_Numeric(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
// }

// console.log(is_Numeric(12));        // true
// console.log(is_Numeric('abcd'));        // false
// console.log(is_Numeric('12'));        // true
// console.log(is_Numeric(' '));        // false
// console.log(is_Numeric(1.20));        // true
// console.log(is_Numeric(-200));        // true





// Problem 22:
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

// console.log(sum([1, 2, 3]));            // 6
// console.log(sum([100, -200, 3]));       // -97
// console.log(sum([1, 2, 'a', 3]));       // 6





// Problem 23:
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
// console.log(product([1, 2, 3]));            // 6
// console.log(product([100, -200, 3]));       // -60000
// console.log(product([1, 2, 'a', 3]));       // 6





// Problem 24:
// Create a Pythagorean function in JavaScript.

// function pythagorean_theorem(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//         return false;
//     return Math.sqrt(x * x + y * y);
// }

// console.log(pythagorean_theorem(2, 4));     // 4.47213595499958
// console.log(pythagorean_theorem(3, 4));     // 5




// Problem 25:
// Write a JavaScript program to evaluate binomial coefficients.

// function binomial(n, k) {
//     if ((typeof n !== 'number') || (typeof k !== 'number'))
//         return false;
//     var coeff = 1;
//     for (var x = n - k + 1; x <= n; x++) coeff *= x;
//     for (x = 1; x <= k; x++) coeff /= x;
//     return coeff;
// }

// console.log(binomial(8, 3));        // 56
// console.log(binomial(10, 2));       // 45





// Problem 26:
// Write a JavaScript function that Convert an integer into a Roman Numeral in javaScript.

// function integer_to_roman(num) {
//     if (typeof num !== 'number')
//         return false;

//     var digits = String(+num).split(""),
//         key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
//             "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
//             "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
//         roman_num = "",
//         i = 3;
//     while (i--)
//         roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
//     return Array(+digits.join("") + 1).join("M") + roman_num;
// }

// console.log(integer_to_roman(27));      // XXVII





// Problem 27:
// Write a JavaScript function that Convert Roman Numeral to Integer.

// function roman_to_Int(str1) {
//     if (str1 == null) return -1;
//     var num = char_to_int(str1.charAt(0));
//     var pre, curr;

//     for (var i = 1; i < str1.length; i++) {
//         curr = char_to_int(str1.charAt(i));
//         pre = char_to_int(str1.charAt(i - 1));
//         if (curr <= pre) {
//             num += curr;
//         } else {
//             num = num - pre * 2 + curr;
//         }
//     }

//     return num;
// }

// function char_to_int(c) {
//     switch (c) {
//         case 'I': return 1;
//         case 'V': return 5;
//         case 'X': return 10;
//         case 'L': return 50;
//         case 'C': return 100;
//         case 'D': return 500;
//         case 'M': return 1000;
//         default: return -1;
//     }
// }

// console.log(roman_to_Int('XXVI'));      // 26
// console.log(roman_to_Int('CI'));        // 101




// Problem 28:
// Write a JavaScript function to create a UUID identifier.

// function create_UUID() {
//     var dt = new Date().getTime();
//     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = (dt + Math.random() * 16) % 16 | 0;
//         dt = Math.floor(dt / 16);
//         return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
//     return uuid;
// }

// console.log(create_UUID());     // 80055b36-ddf9-417a-ae2e-4a0eb4f7c5fa




// Problem 29:
// Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any).

// var a = -1.1230000;
// var a = 0.0000009999999;
// var a = 1.000000000;
// var a = -4.55555;
// var a = 5.0001000;
// var a = 1.1234000;

// var result = parseFloat(a.toFixed(4));

// console.log(result);        // 1.1234




// Problem 30:
// Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

// var n1 = '$40.24';
// var n2 = '$21.57';
// var regp = /[^0-9.-]+/g;

// console.log(parseFloat(n1.replace(regp, '')) + parseFloat(n2.replace(regp, '')));      // 61.81
// console.log(parseFloat(n1.replace(regp, '')) - parseFloat(n2.replace(regp, '')));      // 18.67
// console.log(parseFloat(n1.replace(regp, '')) * parseFloat(n2.replace(regp, '')));      // 867.9768
// console.log(parseFloat(n1.replace(regp, '')) / parseFloat(n2.replace(regp, '')));      // 1.865554010199351




// Problem 31:
// Write a JavaScript function to calculate the nth root of a number.

// function nthroot(x, n) {
//     ng = n % 2;
//     if ((ng == 1) || x < 0)
//         x = -x;
//     var r = Math.pow(x, 1 / n);
//     n = Math.pow(r, n);

//     if (Math.abs(x - n) < 1 && (x > 0 === n > 0))
//         return ng ? -r : r;
// }

// console.log(nthroot(64, 2));    // 8
// console.log(nthroot(64, -2));   // 0.125




// Problem 32:
// Write a JavaScript function to calculate degrees between 2 points with inverse Y axis.

// function pointDirection(x1, y1, x2, y2) {
//     return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
// }

// console.log(pointDirection(1, 0, 12, 0));   // 0
// console.log(pointDirection(1, 0, 1, 10));   // 90




// Problem 33:
// Write a JavaScript function to round up an integer value to the next multiple of 5.

// function int_round5(num) {
//     return Math.ceil(num / 5) * 5;
// }

// console.log(int_round5(32));        // 35
// console.log(int_round5(137));        // 140
// console.log(int_round5(142));        // 145




// Problem 34:
// Write a JavaScript function to convert a positive number to negative number.

// function pos_to_neg(num) {
//     return -Math.abs(num);
// }

// console.log(pos_to_neg(15));        // -15




// Problem 35:
// Write a JavaScript function to cast a square root of a number to an integer.

// function sqrt_to_int(num) {
//     return parseInt(Math.sqrt(num) + "");
// }

// console.log(sqrt_to_int(17));       // 4




// Problem 36:
// Write a JavaScript function to get the highest number from three different numbers.

// function highest_of_three(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }

// console.log(highest_of_three(-5, 4, 2));        // 4




// Problem 37:
// Write a JavaScript function to calculate the percentage (%) of a number.

// function percentage(num, per) {
//     return (num / 100) * per;
// }

// console.log(percentage(1000, 47.12));       // 471.2




// Problem 38:
// Write a JavaScript function to convert an angle from degrees to radians.

// function degrees_to_radians(degrees) {
//     var pi = Math.PI;
//     return degrees * (pi / 180);
// }

// console.log(degrees_to_radians(45));        // 0.7853981633974483






// Problem 39:
// Write a JavaScript function to convert radians to degrees. 

// function radians_to_degrees(radians) {
//     var pi = Math.PI;
//     return radians * (180 / pi);
// }

// console.log(radians_to_degrees(0.7853981633974483));        // 45





// Problem 40:
// Write a JavaScript function for the Pythagorean theorem.

// function pythagorean(sideA, sideB) {
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }

// console.log(pythagorean(4, 3));     // 5





// Problem 41:
// Write a JavaScript function which will return values that are powers of two.

// function isPower_of_two(num) {
//     return num && (num & (num - 1)) === 0;
// }

// console.log(isPower_of_two(64));        // true
// console.log(isPower_of_two(94));        // false





// Problem 42:
// Write a JavaScript function to limit a value inside a certain range.

// function value_limit(val, min, max) {
//     return val < min ? min : (val > max ? max : val);
// }

// console.log(value_limit(7, 1, 12));     // 7
// console.log(value_limit(-7, 0, 12));     // 0
// console.log(value_limit(15, 0, 12));     // 12





// Problem 43:
// Write a JavaScript function to check if a number is a whole number or has a decimal place.

// function number_test(n) {
//     var result = (n - Math.floor(n)) !== 0;

//     if (result)
//         return 'Number has a decimal place.';
//     else
//         return 'It is a whole number.';
// }

// console.log(number_test(25.66));        // Number has a decimal place.
// console.log(number_test(10));           // It is a whole number.






// Problem 44:
// Write a JavaScript function to print an integer with commas as thousands separators.

// function thousands_separators(num) {
//     var num_parts = num.toString().split(".");
//     num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return num_parts.join(".");
// }

// console.log(thousands_separators(1000));        // 1,000
// console.log(thousands_separators(10000.23));        // 10,000.23
// console.log(thousands_separators(100000));      // 100,000





// Problem 45:
// Write a JavaScript function to create random background color.

// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     console.log(bgColor);

//     document.body.style.background = bgColor;
// }

// random_bg_color();





// Problem 46:
// Write a JavaScript function to count the digits of an integer.

// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;

//     while (n / 10 >= 1) {
//         n /= 10;
//         ++count;
//     }

//     return count;
// }

// console.log(digits_count(12112));       // 5
// console.log(digits_count(457));         // 3






// Problem 47:
// Write a JavaScript function to calculate the combination of n and r.

// function product_Range(a, b) {
//     var prd = a, i = a;

//     while (i++ < b) {
//         prd *= i;
//     }
//     return prd;
// }

// function combinations(n, r) {
//     if (n == r || r == 0) {
//         return 1;
//     }
//     else {
//         r = (r < n - r) ? n - r : r;
//         return product_Range(r + 1, n) / product_Range(1, n - r);
//     }
// }

// console.log(combinations(6, 2));        // 15
// console.log(combinations(5, 3));        // 10






// Problem 48:
// Write a JavaScript function to get all prime numbers from 0 to a specified number.

// function primeFactorsTo(max) {
//     var store = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) {
//         if (!store[i]) {
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) {
//                 store[j] = true;
//             }
//         }
//     }
//     return primes;
// }

// console.log(primeFactorsTo(5));     // [ 2, 3, 5 ]
// console.log(primeFactorsTo(15));     // [ 2, 3, 5, 7, 11, 13 ]





// Problem 49:
// Write a JavaScript function to show the first twenty Hamming numbers.
// Hamming Numbers are numbers whose only prime factors are 2, 3 and 5.

// function Hamming(n) {
//     var succession = [1];
//     var length = succession.length;
//     var candidate = 2;
//     while (length < n) {
//         if (isHammingNumber(candidate)) {
//             succession[length] = candidate;
//             length++;
//         }
//         candidate++;
//     }
//     return succession;
// }

// function isHammingNumber(num) {
//     while (num % 5 === 0) num /= 5;
//     while (num % 3 === 0) num /= 3;
//     while (num % 2 === 0) num /= 2;

//     return num == 1;
// }

// console.log(Hamming(20));

// // [ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36 ]






// Problem 50:
// Write a JavaScript function to subtract elements from one another in an array.

// function subtraction(arr) {
//     if (Object.prototype.toString.call(arr) === '[object Array]') {
//         var total = arr[0];
//         if (typeof (total) !== 'number') {
//             return false;
//         }
//         for (var i = 1, length = arr.length; i < length; i++) {
//             if (typeof (arr[i]) === 'number') {
//                 total -= arr[i];
//             }
//             else
//                 return false;
//         }
//         return total;
//     }
//     else
//         return false;
// }

// console.log(subtraction([7, 3, 2, -1]));    // 3





// Problem 51:
// Write a JavaScript function to calculate the divisor and modulus of two integers. 

// function div_mod(a, b) {
//     if (b <= 0)
//         throw new Error("b cannot be zero. Undefined.");
//     if (isInt(a) && !isInt(b))
//         throw new Error("A or B are not integers.");
//     return [Math.floor(a / b), a % b];
// }
// function isInt(n) {
//     return n % 1 === 0;
// }
// console.log(div_mod(17, 4));        // [ 4, 1 ]







// Problem 52:
// Write a JavaScript function to calculate the extended Euclid Algorithm or extended GCD.

// function Euclid_gcd(a, b) {
//     a = +a;
//     b = +b;
//     if (a !== a || b !== b) {
//         return [NaN, NaN, NaN];
//     }

//     if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
//         return [Infinity, Infinity, Infinity];
//     }
//     // Checks if a or b are decimals
//     if ((a % 1 !== 0) || (b % 1 !== 0)) {
//         return false;
//     }
//     var signX = (a < 0) ? -1 : 1,
//         signY = (b < 0) ? -1 : 1,
//         x = 0,
//         y = 1,
//         u = 1,
//         v = 0,
//         q, r, m, n;
//     a = Math.abs(a);
//     b = Math.abs(b);

//     while (a !== 0) {
//         q = Math.floor(b / a);
//         r = b % a;
//         m = x - u * q;
//         n = y - v * q;
//         b = a;
//         a = r;
//         x = u;
//         y = v;
//         u = m;
//         v = n;
//     }
//     return [b, signX * x, signY * y];
// }

// console.log(Euclid_gcd(17, 4));     // [ 1, 1, -4 ]





// Problem 53:
// Write a JavaScript function to calculate the falling factorial of a number.

// function fallingFactorial(n, k) {
//     var i = (n - k + 1),
//         r = 1;
//     if (n < 0) {
//         throw new Error("n must be positive.");
//     }
//     if (k > n) {
//         throw new Error("k cannot be greater than n.");
//     }
//     while (i <= n) {
//         r *= i++;
//     }
//     return r;
// }

// console.log(fallingFactorial(10, 2));   // 90





// Problem 54:
// Write a JavaScript function to calculate Lanczos approximation gamma.

// function Lanczos_Gamma(num) {
//     var p = [
//         0.99999999999980993, 676.5203681218851, -1259.1392167224028,
//         771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
//     ];
//     var i;
//     var g = 7;
//     if (num < 0.5) return Math.PI / (Math.sin(Math.PI * num) * calculus.LanczosGamma(1 - num));
//     num -= 1;
//     var a = p[0];
//     var t = num + g + 0.5;
//     for (i = 1; i < p.length; i++) {
//         a += p[i] / (num + i);
//     }
//     return Math.sqrt(2 * Math.PI) * Math.pow(t, num + 0.5) * Math.exp(-t) * a;
// }

// console.log(Lanczos_Gamma(5));      // 23.999999999999996






// Problem 55:
// Write a JavaScript program to add two complex numbers.

// function Complex(real, imaginary) {
//     this.real = 0;
//     this.imaginary = 0;
//     this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
//     this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
// }
// Complex.transform = function (num) {
//     var complex;
//     complex = (num instanceof Complex) ? num : complex;
//     complex = (typeof num === 'number') ? new Complex(num, 0) : num;
//     return complex;
// };
// function display_complex(re, im) {
//     if (im === '0') return '' + re;
//     if (re === 0) return '' + im + 'i';
//     if (im < 0) return '' + re + im + 'i';
//     return '' + re + '+' + im + 'i';
// }
// function complex_num_add(first, second) {
//     var num1, num2;
//     num1 = Complex.transform(first);
//     num2 = Complex.transform(second);
//     var real = num1.real + num2.real;
//     var imaginary = num1.imaginary + num2.imaginary;
//     return display_complex(real, imaginary);
// }
// var a = new Complex(2, -7);
// var b = new Complex(4, 3);

// console.log(complex_num_add(a, b));     // 6-4i





// Problem 56:
// Write a JavaScript program to subtract two complex numbers.

// function Complex(real, imaginary) {
//     this.real = 0;
//     this.imaginary = 0;
//     this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
//     this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
// }
// Complex.transform = function (num) {
//     var complex;
//     complex = (num instanceof Complex) ? num : complex;
//     complex = (typeof num === 'number') ? new Complex(num, 0) : num;
//     return complex;
// };
// function display_complex(re, im) {
//     if (im === '0') return '' + re;
//     if (re === 0) return '' + im + 'i';
//     if (im < 0) return '' + re + im + 'i';
//     return '' + re + '+' + im + 'i';
// }
// function complex_num_subtract(first, second) {
//     var num1, num2;
//     num1 = Complex.transform(first);
//     num2 = Complex.transform(second);
//     var real = num1.real - num2.real;
//     var imaginary = num1.imaginary - num2.imaginary;
//     return display_complex(real, imaginary);
// }
// var a = new Complex(2, -7);
// var b = new Complex(4, 3);

// console.log(complex_num_subtract(a, b));    // -2-10i





// Problem 57:
// Write a JavaScript program to multiply two complex numbers.

// function Complex(real, imaginary) {
//     this.real = 0;
//     this.imaginary = 0;
//     this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
//     this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
// }
// Complex.transform = function (num) {
//     var complex;
//     complex = (num instanceof Complex) ? num : complex;
//     complex = (typeof num === 'number') ? new Complex(num, 0) : num;
//     return complex;
// };
// function display_complex(re, im) {
//     if (im === '0') return '' + re;
//     if (re === 0) return '' + im + 'i';
//     if (im < 0) return '' + re + im + 'i';
//     return '' + re + '+' + im + 'i';
// }
// function complex_num_multiply(first, second) {
//     var num1, num2;
//     num1 = Complex.transform(first);
//     num2 = Complex.transform(second);
//     var real = (num1.real * num2.real) - (num1.imaginary * num2.imaginary);
//     var imaginary = (num1.real * num2.imaginary) + (num1.imaginary * num2.real);
//     return display_complex(real, imaginary);
// }
// var a = new Complex(2, -7);
// var b = new Complex(4, 3);

// console.log(complex_num_multiply(a, b));    // 29-22i





// Problem 58:
// Write a JavaScript program to divide two complex numbers.

// function Complex(real, imaginary) {
//     this.real = 0;
//     this.imaginary = 0;
//     this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
//     this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
// }
// Complex.transform = function (num) {
//     var complex;
//     complex = (num instanceof Complex) ? num : complex;
//     complex = (typeof num === 'number') ? new Complex(num, 0) : num;
//     return complex;
// };
// function display_complex(re, im) {
//     if (im === '0') return '' + re;
//     if (re === 0) return '' + im + 'i';
//     if (im < 0) return '' + re + im + 'i';
//     return '' + re + '+' + im + 'i';
// }
// function complex_num_divide(first, second) {
//     var num1, num2;
//     num1 = Complex.transform(first);
//     num2 = Complex.transform(second);
//     var denom = num2.imaginary * num2.imaginary + num2.real * num2.real;
//     var real = (num1.real * num2.real + num1.imaginary * num2.imaginary) / denom;
//     var imaginary = (num2.real * num1.imaginary - num1.real * num2.imaginary) / denom;
//     return display_complex(real, imaginary);
// }
// var a = new Complex(2, -7);
// var b = new Complex(4, 3);

// console.log(complex_num_divide(a, b));      // -0.52-1.36i




