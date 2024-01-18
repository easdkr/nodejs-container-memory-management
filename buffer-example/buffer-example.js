const buf = Buffer.alloc(2000 * 1024 * 1024);
console.log(Math.round(buf.length / (1024 * 1024)));
console.log(Math.round(process.memoryUsage().rss / (1024 * 1024)));
