let b = [];
for(let i=0; i<10; i++){
    b[i] = Math.floor(Math.random()*100+1);
}
console.log(b);

let count = 0;
b.reduce((a, b) => {
    if(a % 2 == 0)
        count++;
    return b;
});
console.log(count);