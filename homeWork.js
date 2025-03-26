// // 1-misol

// const arr = [[1, 2, 3], [4, 5], [10, 20]];

// const newArr = arr.map((el) => el.reduce((previousValue, currentValue) => previousValue + currentValue, 0,));

// console.log(newArr);

// // 2-misol  

// const arr = [5, 10, 15, 20, 25, 30];

// let sum = arr.filter((value, index) => index % 2 == 0).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

// console.log(sum)

// // 3-misol 
// const user = { 
//     name: "Ali", 
//     age: 25, 
//     job: "Developer", 
//     city: "Tashkent" 
// };

// let x = Object.keys(user).sort().map(key => ({ [key]: user[key]}))

// console.log(x);

// //  4-misol 

// // spread usuli
// // const obj1 = { a: 1, b: 2, c: 3 };
// // const obj2 = { b: 4, d: 5 };

// // let res = {...obj1, ...obj2};
// // console.log("Spread usuli natijasi", res);

// // oddiy usulda qilsak
// const sumFun = (obj1, obj2) => {
//     for(let key in obj2) obj1[key] = obj2[key];
//     return obj1;
// }
// let result = sumFun(obj1, obj2);
// console.log(result)

// // 5-misol 

// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const countMap = new Map();

// arr.forEach(item => {
//     countMap.set(item, (countMap.get(item) || 0) + 1);
// });

// console.log(countMap);
// //  6-misol 
// const map = new Map([
//   ["a", 3],
//   ["b", 7],
//   ["c", 1],
//   ["d", 10],
// ]);

// const keysGreaterThanFive = [];

// for (const [key, value] of map) {
//     if (value > 5) {
//         keysGreaterThanFive.push(key);
//     }
// }

// console.log(keysGreaterThanFive);
// //  7-misol 
// const numbers = new Set([12, 45, 7, 22, 5, 89]);

// const maxNumber = Math.max(...numbers);

// console.log(maxNumber);

// // 8-misol 
// const str = "hello world hello everyone in this world";

// const wordCount = new Map();

// str.split(" ").forEach(word => {
//     wordCount.set(word, (wordCount.get(word) || 0) + 1);
// });

// console.log(wordCount);
