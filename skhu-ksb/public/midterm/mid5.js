let a = ["hello.html", "world.js", "readme.txt"];

function getExtension(fileName){
    let index = fileName.indexOf(".");
    let c = fileName.slice(index);
    return c;
}
for(let i = 0; i< a.length; i++){
    let result = getExtension(a[i]);
    console.log(result);
}
