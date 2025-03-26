// 1-misol

const arr = [[1, 2, 3], [4, 5], [10, 20]];

const newArr = arr.map((el) => el.reduce((previousValue, currentValue) => previousValue + currentValue, 0,));

console.log(newArr);

// endi reduce() methodini yarataman qani endi shunda ha 95 da past quyarmikansizlar

