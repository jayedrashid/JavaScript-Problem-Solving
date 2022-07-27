// *** Object Problems ***
// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php





// Problem 1:
// Write a JavaScript program to list the properties of a JavaScript object.

// function _keys(obj) {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
// }
// function isObject(obj) {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
// }

// console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// // [ 'red', 'green', 'white' ]





// Problem 2:
// Write a JavaScript program to delete the rollNum property from the following object. 
// Also print the object before or after deleting the property.

// var student = {
//     name: "David Rayy",
//     studentClass: "VI",
//     rollNum: 12
// };

// console.log(student);   // { name: 'David Rayy', studentClass: 'VI', rollNum: 12 }

// delete student.rollNum;
// console.log(student);   // { name: 'David Rayy', studentClass: 'VI' }





// Problem 3:
// Write a JavaScript program to get the length of a JavaScript object.

// Object.objsize = function (Myobj) {
//     var osize = 0, key;
//     for (key in Myobj) {
//         if (Myobj.hasOwnProperty(key)) osize++;
//     }
//     return osize;
// };

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// var objsize = Object.objsize(student);

// console.log('Size of the current object : ' + objsize);

// // Size of the current object : 3





// Problem 4:
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];

// for (var i = 0; i < library.length; i++) {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//         console.log("Already read " + book);
//     } else {
//         console.log("You still need to read " + book);
//     }
// }

// // Already read 'Bill Gates' by The Road Ahead.
// // Already read 'Steve Jobs' by Walter Isaacson.
// // You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.





// Problem 5:
// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

// function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
// }

// Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
// };

// var cyl = new Cylinder(7, 4);
// // Volume of the cylinder with four decimal places.
// console.log('volume =', cyl.Volume().toFixed(4));   // volume = 87.9646





// Problem 6:
// Write a Bubble Sort algorithm in JavaScript.

// Array.prototype.bubbleSort_algo = function () {
//     var is_sorted = false;
//     while (!is_sorted) {
//         is_sorted = true;
//         for (var n = 0; n < this.length - 1; n++) {
//             if (this[n] > this[n + 1]) {
//                 var x = this[n + 1];
//                 this[n + 1] = this[n];
//                 this[n] = x;
//                 is_sorted = false;
//             }
//         }
//     }
//     return this;
// };

// console.log([6, 4, 0, 3, -2, 1].bubbleSort_algo());

// // [ -2, 0, 1, 3, 4, 6 ]




// Problem 7:
// Write a JavaScript program which returns a subset of a string.

// String.prototype.sub_String = function () {
//     var subset = [];
//     for (var m = 0; m < this.length; m++) {
//         for (var n = m + 1; n < this.length + 1; n++) {
//             subset.push(this.slice(m, n));
//         }
//     }
//     return subset;
// };

// console.log("dog".sub_String());    // [ 'd', 'do', 'dog', 'o', 'og', 'g' ]





// Problem 8:
// Write a JavaScript program to create a Clock.

// function my_Clock() {
//     this.cur_date = new Date();
//     this.hours = this.cur_date.getHours();
//     this.minutes = this.cur_date.getMinutes();
//     this.seconds = this.cur_date.getSeconds();
// }
// my_Clock.prototype.run = function () {
//     setInterval(this.update.bind(this), 1000);
// };
// my_Clock.prototype.update = function () {
//     this.updateTime(1);
//     console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
// };
// my_Clock.prototype.updateTime = function (secs) {
//     this.seconds += secs;
//     if (this.seconds >= 60) {
//         this.minutes++;
//         this.seconds = 0;
//     }
//     if (this.minutes >= 60) {
//         this.hours++;
//         this.minutes = 0;
//     }
//     if (this.hours >= 24) {
//         this.hours = 0;
//     }
// };
// var clock = new my_Clock();
// clock.run();

// 14:44:13
// 14:44:14
// 14:44:15
// 14:44:16
// 14:44:17
// ........




// Problem 9:
// Write a JavaScript program to calculate the area and perimeter of a circle.

// function circle(radius) {
//     this.radius = radius;
//     // area method
//     this.area = function () {
//         return Math.PI * this.radius * this.radius;
//     };
//     // perimeter method
//     this.perimeter = function () {
//         return 2 * Math.PI * this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));     // Area = 28.27
// console.log('perimeter =', c.perimeter().toFixed(2));   // perimeter = 18.85





// Problem 10:
// Write a JavaScript program to sort an array of JavaScript objects.

// var library = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         libraryID: 1254
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];

// var sort_by = function (field_name, reverse, initial) {

//     var key = initial ?
//         function (x) {
//             return initial(x[field_name]);
//         } :
//         function (x) {
//             return x[field_name];
//         };

//     reverse = !reverse ? 1 : -1;

//     return function (x, y) {
//         return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
//     };
// };


// var newobj = library.sort(sort_by('libraryID', true, parseInt));

// console.log(newobj);

// // [
// //     { title: 'Steve Jobs', author: 'Walter Isaacson', libraryID: 4264 },
// //     {
// //         title: 'Mockingjay: The Final Book of The Hunger Games',
// //         author: 'Suzanne Collins',
// //         libraryID: 3245
// //     },
// //     { title: 'Bill Gates', author: 'The Road Ahead', libraryID: 1254 }
// // ]





// Problem 11:
// Write a JavaScript function to print all the methods in an JavaScript object.

// function FindAllMethods(obj) {
//     return Object.getOwnPropertyNames(obj).filter(function (property) {
//         return typeof obj[property] == "function";
//     });
// }
// //above code finds methods only

// //Following code finds both properties and methods 
// console.log(FindAllMethods(Math));
// console.log(FindAllMethods(Array));

// function all_properties(obj) {
//     return Object.getOwnPropertyNames(obj);
// }

// console.log(all_properties(Math));

// console.log(all_properties(Array));

// // [
// //     'abs',    'acos',    'acosh',  'asin',
// //     'asinh',  'atan',    'atanh',  'atan2',
// //     'ceil',   'cbrt',    'expm1',  'clz32',
// //     'cos',    'cosh',    'exp',    'floor',
// //     'fround', 'hypot',   'imul',   'log',
// //     'log1p',  'log2',    'log10',  'max',
// //     'min',    'pow',     'random', 'round',
// //     'sign',   'sin',     'sinh',   'sqrt',
// //     'tan',    'tanh',    'trunc',  'E',
// //     'LN10',   'LN2',     'LOG10E', 'LOG2E',
// //     'PI',     'SQRT1_2', 'SQRT2'
// // ]

// // [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]





// Problem 12:
// Write a JavaScript function to parse an URL.

// function parse_URL(url) {
//     var a = document.createElement('a');
//     a.href = url;
//     return {
//         source: url,
//         protocol: a.protocol.replace(':', ''),
//         host: a.hostname,
//         port: a.port,
//         query: a.search,
//         params: (function () {
//             var ret = {},
//                 seg = a.search.replace(/^\?/, '').split('&'),
//                 len = seg.length,
//                 i = 0,
//                 s;
//             for (; i < len; i++) {
//                 if (!seg[i]) {
//                     continue;
//                 }
//                 s = seg[i].split('=');
//                 ret[s[0]] = s[1];
//             }
//             return ret;
//         })(),
//         file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
//         hash: a.hash.replace('#', ''),
//         path: a.pathname.replace(/^([^\/])/, '/$1'),
//         relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
//         segments: a.pathname.replace(/^\//, '').split('/')
//     };
// }

// console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));






// Problem 13:
// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// function allKeys(obj) {
//     if (!isObject(obj)) return [];
//     var keys = [];
//     for (var key in obj) keys.push(key);
//     return keys;
// }
// function isObject(obj) {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
// }
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.rollno = true;

// console.log(allKeys(new Student("Sara")));  // [ 'name', 'rollno' ]





// Problem 14:
// Write a JavaScript function to retrieve all the values of an object's properties.

// function all_values(obj) {
//     var keys = _keys(obj);
//     var length = keys.length;
//     var values = Array(length);
//     for (var i = 0; i < length; i++) {
//         values[i] = obj[keys[i]];
//     }
//     return values;
// }
// function _keys(obj) {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
// }
// function isObject(obj) {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
// }

// console.log(all_values({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// // [ '#FF0000', '#00FF00', '#FFFFFF' ]





// Problem 15:
// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

// function key_value_pairs(obj) {
//     var keys = _keys(obj);
//     var length = keys.length;
//     var pairs = Array(length);
//     for (var i = 0; i < length; i++) {
//         pairs[i] = [keys[i], obj[keys[i]]];
//     }
//     return pairs;
// }

// function _keys(obj) {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
// }
// function isObject(obj) {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
// }

// console.log(key_value_pairs({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// // [
// //     ['red', '#FF0000'],
// //     ['green', '#00FF00'],
// //     ['white', '#FFFFFF']
// // ]





// Problem 16:
// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// function invert_key_value(obj) {
//     var result = {};
//     var keys = _keys(obj);
//     for (var i = 0, length = keys.length; i < length; i++) {
//         result[obj[keys[i]]] = keys[i];
//     }
//     return result;
// }
// function _keys(obj) {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
// }
// function isObject(obj) {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
// }

// console.log(invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// // { '#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white' }





// Problem 17:
// Write a JavaScript function to check whether an object contains given property.

// function hasKey(obj, key) {
//     return obj != null && hasOwnProperty.call(obj, key);
// }

// console.log(hasKey({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "green"));

// // true





// Problem 18:
// Write a JavaScript function to check whether a given value is a DOM element. 

// function is_dom_element(obj) {
//     return !!(obj && obj.nodeType === 1);
// }

// console.log(is_dom_element(jQuery('body')[0]));

// // true































