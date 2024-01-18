// "use strict";
// const list = [];

// class MyRecord {
//   constructor() {
//     const x = "hi there?";
//     this.name = x.repeat(10000000);
//     this.id = x.repeat(10000000);
//     this.account = x.repeat(10000000);
//   }
// }

// setInterval(() => {
//   const record = new MyRecord();
//   list.push(record);
// }, 10);

// setInterval(() => {
//   console.log(process.memoryUsage());
// }, 100);

const v8 = require("v8");
console.log(v8.getHeapStatistics());
