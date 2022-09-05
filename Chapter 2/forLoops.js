// Classic for loop.
for (let i = 1; i <= 10; i++) console.log(i);
let a = "Hello, friend.";
for (let i = a.length - 1; i >= 0; i--) console.log(a[i]);

// for of loop
let arr = [, 2, , 4];
arr[9] = 100;
for (const ele of arr) console.log(ele);

// for in loop
let obj = { name: "Harry Smith", age: 42 };
for (const key in obj) console.log(`${key}: ${obj[key]}`);

let nums = [1, 2, , 4];
nums[99] = 100;
nums.lucky = true;
for (const i in nums) console.log(`${i}: ${nums[i]}`);
