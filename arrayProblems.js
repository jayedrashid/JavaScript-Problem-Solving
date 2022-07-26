// *** Array Problems ***
// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php




// Problem 1:
// Write a JavaScript function to check whether an `input` is an array or not.

// var isArray = function (input) {
//     if (toString.call(input) === "[object Array]")
//         return true;
//     return false;
// };

// console.log(isArray('w3resource'));    // false
// console.log(isArray([1, 2, 4, 0]));    // true





// Problem 2:
// Write a JavaScript function to clone an array.

// var arrClone = arr1 => arr1.slice(0);

// console.log(arrClone([1, 2, 4, 0]));    // [ 1, 2, 4, 0 ]
// console.log(arrClone([1, 2, [4, 0]]));  // [ 1, 2, [ 4, 0 ] ]





// Problem 3:
// Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.

// var first = function (array, n) {
//     if (array == null)
//         return void 0;
//     if (n == null)
//         return array[0];
//     if (n < 0)
//         return [];
//     return array.slice(0, n);
// };

// console.log(first([7, 9, 0, -2]));          // 7
// console.log(first([], 3));                  // []
// console.log(first([7, 9, 0, -2], 3));       // [ 7, 9, 0 ]
// console.log(first([7, 9, 0, -2], 6));       // [ 7, 9, 0, -2 ]
// console.log(first([7, 9, 0, -2], -3));      // []





// Problem 4: 
// Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

// var last = function (array, n) {
//     if (array == null)
//         return void 0;
//     if (n == null)
//         return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));
// };

// console.log(last([7, 9, 0, -2]));       // -2
// console.log(last([7, 9, 0, -2], 3));    // [ 9, 0, -2 ]
// console.log(last([7, 9, 0, -2], 6));    // [ 7, 9, 0, -2 ]




// Problem 5: 
// Write a simple JavaScript program to join all elements of the following array into a string.

// myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.toString());    // Red,Green,White,Black
// console.log(myColor.join());        // Red,Green,White,Black
// console.log(myColor.join('+'));     // Red+Green+White+Black




// Problem 6: 
// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.

// const num = window.prompt();
// const str = num.toString();
// const result = [str[0]];

// for (let x = 1; x < str.length; x++) {
//     if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
//         result.push('-', str[x]);
//     }
//     else {
//         result.push(str[x]);
//     }
// }

// console.log(result.join(''));   // 0-254-6-8




// Problem 7: 
// Write a JavaScript program to sort the items of an array.

// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// var arr2 = [];
// var min = arr1[0];
// var pos;
// var max = arr1[0];
// for (i = 0; i < arr1.length; i++) {
//     if (max < arr1[i]) max = arr1[i];
// }

// for (var i = 0; i < arr1.length; i++) {
//     for (var j = 0; j < arr1.length; j++) {
//         if (arr1[j] != "x") {
//             if (min > arr1[j]) {
//                 min = arr1[j];
//                 pos = j;
//             }
//         }
//     }
//     arr2[i] = min;
//     arr1[pos] = "x";
//     min = max;
// }

// console.log(arr2);      // [ -4, -3, 1, 2, 3, 5, 6, 7, 8 ]




// Problem 8: 
// Write a JavaScript program to find the most frequent item of an array. 

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i = 0; i < arr1.length; i++) {
//     for (var j = i; j < arr1.length; j++) {
//         if (arr1[i] == arr1[j])
//             m++;
//         if (mf < m) {
//             mf = m;
//             item = arr1[i];
//         }
//     }
//     m = 0;
// }

// console.log(item + " ( " + mf + " times ) ");   // a ( 5 times )




// Problem 9: 
// Write a JavaScript program which accept a string as input and swap the case of each character.

// var str = 'c';
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];

// for (var x = 0; x < str.length; x++) {
//     if (UPPER.indexOf(str[x]) !== -1) {
//         result.push(str[x].toLowerCase());
//     }
//     else if (LOWER.indexOf(str[x]) !== -1) {
//         result.push(str[x].toUpperCase());
//     }
//     else {
//         result.push(str[x]);
//     }
// }

// console.log(result.join(''));       // C





// Problem 10: 
// Write a JavaScript program which prints the elements of the following array.

// a sample 2-D array 
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (var i in a) {
//     console.log("row " + i);
//     for (var j in a[i]) {
//         console.log(" " + a[i][j]);
//     }
// }

// // row 0
// //  1
// //  2
// //  1
// //  24
// // row 1
// //  8
// //  11
// //  9
// //  4
// // row 2
// //  7
// //  0
// //  7
// //  27
// // row 3
// //  7
// //  4
// //  28
// //  14
// // row 4
// //  3
// //  10
// //  26
// //  7





// Problem 11: 
// Write a JavaScript program to find the sum of squares of a numeric vector.

// function sumSquares(array) {
//     var sum = 0,
//         i = array.length;
//     while (i--)
//         sum += Math.pow(array[i], 2);
//     return sum;
// }

// console.log(sumSquares([0, 1, 2, 3, 4]));       // 30





// Problem 12: 
// Write a JavaScript program to compute the sum and product of an array of integers.

// var array = [1, 2, 3, 4, 5, 6],
//     s = 0,
//     p = 1,
//     i;
// for (i = 0; i < array.length; i += 1) {
//     s += array[i];
//     p *= array[i];
// }
// console.log('Sum : ' + s + ' Product :  ' + p);     // Sum : 21 Product :  720





// Problem 13: 
// Write a JavaScript program to add items in an blank array and display the items.

// var x = 0;
// var array = Array();

// function add_element_to_array() {
//     array[x] = document.getElementById("text1").value;
//     alert("Element: " + array[x] + " Added at index " + x);
//     x++;
//     document.getElementById("text1").value = "";
// }

// function display_array() {
//     var e = "<hr/>";

//     for (var y = 0; y < array.length; y++) {
//         e += "Element " + y + " = " + array[y] + "<br/>";
//     }
//     document.getElementById("Result").innerHTML = e;
// }




// Problem 14: 
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// function removeDuplicates(num) {
//     var x,
//         len = num.length,
//         out = [],
//         obj = {};

//     for (x = 0; x < len; x++) {
//         obj[num[x]] = 0;
//     }
//     for (x in obj) {
//         out.push(x);
//     }
//     return out;
// }
// var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// result = removeDuplicates(Mynum);

// console.log(Mynum);     // [ 1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6 ]
// console.log(result);    // [ '1', '2', '3', '4', '5', '6', '7', '8' ]




// Problem 15: 
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// Use ordinal numbers to tell their position.

// var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// function Ordinal(n) {
//     var o = ["th", "st", "nd", "rd"],
//         x = n % 100;
//     return x + (o[(x - 20) % 10] || o[x] || o[0]);
// }

// for (n = 0; n < color.length; n++) {
//     var ordinal = n + 1;

//     var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

//     console.log(output);
// }

// // 1st choice is Blue.
// // 2nd choice is Green.
// // 3rd choice is Red.
// // 4th choice is Orange.
// // 5th choice is Violet.
// // 6th choice is Indigo.
// // 7th choice is Yellow.






// Problem 16: 
// Write a JavaScript program to find the leap years in a given range of years.

// function leap_year_range(st_year, end_year) {
//     var year_range = [];
//     for (var i = st_year; i <= end_year; i++) {
//         year_range.push(i);
//     }
//     var new_array = [];

//     year_range.forEach(
//         function (year) {
//             if (test_LeapYear(year))
//                 new_array.push(year);
//         });

//     return new_array;
// }

// function test_LeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//         return year;
//     } else {
//         return false;
//     }
// }

// console.log(leap_year_range(2000, 2012));       // [ 2000, 2004, 2008, 2012 ]





// Problem 17: 
// Write a JavaScript program to shuffle an array.
// Different each time.

// function shuffle(arra1) {
//     var ctr = arra1.length, temp, index;

//     // While there are elements in the array
//     while (ctr > 0) {
//         index = Math.floor(Math.random() * ctr);        // Pick a random index
//         ctr--;      // Decrease ctr by 1
//         temp = arra1[ctr];      // And swap the last element with it
//         arra1[ctr] = arra1[index];
//         arra1[index] = temp;
//     }
//     return arra1;
// }
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(shuffle(myArray));      // [ 7, 1, 6, 3, 5, 2, 8, 9, 0, 4 ]



// Problem 18: 
// Write a JavaScript program to perform a binary search within an array.
// A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.

// function binary_Search(items, value) {
//     var firstIndex = 0,
//         lastIndex = items.length - 1,
//         middleIndex = Math.floor((lastIndex + firstIndex) / 2);

//     while (items[middleIndex] != value && firstIndex < lastIndex) {
//         if (value < items[middleIndex]) {
//             lastIndex = middleIndex - 1;
//         }
//         else if (value > items[middleIndex]) {
//             firstIndex = middleIndex + 1;
//         }
//         middleIndex = Math.floor((lastIndex + firstIndex) / 2);
//     }

//     return (items[middleIndex] != value) ? -1 : middleIndex;
// }
// var items = [1, 2, 3, 4, 5, 7, 8, 9];

// console.log(binary_Search(items, 1));   // 0
// console.log(binary_Search(items, 5));   // 4





// Problem 19: 
// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

// function Arrays_sum(array1, array2) {
//     var result = [];
//     var ctr = 0;
//     var x = 0;

//     if (array1.length === 0)
//         return "array1 is empty";
//     if (array2.length === 0)
//         return "array2 is empty";

//     while (ctr < array1.length && ctr < array2.length) {
//         result.push(array1[ctr] + array2[ctr]);
//         ctr++;
//     }

//     if (ctr === array1.length) {
//         for (x = ctr; x < array2.length; x++) {
//             result.push(array2[x]);
//         }
//     }
//     else {
//         for (x = ctr; x < array1.length; x++) {
//             result.push(array1[x]);
//         }
//     }
//     return result;
// }

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

// // [ 4, 5, 8, 10, 12, 13 ]




// Problem 20: 
// Write a JavaScript program to find duplicate values in a JavaScript array.

// function find_duplicate_in_array(arra1) {
//     var object = {};
//     var result = [];

//     arra1.forEach(function (item) {
//         if (!object[item])
//             object[item] = 0;
//         object[item] += 1;
//     })

//     for (var prop in object) {
//         if (object[prop] >= 2) {
//             result.push(prop);
//         }
//     }

//     return result;

// }

// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// // [ '4', '7' ]




// Problem 21: 
// Write a JavaScript program to flatten a nested (any depth) array. 
// If you pass shallow, the array will only be flattened a single level.

// var flatten = function (a, shallow, r) {
//     if (!r) { r = [] }

//     if (shallow) {
//         return r.concat.apply(r, a);
//     }

//     for (var i = 0; i < a.length; i++) {
//         if (a[i].constructor == Array) {
//             flatten(a[i], shallow, r);
//         } else {
//             r.push(a[i]);
//         }
//     }
//     return r;
// }

// console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));         // [ 1, 2, 3, 4, 5, 6 ]
// console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));   // [ 1, 2, 3, [ [ 4 ] ], 5, 6 ]





// Problem 22: 
// Write a JavaScript program to compute the union of two arrays.

// function union(arra1, arra2) {
//     if ((arra1 == null) || (arra2 == null))
//         return void 0;

//     var obj = {};

//     for (var i = arra1.length - 1; i >= 0; --i)
//         obj[arra1[i]] = arra1[i];

//     for (var i = arra2.length - 1; i >= 0; --i)
//         obj[arra2[i]] = arra2[i];

//     var res = [];

//     for (var n in obj) {
//         if (obj.hasOwnProperty(n))
//             res.push(obj[n]);
//     }
//     return res;
// }

// console.log(union([1, 2, 3], [100, 2, 1, 10]));     // [ 1, 2, 3, 10, 100 ]





// Problem 23: 
// Write a JavaScript function to find the difference of two arrays.

// function differenceOf2Arrays(array1, array2) {
//     var temp = [];
//     array1 = array1.toString().split(',').map(Number);
//     array2 = array2.toString().split(',').map(Number);

//     for (var i in array1) {
//         if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
//     }
//     for (i in array2) {
//         if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
//     }
//     return temp.sort((a, b) => a - b);
// }

// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

// // [ 3, 10, 100 ]
// // [ 6 ]





// Problem 24:
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// function filter_array(test_array) {
//     var index = -1,
//         arr_length = test_array ? test_array.length : 0,
//         resIndex = -1,
//         result = [];

//     while (++index < arr_length) {
//         var value = test_array[index];

//         if (value) {
//             result[++resIndex] = value;
//         }
//     }

//     return result;
// }

// console.log(filter_array([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// // [ 15, -22, 47 ]





// Problem 25:
// Write a JavaScript function to sort the following array of objects by title value.

// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// function compare_to_sort(x, y) {
//     if (x.title < y.title)
//         return -1;
//     if (x.title > y.title)
//         return 1;
//     return 0;
// }

// console.log(library.sort(compare_to_sort));     // 

// // [
// //     {
// //         author: 'Suzanne Collins',
// //         title: 'Mockingjay: The Final Book of The Hunger Games',
// //         libraryID: 3245
// //     },
// //     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
// //     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
// // ]





// Problem 26:
// Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

// function twoSum(nums, target_num) {
//     var map = [];
//     var indexnum = [];

//     for (var x = 0; x < nums.length; x++) {
//         if (map[nums[x]] != null) {
//             var index = map[nums[x]];
//             indexnum[0] = index;
//             indexnum[1] = x;
//             break;
//         }
//         else {
//             map[target_num - nums[x]] = x;
//         }
//     }
//     return indexnum;
// }

// console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));      // [ 2, 3 ]






// Problem 27:
// Write a JavaScript function to retrieve the value of a given property from all elements in an array.

// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// function property_value(array, property_key) {
//     var arr = [],
//         index = -1,
//         arrlen = array.length, array_items;

//     while (++index < arrlen) {
//         array_items = array[index];

//         if (array_items.hasOwnProperty(property_key)) {
//             arr[arr.length] = array_items[property_key];
//         }
//     }

//     return arr;
// }

// console.log(property_value(library, 'title'));
// console.log(property_value(library, 'author'));

// // [
// //     'The Road Ahead',
// //     'Walter Isaacson',
// //     'Mockingjay: The Final Book of The Hunger Games'
// // ]

// // ['Bill Gates', 'Steve Jobs', 'Suzanne Collins']






// Problem 28:
// Write a JavaScript function to find the longest common starting substring in a set of strings.

// function longest_common_starting_substring(arr1) {
//     var arr = arr1.concat().sort(),
//         a1 = arr[0], a2 = arr[arr.length - 1], L = a1.length, i = 0;
//     while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
//     return a1.substring(0, i);
// }

// console.log(longest_common_starting_substring(['go', 'google']));   // go
// console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial']));    // SQL
// console.log(longest_common_starting_substring(['abcd', '1234']));   // 





// Problem 29:
// Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

// function num_string_range(start, end, step) {
//     var range = [];
//     if ((step === 0) || (typeof start == "undefined" || typeof end == "undefined") || (typeof start != typeof end))
//         return false;

//     if (end < start) {
//         step = -step;
//     }

//     if (typeof start == "number") {
//         while (step > 0 ? end >= start : end <= start) {
//             range.push(start);
//             start += step;
//         }
//     }
//     else if (typeof start == "string") {
//         if (start.length != 1 || end.length != 1) {
//             throw TypeError("Strings with one character are supported.");
//         }
//         start = start.charCodeAt(0);
//         end = end.charCodeAt(0);

//         while (step > 0 ? end >= start : end <= start) {
//             range.push(String.fromCharCode(start));
//             start += step;
//         }
//     }
//     else {
//         throw TypeError("Only string and number are supported");
//     }
//     return range;
// }

// console.log(num_string_range('a', "z", 2));
// console.log(num_string_range("Z", "A", 2));
// console.log(num_string_range(0, -5, 1));
// console.log(num_string_range(0, 25, 5));
// console.log(num_string_range(20, 5, 5));

// // [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y' ]
// // [ 'Z', 'X', 'V', 'T', 'R', 'P', 'N', 'L', 'J', 'H', 'F', 'D', 'B' ]
// // [ 0, -1, -2, -3, -4, -5 ]
// // [ 0, 5, 10, 15, 20, 25 ]
// // [ 20, 15, 10, 5 ]





// Problem 30:
// Write a JavaScript function to merge two arrays and removes all duplicates elements.

// function merge_array(array1, array2) {
//     var result_array = [];
//     var arr = array1.concat(array2);
//     var len = arr.length;
//     var assoc = {};

//     while (len--) {
//         var item = arr[len];

//         if (!assoc[item]) {
//             result_array.unshift(item);
//             assoc[item] = true;
//         }
//     }
//     return result_array;
// }

// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];

// console.log(merge_array(array1, array2));   // [ 3, 2, 30, 1 ]





// Problem 31:
// Write a JavaScript function to remove a specific element from an array.

// function remove_array_element(array, n) {
//     var index = array.indexOf(n);
//     if (index > -1) {
//         array.splice(index, 1);
//     }
//     return array;
// }

// console.log(remove_array_element([2, 5, 9, 6], 5));     // [ 2, 9, 6 ]





// Problem 32:
// Write a JavaScript function to find an array contains a specific element. 

// function contains(arr, element) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }
// arr = [2, 5, 9, 6];

// console.log(contains(arr, 5));  // true





// Problem 33:
// Write a JavaScript script to empty an array keeping the original.

// var arr = [1, 3, 6, 3, -5];
// console.log(arr);   // [ 1, 3, 6, 3, -5 ]

// arr.length = 0;
// console.log(arr);   // []





// Problem 34:
// Write a JavaScript function to get nth largest element from an unsorted array.

// function nthlargest(arra, highest) {
//     var x = 0,
//         y = 0,
//         z = 0,
//         temp = 0,
//         tnum = arra.length,
//         flag = false,
//         result = false;

//     while (x < tnum) {
//         y = x + 1;

//         if (y < tnum) {
//             for (z = y; z < tnum; z++) {

//                 if (arra[x] < arra[z]) {
//                     temp = arra[z];
//                     arra[z] = arra[x];
//                     arra[x] = temp;
//                     flag = true;
//                 } else {
//                     continue;
//                 }
//             }
//         }

//         if (flag) {
//             flag = false;
//         } else {
//             x++;
//             if (x === highest) {

//                 result = true;
//             }
//         }
//         if (result) {
//             break;
//         }
//     }

//     return (arra[(highest - 1)]);
// }

// console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));  // 89





// Problem 35:
// Write a JavaScript function to get a random item from an array.

// function random_item(items) {
//     return items[Math.floor(Math.random() * items.length)];
// }
// var items = [254, 45, 212, 365, 2543];

// console.log(random_item(items));    // 254





// Problem 36:
// Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

// function array_filled(n, val) {
//     return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
// }

// console.log(array_filled(6, 0));    // [ 0, 0, 0, 0, 0, 0 ]
// console.log(array_filled(4, 11));   // [ 11, 11, 11, 11 ]





// Problem 37:
// Write a JavaScript function to create a specified number of elements with pre-filled string value array.

// function array_filled(n, val) {
//     return Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
// }

// console.log(array_filled(3, 'default value'));
// console.log(array_filled(4, 'password'));

// // [ 'default value', 'default value', 'default value' ]
// // [ 'password', 'password', 'password', 'password' ]





// Problem 38:
// Write a JavaScript function to move an array element from one position to another.

// function move(arr, old_index, new_index) {
//     while (old_index < 0) {
//         old_index += arr.length;
//     }
//     while (new_index < 0) {
//         new_index += arr.length;
//     }
//     if (new_index >= arr.length) {
//         var k = new_index - arr.length;
//         while ((k--) + 1) {
//             arr.push(undefined);
//         }
//     }
//     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
//     return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));  // [ 20, 30, 10, 40, 50 ]
// console.log(move([10, 20, 30, 40, 50], -1, -2));    // [ 10, 20, 30, 50, 40 ]





// Problem 39:
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// function filter_array_values(arr) {
//     arr = arr.filter(isEligible);
//     return arr;
// }

// function isEligible(value) {
//     if (value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//     }
// }

// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

// // [ 58, 'abcd', true ]





// Problem 40:
// Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. 

// function array_range(start, len) {
//     var arr = new Array(len);
//     for (var i = 0; i < len; i++, start++) {
//         arr[i] = start;
//     }
//     return arr;
// }

// console.log(array_range(1, 4));     // [ 1, 2, 3, 4 ]
// console.log(array_range(-6, 4));    // [ -6, -5, -4, -3 ]




// Problem 41:
// Write a JavaScript function to generate an array between two integers of 1 step length.

// function rangeBetwee(start, end) {
//     if (start > end) {
//         var arr = new Array(start - end + 1);
//         for (var i = 0; i < arr.length; i++, start--) {
//             resarrult[i] = start;
//         }
//         return arr;
//     }
//     else {
//         var arro = new Array(end - start + 1);

//         for (var j = 0; j < arro.length; j++, start++) {
//             arro[j] = start;
//         }
//         return arro;
//     }
// }

// console.log(rangeBetwee(4, 7));     // [ 4, 5, 6, 7 ]
// console.log(rangeBetwee(-4, 7));     // [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7 ]





// Problem 42:
// Write a JavaScript function to find the unique elements from two arrays.

// function difference(arr1, arr2) {
//     var a1 = flatten(arr1, true);
//     var a2 = flatten(arr2, true);

//     var a = [], diff = [];
//     for (var i = 0; i < a1.length; i++)
//         a[a1[i]] = false;
//     for (i = 0; i < a2.length; i++)
//         if (a[a2[i]] === true) { delete a[a2[i]]; }
//         else a[a2[i]] = true;
//     for (var k in a)
//         diff.push(k);
//     return diff;
// }

// var flatten = function (a, shallow, r) {
//     if (!r) { r = []; }
//     if (shallow) {
//         return r.concat.apply(r, a);
//     }
//     for (i = 0; i < a.length; i++) {
//         if (a[i].constructor == Array) {
//             flatten(a[i], shallow, r);
//         } else {
//             r.push(a[i]);
//         }
//     }
//     return r;
// };

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// // [ '1', '2', '3', '10', '100' ]
// // [ '1', '2', '3', '4', '5', '6' ]
// // [ '1', '2', '3', '10', '100' ]






// Problem 43:
// Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

//Source:https://bit.ly/3hEZdCl
//unzip
// const unzip = arr =>
//     arr.reduce(
//         (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
//         Array.from({
//             length: Math.max(...arr.map(x => x.length))
//         }).map(x => [])
//     );
// console.log(unzip([['a', 1, true], ['b', 2, false]]));
// console.log(unzip([['a', 1, true], ['b', 2]]));

// // [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]
// // [ [ 'a', 'b' ], [ 1, 2 ], [ true ] ]





// Problem 44:
// Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.

//Source:https://bit.ly/3hEZdCl
//Add the key-value pair to the object.
// const indexOn = (arr, key) =>
//     arr.reduce((obj, v) => {
//         const { [key]: id, ...data } = v;
//         obj[id] = data;
//         return obj;
//     }, {});

// console.log(indexOn([
//     { id: 10, name: 'apple' },
//     { id: 20, name: 'orange' }
// ], x => x.id));

// // { undefined: { id: 20, name: 'orange' } }














