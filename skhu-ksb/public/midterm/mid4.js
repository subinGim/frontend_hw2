let b = [];
for(let i=0; i<10; i++){
    b[i] = Math.floor(Math.random()*100+1);
}
console.log(b);
let num = 0;
b.reduce((i) => i % 2 === 0 ? num++ : 0);
console.log(num);