let a = [];
for(let i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}
console.log(a);
for(let i=0; i<a.length; i++){
    let b = a[i]/10; //십의 자리
    let c = a[i] - b*10; //일의 자리
    if(c >= 5 && c <= 9)
        a.splice(i,1);
}
console.log(a);