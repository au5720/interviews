const fizzBuzz1 = (n) => {
  if(n % 15 === 0){
    console.log(n + ' FizzBuzz');
  } else if(n % 3 === 0) {
    console.log(n + ' Fizz');
  } else if(n % 5 === 0) {
    console.log(n + ' Buzz');
  } else {
    console.log(n);
  }
};


const fizzBuzz2 = (n) => {
  console.log( 
      (n%3 ? '' : 'Fizz') +
      (n%5 ? '' : 'Buzz') || n);
};

for(let x=1; x < 101; x++){
  fizzBuzz2(x);
}