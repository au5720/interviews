


const fib = (n) => {
  if(n < 2) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
};

if(process.argv.length < 2) {
  console.log('Usage: node fib.js 5');
} else {
  let n = process.argv[2];
  let start=Date.now();
  console.log(fib(n)); 
  let end=Date.now(); 
  console.log(`Run time :  + ${end-start} ms`);
}