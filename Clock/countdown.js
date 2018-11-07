let logTick = true;
let counter = 10;

console.log(counter)

let timer = setInterval(() => {
    counter--;
    console.log(counter);
}, 1000);

setTimeout(() =>{
    clearInterval(timer);
}, counter * 1000 + 100);