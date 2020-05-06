let a1 = [];
let num = 0;
for(let i=0; i<3; i++){
    a1[i] = [];
    for(let j=0; j<2; j++){
        a1[i][j] = num;
        num++;
    }
}
let a2 = a1.slice(0);
a1[0][0] = 100;
console.log(a1);
console.log(a2);