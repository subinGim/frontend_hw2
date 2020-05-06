let a = [];
for(let i=0; i<5; i++){
    let b = Math.floor(Math.random()*100+1);
    toString(b);
    a[i] = b;
}
console.log(a);
a.sort((a,b) => b-a);
console.log(a)